"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const handleLogout = async () => await authClient.signOut();
    
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
      {/* Left Side */}
      <div className="navbar-start">
        <Link href="/" className="text-2xl font-bold text-primary">
          Tiles Gallery
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/all-tiles">All Tiles</Link>
          </li>

          <li>
            <Link href="/my-profile">My Profile</Link>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-2">
        {!user ? (
          <>
            <Link href="/login" className="btn btn-primary">
              Login
            </Link>
          </>
        ) : (
          <>
            {/* Profile */}
            {isPending ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <Link href="/profile" className="flex items-center gap-2">
                <Image
                  src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="user"
                  className="w-10 h-10 rounded-full border"
                  height={50}
                  width={50}
                />

                <span className="hidden md:block font-medium">
                  Hi,{user?.name}
                </span>
              </Link>
            )}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="btn btn-error btn-ghost btn-sm md:btn-md text-black"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown dropdown-end md:hidden ml-2">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/all-tiles">All Tiles</Link>
          </li>

          <li>
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;