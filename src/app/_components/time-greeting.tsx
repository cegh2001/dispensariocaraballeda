"use client";

import { useState, useEffect } from "react";

export function TimeGreeting() {
  const [greeting, setGreeting] = useState("Hola");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Buen día");
    } else if (hour < 19) {
      setGreeting("Buenas tardes");
    } else {
      setGreeting("Buenas noches");
    }
  }, []);

  return <>{greeting}</>;
}