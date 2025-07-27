import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, Building2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for pharmaceutical manufacturing inquiries,
            partnerships, or any questions about our products and services.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-white border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-pharma-gray mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-pharma-gray mb-2">
                    First Name
                  </label>
                  <Input id="firstName" type="text" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-pharma-gray mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" type="text" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-pharma-gray mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-pharma-gray mb-2">
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="Manufacturing Inquiry" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-pharma-gray mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your pharmaceutical manufacturing requirements..."
                />
              </div>

              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-white border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-pharma-gray mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pharma-gray">Email</h3>
                    <p className="text-pharma-gray">info@swefnpharma.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pharma-gray">Phone</h3>
                    <p className="text-pharma-gray">+91 8153050666</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pharma-gray">Address</h3>
                    <p className="text-pharma-gray">
                      Plot no. 7 Sopan Kesar Industrial Hub<br />
                      B/H Hotel Sarvoday, Moraiya Gam Road<br />
                      Vil: Moraiya, Tal: Sanand<br />
                      Ahmedabad - 382213, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-pharma-gray mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-red-500 mr-3" />
                  <div>
                    <div className="font-medium text-pharma-gray">Monday - Friday</div>
                    <div className="text-pharma-gray text-sm">9:00 AM - 6:00 PM IST</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-red-500 mr-3" />
                  <div>
                    <div className="font-medium text-pharma-gray">Saturday</div>
                    <div className="text-pharma-gray text-sm">9:00 AM - 1:00 PM IST</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-pharma-red-light border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-pharma-gray mb-4">Our Services</h3>
              <ul className="space-y-3 text-pharma-gray">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Contract Manufacturing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Loan Licensee Services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Regulatory Compliance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Quality Assurance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Product Development
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
