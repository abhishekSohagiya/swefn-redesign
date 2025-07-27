import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle, Factory, Shield, Microscope, Award, Building2, Users, Settings } from "lucide-react";

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Manufacturing Excellence</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art 42,000 sq ft facility delivers world-class pharmaceutical manufacturing 
            with 100 million units monthly capacity, meeting international quality standards.
          </p>
        </div>
      </section>

      {/* Manufacturing Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pharma-gray mb-4">Our Manufacturing Services</h2>
            <p className="text-xl text-pharma-gray max-w-2xl mx-auto">
              Comprehensive pharmaceutical manufacturing solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-gray-50 border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pharma-gray">Contract Manufacturing</h3>
              </div>
              <p className="text-pharma-gray leading-relaxed mb-6">
                We offer comprehensive contract manufacturing services, producing high-quality pharmaceutical 
                products on behalf of other companies. Our services include:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-pharma-gray">Tablets & Capsules Manufacturing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-pharma-gray">Quality Assurance & Testing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-pharma-gray">Packaging & Labeling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-pharma-gray">Regulatory Documentation</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-50 border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pharma-gray">Loan Licensee Services</h3>
              </div>
              <p className="text-pharma-gray leading-relaxed mb-6">
                Our loan licensee program allows other entities to market pharmaceutical products under 
                our manufacturing license, providing:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-pharma-gray">Manufacturing License Access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-pharma-gray">Product Registration Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-pharma-gray">Marketing Authorization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-pharma-gray">Regulatory Compliance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-20 bg-pharma-red-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pharma-gray mb-4">World-Class Manufacturing Facility</h2>
            <p className="text-xl text-pharma-gray max-w-2xl mx-auto">
              Our facility meets international standards and regulatory requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-gray-200">
              <Building2 className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-pharma-gray mb-3">42,000 Sq Ft Facility</h3>
              <p className="text-pharma-gray">
                Spacious manufacturing facility designed for optimal production flow and quality control.
              </p>
            </Card>

            <Card className="p-6 bg-white border-gray-200">
              <Shield className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-pharma-gray mb-3">100% Clean Rooms</h3>
              <p className="text-pharma-gray">
                Complete clean room partition in all production areas with controlled environment.
              </p>
            </Card>

            <Card className="p-6 bg-white border-gray-200">
              <Settings className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-pharma-gray mb-3">Dedicated AHUs</h3>
              <p className="text-pharma-gray">
                Air Handling Units designed to prevent cross-contamination between products.
              </p>
            </Card>

            <Card className="p-6 bg-white border-gray-200">
              <Microscope className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-pharma-gray mb-3">In-House Laboratory</h3>
              <p className="text-pharma-gray">
                Complete physicochemical and microbiology testing laboratories on-site.
              </p>
            </Card>

            <Card className="p-6 bg-white border-gray-200">
              <Award className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-pharma-gray mb-3">PICs & MHRA Compliant</h3>
              <p className="text-pharma-gray">
                Fully compliant with international regulatory standards and guidelines.
              </p>
            </Card>

            <Card className="p-6 bg-white border-gray-200">
              <Users className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-pharma-gray mb-3">Expert Team</h3>
              <p className="text-pharma-gray">
                Experienced professionals ensuring quality at every step of manufacturing.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pharma-gray mb-4">Technical Specifications</h2>
            <p className="text-xl text-pharma-gray max-w-2xl mx-auto">
              Advanced equipment and infrastructure supporting high-quality pharmaceutical production
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-pharma-gray mb-6">Infrastructure Features</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray">Fully Epoxy Flooring</h4>
                    <p className="text-pharma-gray">All classified areas feature epoxy flooring for easy cleaning and contamination control.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray">Separate Dispensing Areas</h4>
                    <p className="text-pharma-gray">Dedicated areas for Active Pharmaceutical Ingredients (APIs) and excipients.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray">Air-Conditioned Areas</h4>
                    <p className="text-pharma-gray">Fully air-conditioned primary and secondary packaging areas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray">Effluent Treatment Plant</h4>
                    <p className="text-pharma-gray">Environmental compliance adhering to GPCB norms.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-pharma-gray mb-6">Laboratory Equipment</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray">UV Spectrophotometer</h4>
                    <p className="text-pharma-gray">Advanced UV analysis for quality control and product testing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray">HPLC Systems</h4>
                    <p className="text-pharma-gray">High-Performance Liquid Chromatography for precise analysis.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray">Stability Study Facilities</h4>
                    <p className="text-pharma-gray">In-house stability testing chambers and controlled storage.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray">Retain Sample Rooms</h4>
                    <p className="text-pharma-gray">Controlled storage for sample retention and reference.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
