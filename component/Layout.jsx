"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { LogOut } from "lucide-react";

const menus = [
  { label: "Home", href: "/" },
  { label: "Article", href: "/article" },
  { label: "About", href: "/about" },
  { label: "Dashboard", href: "/Dashboard" },
];

const avatarColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
];

export default function Layout({ children }) {
  const pathname = usePathname();

  // ---------------------------
  // 🔥 LOGIN CHECK (main logic)
  // ---------------------------
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // fullname, email, etc.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();

        if (data.loggedIn) {
          setLoggedIn(true);
          setUser(data.user); // save user data
        } else {
          setLoggedIn(false);
        }
      } catch (err) {
        setLoggedIn(false);
      }
      setLoading(false);
    };

    checkLogin();
  }, []);

  // Avatar color
  const [avatarColor, setAvatarColor] = useState(null);
  useEffect(() => {
    if (!avatarColor) {
      const random =
        avatarColors[Math.floor(Math.random() * avatarColors.length)];
      setAvatarColor(random);
    }
  }, [avatarColor]);

  // ---------------------------
  // Logout
  // ---------------------------
  const handleLogout = () => {
    document.cookie =
      "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie =
      "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";

    window.location.href = "/login";
  };

  // Blacklist pages
  const blacklist = ["/login", "/signup", "/admin"];
  if (blacklist.includes(pathname)) return <>{children}</>;

  return (
    <>
      <nav className="z-[20000] px-[7%] bg-white shadow-lg sticky top-0 w-full py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          YourBlog
        </Link>

        {/* Menu */}
        <div className="flex gap-5 flex-1 justify-center">
          {menus.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-3 ${
                pathname === item.href
                  ? "text-violet-600 font-medium"
                  : "text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-1 rounded-md"
          />

          {/* ---------------------------
              🔥 LOGIN / LOGOUT UI
          ---------------------------- */}

          {/* Loading Placeholder */}
          {loading ? (
            <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full"></div>
          ) : !loggedIn ? (
            // NOT LOGGED IN
            <>
              <Link href="/login" className="text-violet-600 font-medium">
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-violet-600 text-white px-4 py-2 rounded"
              >
                Signup
              </Link>
            </>
          ) : (
            // LOGGED IN → Show Avatar + Dropdown
            <div className="relative">
              <button
                className={`w-10 h-10 ${avatarColor} rounded-full text-white font-bold`}
                onClick={() =>
                  setUser((old) => ({ ...old, dropdown: !old?.dropdown }))
                }
              >
                {user?.fullname?.charAt(0).toUpperCase()}
              </button>

              {user?.dropdown && (
                <div className="absolute right-0 mt-2 bg-white w-48 shadow-lg rounded border py-2">
                  <div className="px-4 py-2 border-b">
                    <p className="font-medium text-sm">{user.fullname}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex gap-2"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      <section>{children}</section>
      <Footer />
    </>
  );
}