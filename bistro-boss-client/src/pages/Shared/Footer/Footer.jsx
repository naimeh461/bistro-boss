import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-yellow-500"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
            </svg>
            <span className="text-xl font-bold tracking-wide">BistroBoss</span>
          </div>
          <p className="text-gray-300 text-sm">
            ACME Industries Ltd.<br />
            Providing reliable tech since 1992
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-lg text-yellow-500 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-yellow-400 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="/order/salad" className="hover:text-yellow-400 transition">
                Order Food
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-yellow-400 transition">
                Dashboard
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Subscribe */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-lg text-yellow-500 uppercase">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-3 rounded-full bg-gray-700 hover:bg-yellow-500 transition text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-700 hover:bg-yellow-500 transition text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-700 hover:bg-yellow-500 transition text-white"
            >
              <FaYoutube />
            </a>
          </div>
          <div>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-lg border-none outline-none text-black w-full"
              />
              <button className="px-4 py-2 bg-yellow-500 text-black rounded-r-lg hover:bg-yellow-400 transition font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 text-gray-400 text-center py-4 text-sm">
        &copy; 2023 ACME Industries Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
