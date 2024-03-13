"use client";
import { createClient } from '@supabase/supabase-js'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const supabase = createClientComponentClient();


// const supabaseUrl = 'https://ecdythhdhtfnxnwaxunx.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjZHl0aGhkaHRmbnhud2F4dW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwMDMwMDIsImV4cCI6MjAyNTU3OTAwMn0.M9aFGVkI5DqHAF0fsLyxELI0kCWElt7MXp_WAm4yzRI'
// const supabase = createClient(supabaseUrl, supabaseKey)

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
    setEmail("");
    setPassword("");
  };
  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
    setEmail("");
    setPassword("");
  };
  return (
    <main className="h-screen flex align-center justify-center items-center">
      <div className="p-6 w-96 bg-gray-800 rounded-md">
        <input
          placeholder="Email"
          type="email"
          name="email"
          className="mb-4 w-full p-4 rounded-md border border-gray-500 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          name="password"
          className="mb-4 w-full p-4 rounded-md border border-gray-500 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="active:bg-opacity-50 w-full my-1    px-8 py-2 bg-blue-500 text-white bg-opacity-90 hover:bg-blue-600 rounded-md"
          onClick={handleSignUp}
        >
          {" "}
          Sign Up
        </button>
        <button
          className="active:bg-opacity-50 hover:bg-green-500 w-full my-1   px-8 py-2  text-white bg-gray-100 bg-opacity-20  rounded-md"
          onClick={handleSignIn}
        >
          {" "}
          Sign In
        </button>
      </div>{" "}
    </main>
  );
};

export default LoginPage;
