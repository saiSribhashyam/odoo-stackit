'use client'
import React from "react"
import { useUser } from "@clerk/nextjs";

const dashboard=()=>{
    const { user } = useUser();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Welcome to StackIt Dashboard</h1>
            <p className="text-lg">Hello, {user?.firstName || user?.username || "User"}!</p>
            <img src={user?.imageUrl || "/default-avatar.png"} alt="User Avatar" className="w-24 h-24 rounded-full mt-4" />
        </div>
    );
}

export default dashboard;