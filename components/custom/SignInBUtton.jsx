"use client";
import React from "react";
import { Button } from "../ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function SignInButton() { // Fixed typo in component name
  const CreateUser = useMutation(api.users.CreateUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Token Response:", tokenResponse);

      
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse?.access_token}` }, // Fixed string concatenation
          }
        );

        console.log( userInfo.data);
        const user = userInfo.data; // Make sure user is defined here

        // Save to DB with credits
        const result = await CreateUser({
          name: user?.name,
          email: user?.email,
          picture: user?.picture,
        });

        const userDetail = {
          ...user,
          _id: result?.id ?? result,

        };

        if (typeof window !== undefined) {
          localStorage.setItem("userDetail", JSON.stringify(userDetail)); // Corrected storage
        }

    },
  });

  return (
    <div>
      <Button onClick={googleLogin}>Get Started</Button>
    </div>
  );
}

export default SignInButton;
