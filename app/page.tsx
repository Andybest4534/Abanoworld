export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <section className="text-center max-w-2xl px-6">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          Welcome to Abano World 🌍
        </h1>
        <p className="text-xl mb-10 text-gray-300 leading-relaxed">
          Your creative hub for Blog, Vlog, Portfolio, and E-Commerce.  
          Explore, express, and elevate with us.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/store"
            className="px-6 py-3 rounded-full bg-brand text-white font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Visit Store
          </a>
          <a
            href="/blog"
            className="px-6 py-3 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-700 transition"
          >
            Explore Blog
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Abano World. All rights reserved.
      </footer>
    </main>
  );
}
