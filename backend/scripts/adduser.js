const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");

// Load environment variables manually
const envPath = path.join(__dirname, "..", ".env");
let DATABASE_URL;

try {
  const envContent = fs.readFileSync(envPath, "utf-8");
  const envVars = envContent.split("\n");
  for (const line of envVars) {
    const [key, value] = line.split("=");
    if (key === "DATABASE_URL") {
      DATABASE_URL = value.trim();
      break;
    }
  }
} catch (error) {
  console.error("Error reading .env file:", error.message);
  process.exit(1);
}

if (!DATABASE_URL) {
  console.error("DATABASE_URL not found in .env file");
  process.exit(1);
}

console.log("DATABASE_URL:", DATABASE_URL); // Log the DATABASE_URL for debugging

// Parse the DATABASE_URL
const parseDbUrl = (url) => {
  const regex = /postgresql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
  const match = url.match(regex);
  if (!match) throw new Error("Invalid DATABASE_URL format");
  return {
    user: match[1],
    password: decodeURIComponent(match[2]), // Decode the password
    host: match[3],
    port: parseInt(match[4]),
    database: match[5],
  };
};

let dbConfig;
try {
  dbConfig = parseDbUrl(DATABASE_URL);
  console.log("Parsed database config:", dbConfig); // Log the parsed config for debugging
} catch (error) {
  console.error("Error parsing DATABASE_URL:", error.message);
  process.exit(1);
}

const pool = new Pool(dbConfig);

async function addFirstUser() {
  const client = await pool.connect();

  try {
    // Start a transaction
    await client.query("BEGIN");

    // Check if the user already exists
    const checkUser = await client.query(
      "SELECT * FROM user_profiles WHERE username = $1",
      ["tnp"]
    );

    if (checkUser.rows.length > 0) {
      console.log('User "tnp" already exists. No changes made.');
      return;
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash("1212", saltRounds);

    // Insert the new user
    const insertUser = await client.query(
      "INSERT INTO user_profiles (username, password, role, email) VALUES ($1, $2, $3, $4) RETURNING id",
      ["AutoWeb", hashedPassword, "admin", "tnp@example.com"]
    );

    // Commit the transaction
    await client.query("COMMIT");

    console.log(
      `User "tnp" added successfully with ID: ${insertUser.rows[0].id}`
    );
  } catch (e) {
    await client.query("ROLLBACK");
    console.error("Error adding user:", e);
  } finally {
    client.release();
  }

  // Close the pool
  await pool.end();
}

addFirstUser().catch((error) => {
  console.error("Unhandled error:", error);
  process.exit(1);
});
