function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl mt-4">Oops! Page Not Found</p>
      <a href="/" className="mt-6 text-blue-400 underline hover:text-blue-300">Go back to Home</a>
    </div>
  );
}

export default NotFound;
