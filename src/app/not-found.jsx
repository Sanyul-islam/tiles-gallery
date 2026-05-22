import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-extrabold text-primary">404</h1>

        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>

        <Link href="/" className="btn btn-primary btn-lg mt-4">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
