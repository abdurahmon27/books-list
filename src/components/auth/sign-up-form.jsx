"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const uniqueKey = uuidv4();

    const myHeaders = new Headers();
    myHeaders.append("Key", uniqueKey);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: username,
      secret: password,
    });

    const signStr = `POST/signup${raw}${password}`; 
    const sign = CryptoJS.MD5(signStr).toString();

    myHeaders.append("Sign", sign);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://no23.lavina.tech/signup", requestOptions);
      const result = await response.json();
      if (response.ok) {
        setSuccess("User registered successfully!");
        setError(null);
        router.push("/");
        console.log(result);
      } else {
        setError(result.message || "An error occurred");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="z-10 w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Sign Up
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="john doe"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Create password"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Repeat the password"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            {success && <p className="text-sm text-green-500">{success}</p>}
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <p className="mt-2 text-sm text-center text-gray-600 font-thin">
              Already signed up?{" "}
              <Link
                href="/sign-in"
                className="font-thin text-indigo-600 hover:text-indigo-500"
              >
                Go to sign in.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
