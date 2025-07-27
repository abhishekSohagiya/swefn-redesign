import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building2, Award, Users, Globe, Microscope, Heart, Shield, Pill, Factory } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-red-500">Swefn</span> Pharmaceutical
              <br />
              <span className="text-white">Private Limited</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              We are united for a mission to help people for their dream of healthy life!!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-4">
                Products <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full h-auto">
            <path d="M0,60 L50,80 L100,60 L150,80 L200,60 L250,80 L300,60 L350,80 L400,60 L450,80 L500,60 L550,80 L600,60 L650,80 L700,60 L750,80 L800,60 L850,80 L900,60 L950,80 L1000,60 L1050,80 L1100,60 L1150,80 L1200,60 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-red-500">WELCOME TO</span> <span className="text-pharma-gray">SWEFN PHARMACEUTICALS LTD.</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-pharma-gray leading-relaxed mb-6">
                Swefn Pharmaceutical Private Limited is an established pharmaceutical manufacturer based in Ahmedabad, Gujarat, India. 
                We specialize in the production of solid oral dosage forms, specifically tablets and capsules, with a manufacturing capacity of 100 million units per month.
              </p>
              <p className="text-lg text-pharma-gray leading-relaxed">
                Our company is locally and globally integrated, offering a wide range of products and services to meet both domestic and international regulatory standards, including those set by PICs and MHRA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-pharma-red-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pharma-gray mb-4">Our Manufacturing Services</h2>
            <p className="text-xl text-pharma-gray max-w-2xl mx-auto">
              Comprehensive pharmaceutical manufacturing solutions with world-class quality standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center bg-white hover:shadow-lg transition-shadow border-gray-200">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pharma-gray mb-4">Contract Manufacturing</h3>
              <p className="text-pharma-gray leading-relaxed">
                Professional contract manufacturing services, producing pharmaceutical products on behalf of other companies.
              </p>
            </Card>

            <Card className="p-8 text-center bg-white hover:shadow-lg transition-shadow border-gray-200">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pharma-gray mb-4">Loan Licensee</h3>
              <p className="text-pharma-gray leading-relaxed">
                We operate as a loan licensee, allowing other entities to market their products under our manufacturing license.
              </p>
            </Card>

            <Card className="p-8 text-center bg-white hover:shadow-lg transition-shadow border-gray-200">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pharma-gray mb-4">Regulatory Compliance</h3>
              <p className="text-pharma-gray leading-relaxed">
                Our products meet both domestic and international regulatory standards, including PICs and MHRA compliance.
              </p>
            </Card>

            <Card className="p-8 text-center bg-white hover:shadow-lg transition-shadow border-gray-200">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pharma-gray mb-4">Own Products</h3>
              <p className="text-pharma-gray leading-relaxed">
                In addition to manufacturing for others, we produce our own comprehensive range of pharmaceutical products.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pharma-gray mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-pharma-gray max-w-2xl mx-auto">
              Comprehensive range of pharmaceutical products across multiple therapeutic categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              'Antibiotics',
              'Antidiabetic', 
              'Antifungal',
              'Anti-Inflammatory',
              'Cardiovascular',
              'Gastrointestinal',
              'Neuropathy',
              'Respiratory',
              'Steroids',
              'Vitamins'
            ].map((category, index) => (
              <Card key={index} className="p-6 text-center bg-gray-50 hover:bg-red-50 transition-colors border-gray-200 group">
                <div className="w-12 h-12 bg-red-500 group-hover:bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-pharma-gray">{category}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-pharma-gray mb-6">World-Class Manufacturing Facility</h2>
              <p className="text-lg text-pharma-gray mb-8 leading-relaxed">
                Our 42,000 square feet manufacturing facility complies with PICs and MHRA standards, 
                featuring state-of-the-art technology and stringent quality control measures.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-pharma-gray">100% clean room partition in production areas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-pharma-gray">Dedicated AHUs to prevent cross-contamination</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-pharma-gray">In-house physicochemical and microbiology labs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-pharma-gray">UV, HPLC, and in-house stability study facilities</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 text-center bg-white border-gray-200">
                <div className="text-3xl font-bold text-red-500 mb-2">100M</div>
                <div className="text-pharma-gray">Units/Month Capacity</div>
              </Card>
              <Card className="p-8 text-center bg-white border-gray-200">
                <div className="text-3xl font-bold text-red-500 mb-2">42K</div>
                <div className="text-pharma-gray">Sq Ft Facility</div>
              </Card>
              <Card className="p-8 text-center bg-white border-gray-200">
                <div className="text-3xl font-bold text-red-500 mb-2">PICs</div>
                <div className="text-pharma-gray">& MHRA Compliant</div>
              </Card>
              <Card className="p-8 text-center bg-white border-gray-200">
                <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
                <div className="text-pharma-gray">Clean Room Areas</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can support your pharmaceutical manufacturing needs
          </p>
          <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 text-lg px-8 py-4">
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
