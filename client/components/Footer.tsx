import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="mb-4 flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fcf961b899c174ee6aab3153d65ab89f9%2F0aef716fa1e3464da7f7c8d595de06b5?format=webp&width=800&height=1200"
                alt="Swefn logo"
                className="h-12 w-10 object-contain"
              />
              <div>
                <div className="text-xl font-bold text-pharma-gray">
                  <span className="text-red-500">Swefn</span> Pharmaceutical
                </div>
                <div className="text-sm text-gray-500">Private Limited</div>
              </div>
            </Link>
            <p className="text-pharma-gray mb-6 max-w-md leading-relaxed">
              A leading pharmaceutical manufacturer specializing in tablets and capsules,
              committed to helping people achieve their dream of healthy life through quality medicines.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-pharma-gray">
                <Mail className="w-4 h-4 mr-2 text-red-500" />
                <span className="text-sm">info@swefnpharma.com</span>
              </div>
              <div className="flex items-center text-pharma-gray">
                <Phone className="w-4 h-4 mr-2 text-red-500" />
                <span className="text-sm">+91 8153050666</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-pharma-gray mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-pharma-gray hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/manufacturing" className="text-pharma-gray hover:text-red-500 transition-colors">Manufacturing</Link></li>
              <li><Link to="/products" className="text-pharma-gray hover:text-red-500 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-pharma-gray hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-pharma-gray hover:text-red-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-pharma-gray mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><span className="text-pharma-gray">Contract Manufacturing</span></li>
              <li><span className="text-pharma-gray">Loan Licensee</span></li>
              <li><span className="text-pharma-gray">Regulatory Compliance</span></li>
              <li><span className="text-pharma-gray">Quality Assurance</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-pharma-gray text-sm">© 2024 Swefn Pharmaceutical Private Limited. All rights reserved.</p>
            <div className="flex items-center text-pharma-gray mt-4 md:mt-0">
              <MapPin className="w-4 h-4 mr-2 text-red-500" />
              <span className="text-sm">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
