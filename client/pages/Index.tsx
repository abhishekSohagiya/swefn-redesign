import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Microscope, Shield, ShieldCheck, Pill, Factory } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fcf961b899c174ee6aab3153d65ab89f9%2F1bc575aa8f044ed59c1b098ebe168576"
          alt="Pharmaceutical production facility"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/45"></div>
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
          </div>
        </div>
        
      </section>

      {/* Welcome Section */}
      <section className="border-y border-red-100 bg-red-50 py-10">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
          {[
            { value: "100M", label: "Tablets / month" },
            { value: "50M", label: "Capsules / month" },
            { value: "42K", label: "Square feet facility" },
            { value: "PICs", label: "Quality aligned" },
            { value: "MHRA", label: "Standards aligned" },
            { value: "100%", label: "Clean room areas" },
          ].map((stat, index) => (
            <div key={stat.value + stat.label} className={`px-4 text-center ${index > 0 ? "lg:border-l lg:border-red-200" : ""}`}>
              <div className="text-3xl font-bold text-red-500 lg:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-pharma-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-red-400">QUALITY FIRST</p>
              <h2 className="text-3xl font-bold text-white lg:text-4xl">Built around compliance and control.</h2>
              <p className="mt-4 leading-relaxed text-slate-300">Our production and testing systems are designed to support consistent quality across every batch.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "PICs", text: "International quality framework" },
                { title: "MHRA", text: "Regulatory standards aligned" },
                { title: "100%", text: "Clean room production areas" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-700 bg-slate-800 p-5">
                  <div className="mb-2 text-2xl font-bold text-red-400">{item.title}</div>
                  <div className="text-sm leading-relaxed text-slate-300">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 border-t border-slate-700 pt-10">
            <div className="mb-6 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-red-400" />
              <h3 className="text-lg font-semibold text-white">Compliance and quality frameworks</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { mark: "FDCA", logo: "https://fdca.co.in/files/assets_login/img/logo.png", title: "FDCA compliance", text: "Domestic regulatory readiness" },
                { mark: "WHO", logo: "https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/en/h-logo-white.svg", title: "WHO aligned", text: "Global health standards" },
                { mark: "GLP", logo: null, title: "GLP practices", text: "Good laboratory practice" },
              ].map((item) => (
                <div key={item.mark} className="flex items-center gap-4 rounded-xl border border-slate-700 bg-white p-4">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-center text-sm font-black tracking-tight ${item.logo ? item.mark === "WHO" ? "bg-[#0875b9] p-3" : "border-2 border-red-500 p-2" : "border-2 border-red-500 text-red-500"}`}>
                    {item.logo ? <img src={item.logo} alt={`${item.mark} logo`} className="max-h-full max-w-full object-contain" /> : item.mark}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-20">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fcf961b899c174ee6aab3153d65ab89f9%2F1bc575aa8f044ed59c1b098ebe168576"
          alt="Swefn pharmaceutical manufacturing facility"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-slate-950/75"></div>
        <div className="relative container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-bold tracking-[0.2em] text-red-400">WELCOME TO SWEFN</p>
              <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                Expertise built for better health.
              </h2>
              <div className="mt-7 max-w-2xl">
                <p className="text-lg leading-relaxed text-slate-200 mb-6">
                  Swefn Pharmaceutical Private Limited is an Ahmedabad-based manufacturer focused on dependable tablets and capsules for domestic and international partners.
                </p>
                <p className="text-lg leading-relaxed text-slate-200">
                  Discover our manufacturing capabilities, quality systems, and product portfolio built around consistent standards and responsive partnership.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-red-50"></div>
              <img
                src="https://images.pexels.com/photos/9574339/pexels-photo-9574339.jpeg"
                alt="Pharmaceutical quality-control team in a sterile laboratory"
                className="relative h-[440px] w-full rounded-[1.5rem] object-cover shadow-xl"
              />
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
          <div className="mb-16 grid items-end gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              <h2 className="text-4xl font-bold text-pharma-gray mb-4">Our Product Portfolio</h2>
              <p className="text-xl text-pharma-gray max-w-2xl">
                Comprehensive range of pharmaceutical products across multiple therapeutic categories
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/7904438/pexels-photo-7904438.jpeg"
              alt="Assortment of pharmaceutical capsules and tablets"
              className="h-40 w-full rounded-2xl object-cover"
            />
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
