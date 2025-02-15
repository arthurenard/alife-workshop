export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: contact@conference.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Conference Details</h3>
            <p className="mb-2">May 26-28, 2024</p>
            <p>EPFL Bernoulli Center, Lausanne</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="mailto:contact@conference.com"
                className="text-white/90 hover:text-white transition-colors"
              >
                Email
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
