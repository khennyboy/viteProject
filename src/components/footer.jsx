const navLinks = [
  { name: "Gallery", path: "#gallery" },
  { name: "Birthday Wishes", path: "#wishes" },
];

export default function Footer() {
  return (
    <footer className="bg-footerColor px-4 py-12 text-white md:px-8 xl:px-12">
      {/* Footer Content */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* About Section */}
        <div className="pr-4">
          <h2 className="mb-4 text-xl font-bold">Designed by SheriffBaba</h2>
          <p className="text-sm leading-relaxed">
            This website was made with love to celebrate a special birthday. 
            Thanks for visiting, and enjoy exploring the memories!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-sm transition-all duration-200 ease-in-out hover:underline hover:text-yellow-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <p className="mb-2 text-sm">
            1, Ola-Oluwa Street, Papa Ashafa, Agege, Lagos State
          </p>
          <p className="mb-2 text-sm">
            <a
              href="mailto:abdullateefkehinde848@gmail.com"
              className="hover:underline hover:text-yellow-300"
            >
              abdullateefkehinde848@gmail.com
            </a>
          </p>
          <p className="mb-4 text-sm">Phone: +234 702 6771 744</p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 text-gray-400 hover:text-yellow-300 transition-colors duration-200"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="p-2 text-gray-400 hover:text-yellow-300 transition-colors duration-200"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="p-2 text-gray-400 hover:text-yellow-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SheriffBaba. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
