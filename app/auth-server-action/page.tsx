import React from "react";
import { AuthForm } from "./components/AuthForm";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function page() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/youtubetolinkedin");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="scale-[0.9] sm:scale-[1] w-96">
        <AuthForm />
      </div>
    </div>
  );
}
