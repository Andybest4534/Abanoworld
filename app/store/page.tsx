export default function StorePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-10 font-sans">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-6">AndyGadgetsCare Store</h1>
      <p className="text-lg text-gray-300 mb-10">
        Explore our curated gadgets and accessories. Click below to connect directly on WhatsApp for purchases.
      </p>

      {/* Product Showcase (example items) */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Example Product */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src="/globe.svg"
            alt="Sample Gadget"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Smart Gadget</h2>
          <p className="text-gray-400 mb-4">₦15,000</p>
          <a
            href="https://wa.me/234XXXXXXXXXX?text=Hello%20AndyGadgetsCare%2C%20I%20want%20to%20order%20Smart%20Gadget"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 transition"
          >
            Order via WhatsApp
          </a>
        </div>

        {/* Add more products here */}
      </div>
    </main>
  );
}