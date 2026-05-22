"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const ProfilePage= ()=> {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <Image
              src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full border-4 border-primary"
            />

            <h1 className="text-3xl font-bold mt-4">{user?.name}</h1>

            <p className="text-gray-500">{user?.email}</p>

            <Link href="profile/update-user" className="btn btn-primary mt-6">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
