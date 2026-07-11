import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">360</span>
              </div>
              <span className="text-xl font-bold">
                <span>360</span>
                <span className="text-blue-400">Cloud</span>
                <span>School</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming African education through innovative technology.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">YouTube</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">GitHub</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Modules</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© {currentYear} 360CloudSchool. All rights reserved.</p>
          <span className="text-sm text-gray-500">Made with ❤️ in Africa</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
