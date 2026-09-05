import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Phone, Mail, Download } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/productCatalog";

function ProductTypeLinks({ onSelect }: { onSelect?: () => void }) {
  return (
    <>
      {productCategories.map((category) => (
        <Link
          key={category.name}
          to={`/products?category=${encodeURIComponent(category.name)}`}
          onClick={onSelect}
          className="block rounded-md px-3 py-2 text-sm text-pharma-gray transition-colors hover:bg-red-50 hover:text-red-500"
        >
          {category.name}
        </Link>
      ))}
    </>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-red-500 py-2 text-white">
        <div className="container mx-auto flex items-center justify-between px-6 text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@swefnpharma.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 8153050666</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Contact us for pharmaceutical manufacturing solutions</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fcf961b899c174ee6aab3153d65ab89f9%2F2035508640374024938ce7803f5c1bce?format=webp&width=800&height=1200"
                alt="Swefn Pharmaceuticals Pvt Ltd"
                className="h-14 w-auto max-w-[250px] object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 lg:flex">
              <Link to="/" className="font-medium text-pharma-gray transition-colors hover:text-red-500">
                HOME
              </Link>
              <Link to="/manufacturing" className="font-medium text-pharma-gray transition-colors hover:text-red-500">
                MANUFACTURING
              </Link>
              <div className="group relative">
                <Link
                  to="/products"
                  className="flex items-center gap-1 font-medium text-pharma-gray transition-colors hover:text-red-500"
                >
                  PRODUCTS
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                    <ProductTypeLinks />
                  </div>
                </div>
              </div>
              <Link to="/about" className="font-medium text-pharma-gray transition-colors hover:text-red-500">
                ABOUT US
              </Link>
              <Link to="/contact" className="font-medium text-pharma-gray transition-colors hover:text-red-500">
                CONTACT
              </Link>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Button asChild variant="outline" className="border-red-500 text-red-500 hover:bg-red-100 hover:text-red-700">
                <a href="/Swefn%20Brochure.pdf" download="Swefn-Brochure.pdf">
                  <Download className="h-4 w-4" />
                  Download Brochure
                </a>
              </Button>
              <Button className="bg-red-500 text-white hover:bg-red-600">Get Quote</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mt-4 border-t border-gray-200 pb-4 lg:hidden">
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="font-medium text-pharma-gray transition-colors hover:text-red-500">
                  HOME
                </Link>
                <Link to="/manufacturing" className="font-medium text-pharma-gray transition-colors hover:text-red-500">
                  MANUFACTURING
                </Link>
                <div>
                  <Link
                    to="/products"
                    className="flex items-center gap-1 font-medium text-pharma-gray transition-colors hover:text-red-500"
                  >
                    PRODUCTS
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div className="ml-4 mt-2 grid grid-cols-2 gap-x-4 gap-y-1 border-l-2 border-red-100 pl-3">
                    <ProductTypeLinks onSelect={() => setIsMenuOpen(false)} />
                  </div>
                </div>
                <Link to="/about" className="font-medium text-pharma-gray transition-colors hover:text-red-500">
                  ABOUT US
                </Link>
                <Link to="/contact" className="font-medium text-pharma-gray transition-colors hover:text-red-500">
                  CONTACT
                </Link>
                <Button asChild variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-100 hover:text-red-700">
                  <a href="/Swefn%20Brochure.pdf" download="Swefn-Brochure.pdf">
                    <Download className="h-4 w-4" />
                    Download Brochure
                  </a>
                </Button>
                <Button className="w-full bg-red-500 text-white hover:bg-red-600">Get Quote</Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
