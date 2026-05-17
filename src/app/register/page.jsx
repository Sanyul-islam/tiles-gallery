import React from 'react';

const registerPage = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-6">
            Create Your Account
          </h2>

          {/* Form */}
          <form className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Name
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Email
                </span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Photo URL
                </span>
              </label>

              <input
                type="url"
                placeholder="Enter photo url"
                className="input input-bordered w-full"
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Password
                </span>
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>

            {/* Register Button */}
            <button className="btn btn-primary w-full mt-2">
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

export default registerPage;