"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isShowPassword, setisShowPassword] = useState(false)
  const onSubmit =async (data) => {
    const { res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res,error);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-6">
            Login Your Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                {...register("email", {
                  required: "Email is required",
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="form-control mb-2 relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full "
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <span
                onClick={() => setisShowPassword(!isShowPassword)}
                className="absolute right-2 top-9"
              >
                {isShowPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Register Link */}
            <div className="text-right mb-4">
              <a href="/register" className="text-sm link link-primary">
                New here? Register
              </a>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full" type="submit">
              Login
            </button>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Login */}
            <button type="button" className="btn btn-outline w-full">
              <FaGoogle />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;