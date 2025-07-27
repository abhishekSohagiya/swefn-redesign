import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-red-500 text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@swefnpharma.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 8153050666</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Contact us for pharmaceutical manufacturing solutions</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-pharma-gray">
                  <span className="text-red-500">Swefn</span> Pharmaceutical
                </div>
                <div className="text-sm text-gray-500">Private Limited</div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <Link to="/" className="text-pharma-gray hover:text-red-500 transition-colors font-medium">
                HOME
              </Link>
              <Link to="/manufacturing" className="text-pharma-gray hover:text-red-500 transition-colors font-medium">
                MANUFACTURING
              </Link>
              <Link to="/products" className="text-pharma-gray hover:text-red-500 transition-colors font-medium">
                PRODUCTS
              </Link>
              <Link to="/about" className="text-pharma-gray hover:text-red-500 transition-colors font-medium">
                ABOUT US
              </Link>
              <Link to="/contact" className="text-pharma-gray hover:text-red-500 transition-colors font-medium">
                CONTACT
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="text-pharma-gray hover:text-red-500 transition-colors font-medium">
                  HOME
                </Link>
                <Link to="/manufacturing" className="text-pharma-gray hover:text-red-500 transition-colors font-medium">
                  MANUFACTURING
                </Link>
                <Link to="/products" className="text-pharma-gray hover:text-red-500 transition-colors font-medium">
                  PRODUCTS
                </Link>
                <Link to="/about" className="text-pharma-gray hover:text-red-500 transition-colors font-medium">
                  ABOUT US
                </Link>
                <Link to="/contact" className="text-pharma-gray hover:text-red-500 transition-colors font-medium">
                  CONTACT
                </Link>
                <Button className="bg-red-500 hover:bg-red-600 text-white w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
