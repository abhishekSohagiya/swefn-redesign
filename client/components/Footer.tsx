import { Code, Github, Twitter, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-slate-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">Pixel Studio</span>
            </Link>
            <p className="text-slate-600 mb-4 max-w-md">
              Creating beautiful, fast, and responsive websites that bring your vision to life. 
              We make web development simple and accessible for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-slate-800 transition-colors">About</Link></li>
              <li><a href="#services" className="text-slate-600 hover:text-slate-800 transition-colors">Services</a></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-slate-800 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-slate-600">Web Design</span></li>
              <li><span className="text-slate-600">Development</span></li>
              <li><span className="text-slate-600">SEO Optimization</span></li>
              <li><span className="text-slate-600">Maintenance</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600">© 2024 Pixel Studio. All rights reserved.</p>
          <p className="flex items-center text-slate-600 mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for the web
          </p>
        </div>
      </div>
    </footer>
  );
}
