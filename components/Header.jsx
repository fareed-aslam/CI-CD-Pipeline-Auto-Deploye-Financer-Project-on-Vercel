"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="fixed top-0 w-full bg-white/50 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            height={60}
            width={200}
            alt="welth logo"
            className="h-8 w-auto object-contain"
          ></Image>
        </Link>

        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <Link
                href={"/dashboard"}
                className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
              >
                <Button variant={"outline"}>
                  <LayoutDashboard size={18}></LayoutDashboard>
                  <span className="hidden md:inline">Dashboard</span>
                </Button>
              </Link>

              <Link href={"/transaction/create"}>
                <Button className="flex items-center gap-2">
                  <PenBox size={18}></PenBox>
                  <span className="hidden md:inline">Add Transaction</span>
                </Button>
              </Link>

              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </>
          ) : (
            <SignInButton forceRedirectUrl="/dashboard">
              <Button className="bg-[#9B27AF] hover:bg-[#842195]">
                Login
              </Button>
            </SignInButton>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
