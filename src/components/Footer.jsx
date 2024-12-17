const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-300">
              Ichiba 市場 is your go-to online store for unique products. We
              bring the best deals to your doorstep!
            </p>
          </div>

          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <p>&copy; 2024 Ichiba 市場. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
