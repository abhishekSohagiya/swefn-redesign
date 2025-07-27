import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Coffee } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            About <span className="text-gradient">Pixel Studio</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We're passionate web creators dedicated to bringing your digital vision to life 
            through clean code, beautiful design, and exceptional user experiences.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-12 bg-glass border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-600 leading-relaxed">
              <div>
                <p className="mb-4">
                  Founded in 2024, Pixel Studio emerged from a simple belief: that every business 
                  and individual deserves a beautiful, functional website that represents their 
                  unique vision and values.
                </p>
                <p>
                  What started as a small team of developers has grown into a creative studio 
                  that combines technical expertise with artistic vision to deliver websites 
                  that not only look stunning but perform exceptionally.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  We specialize in clean HTML and CSS development, ensuring that every line of 
                  code is semantic, accessible, and optimized for performance. Our approach 
                  focuses on creating websites that are both beautiful and functional.
                </p>
                <p>
                  Today, we continue to push the boundaries of web development, staying at the 
                  forefront of modern technologies while maintaining our commitment to quality 
                  and attention to detail.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center bg-glass border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Collaboration</h3>
              <p className="text-slate-600">
                We work closely with our clients as partners, ensuring every project reflects their vision.
              </p>
            </Card>

            <Card className="p-8 text-center bg-glass border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Precision</h3>
              <p className="text-slate-600">
                Every pixel matters. We pay attention to the smallest details to create perfect experiences.
              </p>
            </Card>

            <Card className="p-8 text-center bg-glass border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Excellence</h3>
              <p className="text-slate-600">
                We strive for excellence in every project, delivering quality that exceeds expectations.
              </p>
            </Card>

            <Card className="p-8 text-center bg-glass border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Passion</h3>
              <p className="text-slate-600">
                We love what we do, and it shows in every line of code and every design decision.
              </p>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Meet the Team</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Our diverse team of designers, developers, and strategists work together to create 
            exceptional digital experiences.
          </p>
          <Card className="p-12 bg-glass border-slate-200 max-w-2xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              While our team page is coming soon, we're already hard at work creating amazing 
              websites for our clients. Each team member brings unique skills and perspectives 
              that contribute to our collective success.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
