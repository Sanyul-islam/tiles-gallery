"use client"
import { useForm } from 'react-hook-form';
import { authClient } from '../../lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SignupPage = () => {
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    const router =useRouter();
    const [isShowPassword, setisShowPassword] = useState(false)
      const onSubmit = async (data) => {
        const {name,email,photo,password}= data;
        const { data: res, error } = await authClient.signUp.email({
          name: name, // required
          email: email, // required
          password: password, // required
          image: photo,
          callbackURL: "https://tiles-gallery-lilac-seven.vercel.app/login",
        });
        console.log(res,error);
        if(error){
          toast.warning(`${error.message}`, {
            position: "top-center",
            autoClose: 3000,
            theme: "colored",
          });
          return
        }
        if(res){
          toast.success("sign-Up successfull", {
            position: "top-center",
            autoClose: 3000,
            theme: "colored",
          });
        }
        router.push("/login");
      };
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
        <div className="card w-full max-w-md bg-base-100 shadow-2xl">
          <div className="card-body">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center mb-6">
              Create Your Account
            </h2>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
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

              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Photo URL</span>
                </label>

                <input
                  type="url"
                  placeholder="Enter photo url"
                  className="input input-bordered w-full"
                  {...register("photo", {
                    required: "Photo URL is required",
                  })}
                />
                {errors.photo && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.photo.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>

                <input
                  type={isShowPassword?"text":"password"}
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
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

              {/* Register Button */}
              <button className="btn btn-primary w-full mt-2" type="input">
                Register
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a href="/login" className="link link-primary">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignupPage;