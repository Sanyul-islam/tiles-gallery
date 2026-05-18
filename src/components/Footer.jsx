"use client";

import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Tiles-Gallery</h2>

          <p className="text-sm leading-6">
            Discover premium quality tiles for your home, office, and commercial
            projects. Stylish, durable, and modern collections available.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>

          <div className="flex flex-col gap-2">
            <Link href="/" className="link link-hover">
              Home
            </Link>

            <Link href="/all-tiles" className="link link-hover">
              All Tiles
            </Link>

            <Link href="/profile" className="link link-hover">
              My Profile
            </Link>

            <Link href="/contact" className="link link-hover">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="footer-title">Contact Us</h3>

          <p>Email: support@tilehub.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Rajshahi, Bangladesh</p>

          {/* Social Media */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-outline"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-outline"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-outline"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-outline"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-content/20">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} Tiles-Gallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
