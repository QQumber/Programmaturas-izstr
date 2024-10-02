"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./admin.module.css";

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div>Ielādē...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Darbinieku/Admin panelis</h1>
      <p>
        Šeit būs pieejama informācija un funkcijas darbiniekiem un
        administratoriem.
      </p>
      {/* Add more admin panel content here */}
    </div>
  );
}
