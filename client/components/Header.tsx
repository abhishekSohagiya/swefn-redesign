import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">Pixel Studio</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-600 hover:text-slate-800 transition-colors">Home</a>
            <Link to="/about" className="text-slate-600 hover:text-slate-800 transition-colors">About</Link>
            <a href="#services" className="text-slate-600 hover:text-slate-800 transition-colors">Services</a>
            <Link to="/contact" className="text-slate-600 hover:text-slate-800 transition-colors">Contact</Link>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-slate-600 hover:text-slate-800 transition-colors">Home</a>
              <Link to="/about" className="text-slate-600 hover:text-slate-800 transition-colors">About</Link>
              <a href="#services" className="text-slate-600 hover:text-slate-800 transition-colors">Services</a>
              <Link to="/contact" className="text-slate-600 hover:text-slate-800 transition-colors">Contact</Link>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
