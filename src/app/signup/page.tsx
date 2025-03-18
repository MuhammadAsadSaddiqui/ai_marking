"use client";
import React, { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setMessage(data.message || data.error);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-cyan-800 text-black ">
        <form
          onSubmit={handleSignup}
          className="p-6 bg-white shadow-md rounded w-96"
        >
          <h2 className="text-xl font-bold mb-4">Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Sign Up
          </button>
          {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
        </form>
      </div>
    </>
  );
}
