"use client";
import { API_KEY, API_SIGN } from "@/components/constants";
import React, { useEffect, useState } from "react";

const Books = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Key", API_KEY);
      myHeaders.append("Sign", API_SIGN);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "https://no23.lavina.tech/myself",
          requestOptions
        );
        const result = await response.json();
        
        console.log("API Response:", result); // Log the response for debugging
        
        if (response.ok) {
          setUserInfo(result);
        } else {
          setError(result.message || "An error occurred");
        }
      } catch (error) {
        setError("An error occurred");
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Info</h1>
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
    </div>
  );
};

export default Books;
