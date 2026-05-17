import React from 'react';

const loginPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="card w-full max-w-md bg-base-100 shadow-2xl">
          <div className="card-body">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center mb-6">
              Login Your Account
            </h2>

            {/* Email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            {/* Password */}
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>

            {/* Register Link */}
            <div className="text-right mb-4">
              <a href="/register" className="text-sm link link-primary">
                New here? Register
              </a>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full">Login</button>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Login */}
            <button className="btn btn-outline w-full">
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff" />
                  <path
                    fill="#34a853"
                    d="M276.4 267.3c0-17.4-1.5-34.1-4.4-50.2H140v95h75.4c-3.3 17.7-13.2 32.7-28.1 42.8v70h90.8c53.1-48.9 83.7-120.9 83.7-204.6z"
                  />
                  <path
                    fill="#4285f4"
                    d="M140 480c36 0 66.1-11.9 88.1-32.3l-90.8-70c-25.2 16.9-57.4 26.9-97.3 26.9-74.8 0-138.2-50.5-160.9-118.5H-14v74.4C7.9 430.3 68.5 480 140 480z"
                  />
                  <path
                    fill="#fbbc04"
                    d="M-20.9 286.1c-5.7-16.9-8.9-34.9-8.9-53.1s3.2-36.2 8.9-53.1v-74.4H-14c22.7-68 86.1-118.5 160.9-118.5 43.1 0 81.8 15.4 112.2 45.5l84.1-84.1C306.1-7.4 226 0 140 0 68.5 0 7.9 49.7-14 105.5l93.1 74.4z"
                  />
                  <path
                    fill="#ea4335"
                    d="M140 94.5c39.1 0 74.2 13.5 101.9 40.1l76.4-76.4C282.1 20.1 246 0 140 0 68.5 0 7.9 49.7-14 105.5l93.1 74.4C101.8 145 165.2 94.5 140 94.5z"
                  />
                </g>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default loginPage;