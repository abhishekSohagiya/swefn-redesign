import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Beautiful Websites 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Made Simple</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We craft stunning, fast, and responsive websites that bring your vision to life. 
            From concept to launch, we make web development effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-3">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-slate-300 text-slate-700 hover:bg-slate-50">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What We Do Best</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We specialize in creating exceptional digital experiences that drive results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 text-center border-slate-200 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Clean Code</h3>
            <p className="text-slate-600 leading-relaxed">
              We write semantic, accessible HTML and efficient CSS that follows modern best practices and standards.
            </p>
          </Card>

          <Card className="p-8 text-center border-slate-200 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Beautiful Design</h3>
            <p className="text-slate-600 leading-relaxed">
              Every pixel matters. We create visually stunning interfaces that captivate and engage your audience.
            </p>
          </Card>

          <Card className="p-8 text-center border-slate-200 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Lightning Fast</h3>
            <p className="text-slate-600 leading-relaxed">
              Optimized for speed and performance, your website will load instantly and rank higher in search engines.
            </p>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">About Pixel Studio</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            We're a team of passionate web developers and designers who believe that great websites 
            should be accessible to everyone. With years of experience in HTML, CSS, and modern web 
            technologies, we transform ideas into digital realities.
          </p>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To democratize web development by creating beautiful, functional websites that help 
                businesses and individuals establish their online presence with confidence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Our Approach</h3>
              <p className="text-slate-600 leading-relaxed">
                We combine technical expertise with creative design thinking to deliver websites 
                that not only look great but also perform exceptionally across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-600 mb-8">
            Ready to bring your website vision to life? Get in touch and let's start building something amazing.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-3">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
