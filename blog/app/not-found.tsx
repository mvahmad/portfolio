export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-3xl font-bold text-sky-600 mb-4">404 - Page Not Found</h1>
      <p className="text-slate-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
}
