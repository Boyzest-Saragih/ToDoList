import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
            <p className="text-sm">
              We are dedicated to delivering exceptional experiences and innovative solutions
              to our valued customers.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><p className="hover:text-white transition-colors">Home</p></li>
              <li><p className="hover:text-white transition-colors">Services</p></li>
              <li><p className="hover:text-white transition-colors">About</p></li>
              <li><p className="hover:text-white transition-colors">Contact</p></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: boyzsetsumbayak@gmail.com</li>
              <li>Phone: (123)</li>
              <li>Address: Medan Tembung Lek</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm text-center">
          <p>© {currentYear} Alamak || All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <p className="hover:text-white transition-colors">Privacy Policy</p>
            <p className="hover:text-white transition-colors">Terms of Servicep</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer