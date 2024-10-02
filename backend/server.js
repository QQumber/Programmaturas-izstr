const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Helper function to generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ error: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(500).json({ error: "Failed to authenticate token" });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

// Routes

// User authentication
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM user_profiles WHERE username = $1",
      [username]
    );
    if (result.rows.length > 0) {
      const user = result.rows[0];
      if (await bcrypt.compare(password, user.password)) {
        const token = generateToken(user);
        res.json({
          token,
          user: { id: user.id, username: user.username, role: user.role },
        });
      } else {
        res.status(400).json({ error: "Invalid password" });
      }
    } else {
      res.status(400).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get services
app.get("/api/services", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM services");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create booking
app.post("/api/bookings", verifyToken, async (req, res) => {
  const {
    service_id,
    customer_name,
    customer_email,
    customer_phone,
    booking_date,
    notes,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO bookings (user_id, service_id, customer_name, customer_email, customer_phone, booking_date, status, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        req.userId,
        service_id,
        customer_name,
        customer_email,
        customer_phone,
        booking_date,
        "SCHEDULED",
        notes,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get bookings
app.get("/api/bookings", verifyToken, async (req, res) => {
  try {
    let query = "SELECT * FROM bookings";
    const queryParams = [];

    if (req.userRole !== "admin") {
      query += " WHERE user_id = $1";
      queryParams.push(req.userId);
    }

    const result = await pool.query(query, queryParams);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update booking status
app.put("/api/bookings/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const result = await pool.query(
      "UPDATE bookings SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *",
      [status, id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Booking not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add service history
app.post("/api/service-history", verifyToken, async (req, res) => {
  const { booking_id, service_id, completion_date, notes } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO service_history (booking_id, user_id, service_id, completion_date, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [booking_id, req.userId, service_id, completion_date, notes]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get service history
app.get("/api/service-history", verifyToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM service_history");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
