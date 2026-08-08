import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, ShieldCheck, Target, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality",
    text: "We build dependable processes and quality checks into every stage of manufacturing.",
  },
  {
    icon: Users,
    title: "Partnership",
    text: "We work closely with our customers to provide responsive, reliable manufacturing support.",
  },
  {
    icon: Target,
    title: "Consistency",
    text: "We focus on repeatable systems, controlled environments, and attention to detail.",
  },
  {
    icon: Heart,
    title: "Health impact",
    text: "Our work is guided by a simple goal: helping people pursue healthier lives.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-28">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fcf961b899c174ee6aab3153d65ab89f9%2Faedbdefcd648496ba1bbe92ff552ad7a"
            alt="Swefn pharmaceutical manufacturing facility"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/75"></div>
          <div className="relative container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold tracking-[0.2em] text-red-400">ABOUT SWEFN</p>
              <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
                Manufacturing with purpose.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300">
                Swefn Pharmaceutical Private Limited is a pharmaceutical manufacturer based in Ahmedabad, Gujarat, India, focused on quality solid oral dosage forms.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto grid items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-red-500">OUR STORY</p>
              <h2 className="text-4xl font-bold text-pharma-gray">A focused partner for pharmaceutical growth.</h2>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-pharma-gray">
                <p>
                  Swefn was established with a focus on producing high-quality tablets and capsules for partners who value dependable manufacturing and clear communication.
                </p>
                <p>
                  From our 42,000 square feet facility, our teams combine modern production infrastructure with disciplined quality control to support domestic and international requirements.
                </p>
                <p>
                  Our integrated approach includes contract manufacturing, loan licensee services, and our own product portfolio across multiple therapeutic categories.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-red-50"></div>
              <img
                src="https://images.pexels.com/photos/4031522/pexels-photo-4031522.jpeg"
                alt="Pharmaceutical researcher working in a laboratory"
                className="relative h-[430px] w-full rounded-[1.5rem] object-cover shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-red-50 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-red-500">OUR DIRECTION</p>
              <h2 className="text-4xl font-bold text-pharma-gray">A healthier future, made responsibly.</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-red-100 bg-white p-8">
                <Target className="mb-5 h-10 w-10 text-red-500" />
                <h3 className="mb-3 text-2xl font-bold text-pharma-gray">Our mission</h3>
                <p className="text-lg leading-relaxed text-pharma-gray">
                  To help people achieve their dream of a healthy life by delivering accessible, consistent, and quality-focused pharmaceutical products.
                </p>
              </Card>
              <Card className="border-red-100 bg-white p-8">
                <Award className="mb-5 h-10 w-10 text-red-500" />
                <h3 className="mb-3 text-2xl font-bold text-pharma-gray">Our goals</h3>
                <p className="text-lg leading-relaxed text-pharma-gray">
                  To strengthen our manufacturing capabilities, support trusted partnerships, and grow our reach while maintaining rigorous regulatory and quality standards.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-red-500">WHAT GUIDES US</p>
              <h2 className="text-4xl font-bold text-pharma-gray">Our values</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="border-gray-200 p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-pharma-gray">{value.title}</h3>
                    <p className="leading-relaxed text-pharma-gray">{value.text}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-red-500 py-16">
          <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Looking for a dependable manufacturing partner?</h2>
              <p className="mt-2 text-red-100">Let&apos;s discuss how Swefn can support your next product.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center rounded-md bg-white px-6 py-3 font-semibold text-red-500 transition-colors hover:bg-red-50">
              Contact us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
