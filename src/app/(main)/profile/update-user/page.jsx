"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const UpdateUser = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  const router =useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    values: {
      name: user?.name || "",
      image: user?.image || "",
    },
  });

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }

  const onSubmit = async (data) => {
    
      const { error } = await authClient.updateUser({
        name: data.name,
        image: data.image,
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Profile updated successfully!");

    
    router.push("/profile");
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-6">
              Update Profile
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>

                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />

                {errors.name && (
                  <p className="text-error text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>

                <input
                  type="url"
                  className="input input-bordered w-full"
                  {...register("image", {
                    required: "Photo URL is required",
                  })}
                />

                {errors.image && (
                  <p className="text-error text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Save Changes"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
