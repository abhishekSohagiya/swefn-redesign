import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill, Heart, Shield, Activity, Brain, Stethoscope, Zap, Microscope, Plus, Download } from "lucide-react";

export default function Products() {
  const productCategories = [
    {
      name: "Antibiotics",
      icon: Shield,
      description: "Broad-spectrum antibiotics for bacterial infections",
      color: "bg-blue-500"
    },
    {
      name: "Antidiabetic",
      icon: Activity,
      description: "Diabetes management and blood sugar control",
      color: "bg-green-500"
    },
    {
      name: "Antifungal",
      icon: Microscope,
      description: "Effective antifungal medications",
      color: "bg-purple-500"
    },
    {
      name: "Anti-Inflammatory",
      icon: Zap,
      description: "Pain relief and inflammation management",
      color: "bg-orange-500"
    },
    {
      name: "Cardiovascular",
      icon: Heart,
      description: "Heart health and cardiovascular support",
      color: "bg-red-500"
    },
    {
      name: "Gastrointestinal",
      icon: Plus,
      description: "Digestive health and GI disorder treatment",
      color: "bg-yellow-500"
    },
    {
      name: "Neuropathy",
      icon: Brain,
      description: "Neurological conditions and nerve health",
      color: "bg-indigo-500"
    },
    {
      name: "Respiratory",
      icon: Stethoscope,
      description: "Respiratory health and lung function",
      color: "bg-cyan-500"
    },
    {
      name: "Steroids",
      icon: Pill,
      description: "Corticosteroids and hormonal treatments",
      color: "bg-pink-500"
    },
    {
      name: "Vitamins",
      icon: Plus,
      description: "Essential vitamins and nutritional supplements",
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Product Portfolio</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of high-quality pharmaceutical products across multiple therapeutic categories, 
            manufactured to international standards.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pharma-gray mb-4">Therapeutic Categories</h2>
            <p className="text-xl text-pharma-gray max-w-2xl mx-auto">
              Our diverse product portfolio covers essential therapeutic areas to meet healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-gray-200 group hover:border-red-200">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pharma-gray mb-3">{category.name}</h3>
                  <p className="text-pharma-gray text-sm leading-relaxed">{category.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-pharma-red-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pharma-gray mb-4">Why Choose Our Products</h2>
            <p className="text-xl text-pharma-gray max-w-2xl mx-auto">
              Quality, safety, and efficacy are at the core of everything we manufacture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-gray-200 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pharma-gray mb-4">Quality Assured</h3>
              <p className="text-pharma-gray leading-relaxed">
                All products undergo rigorous quality testing and comply with international pharmaceutical standards.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pharma-gray mb-4">Research-Based</h3>
              <p className="text-pharma-gray leading-relaxed">
                Products developed based on extensive research and proven therapeutic efficacy.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pharma-gray mb-4">Patient-Focused</h3>
              <p className="text-pharma-gray leading-relaxed">
                Designed with patient safety and therapeutic outcomes as our primary focus.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-pharma-gray mb-6">Manufacturing Excellence</h2>
              <p className="text-lg text-pharma-gray mb-8 leading-relaxed">
                Our products are manufactured in a state-of-the-art facility that meets international 
                regulatory standards including PICs and MHRA compliance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray mb-2">Good Manufacturing Practices (GMP)</h4>
                    <p className="text-pharma-gray">Strict adherence to GMP guidelines ensuring consistent quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray mb-2">International Standards</h4>
                    <p className="text-pharma-gray">PICs and MHRA compliant manufacturing processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pharma-gray mb-2">Quality Control</h4>
                    <p className="text-pharma-gray">Comprehensive testing at every stage of production.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-gray-50 border-gray-200">
                <div className="text-3xl font-bold text-red-500 mb-2">100M</div>
                <div className="text-pharma-gray">Units/Month</div>
                <div className="text-sm text-pharma-gray mt-1">Production Capacity</div>
              </Card>
              <Card className="p-6 text-center bg-gray-50 border-gray-200">
                <div className="text-3xl font-bold text-red-500 mb-2">10+</div>
                <div className="text-pharma-gray">Categories</div>
                <div className="text-sm text-pharma-gray mt-1">Therapeutic Areas</div>
              </Card>
              <Card className="p-6 text-center bg-gray-50 border-gray-200">
                <div className="text-3xl font-bold text-red-500 mb-2">PICs</div>
                <div className="text-pharma-gray">Compliant</div>
                <div className="text-sm text-pharma-gray mt-1">International Standards</div>
              </Card>
              <Card className="p-6 text-center bg-gray-50 border-gray-200">
                <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-pharma-gray">Quality</div>
                <div className="text-sm text-pharma-gray mt-1">Monitoring</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Brochures */}
      <section className="py-20 bg-pharma-red-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-pharma-gray mb-6">Product Information</h2>
          <p className="text-xl text-pharma-gray mb-12 max-w-2xl mx-auto">
            Download our comprehensive product brochures for detailed information about our pharmaceutical offerings
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
              <Download className="mr-2 w-5 h-5" />
              General Product Brochure
            </Button>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-4 text-lg">
              <Download className="mr-2 w-5 h-5" />
              Specialized Products Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-red-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss custom formulations, contract manufacturing, or licensing opportunities
          </p>
          <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 text-lg px-8 py-4">
            Contact Our Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
