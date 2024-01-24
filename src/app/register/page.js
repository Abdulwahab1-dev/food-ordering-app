"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [createdUser, setCreatedUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setCreatedUser(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } 
    else {
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <section>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="text-primary text-4xl uppercase mt-[5rem] ">Register</h1>
        {userCreated && (
          <div className="my-4 text-center text-2xl ">
            User Created,
            <br /> Now you can <Link href={"/login"}> Login &raquo;</Link>
          </div>
        )}
        {error && (
          <div className="my-4 text-center text-2xl ">
            Error has Occured
            <br />
            Please try again later.
          </div>
        )}
        <div className="flex flex-col justify-center items-center">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col justify-center items-center"
          >
            <input
              type="email"
              placeholder="email"
              className={`border w-64 mt-5 p-3 md:w-[40rem] ${
                creatingUser ? "cursor-pointer" : ""
              }`}
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              disabled={creatingUser}
            />

            <input
              type="password"
              placeholder="password"
              className={`border w-64 mt-5 p-3 md:w-[40rem] ${
                creatingUser ? "cursor-pointer" : ""
              }`}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              disabled={creatingUser}
            />
            <button
              type="submit"
              disabled={creatingUser}
              className={`bg-${
                creatingUser ? "gray border border-gary-900 " : "primary"
              } px-6 md:px-14 md:text-xl py-3 md:py-4 text-${
                creatingUser ? "black" : "white"
              } font-semibold rounded-full flex gap-2 mb-[2rem] mt-8`}
            >
              Register with Email
            </button>

            <p className="md:my-2 md:text-xl ">or Login with Provider</p>
            <button className="border border-gray-400 px-6 md:px-14 md:text-xl py-3 md:py-4 text-gray font-semibold rounded-full flex gap-2 mb-[2rem] mt-8">
              <Image
                src={"/google.png"}
                width={32}
                height={32}
                alt={"Login with Google"}
              />
              Login With Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
