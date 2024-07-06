"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="z-10 w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Sign in
          </h2>
          <form className="mt-8 space-y-6">
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
                placeholder="John Doe"
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
                placeholder="Enter the password"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            {userInfo && (
              <div>
                <h3>User Info:</h3>
                <pre>{JSON.stringify(userInfo, null, 2)}</pre>
              </div>
            )}
            <Button type="submit" className="w-full">
              Sign in
            </Button>
            <p className="mt-2 text-sm text-center text-gray-600 font-thin">
              Already signed up?{" "}
              <Link
                href="/sign-up"
                className="font-thin text-indigo-600 hover:text-indigo-500"
              >
                Go to sign up.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
