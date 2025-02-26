import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-xl text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2 mb-2">
              <span>✉️</span>
              <a
                href="mailto:demeco2025@gmail.com"
                className="hover:text-white transition-colors"
              >
                demeco2025@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Conference Details</h3>
            <p className="mb-2">
              <span>📅</span> May 26-28, 2025
            </p>
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <a
                href="https://maps.app.goo.gl/No7kRoAvWX7BW8K79"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                EPFL Bernoulli Center, Lausanne
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-2">
              <FaXTwitter className="h-5 w-5" />
              <a
                href="https://twitter.com/demeco2025"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @demeco2025
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>
            © 2025 Detection and Emergence of Complexity. All rights reserved.
          </p>
          <p className="mt-2">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/arthur-renard-3211471b6/"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arthur Renard
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
