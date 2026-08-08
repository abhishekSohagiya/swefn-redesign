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

const galleryImages = [
  ["gallery-2", "Stability testing equipment"],
  ["gallery-3", "Pharmaceutical processing room"],
  ["gallery-4", "Controlled dispatch operations"],
  ["gallery-5", "Analytical laboratory workstation"],
  ["gallery-6", "Production mixing equipment"],
  ["gallery-7", "Capsule and tablet processing line"],
  ["gallery-8", "Clean laboratory workspace"],
  ["gallery-9", "Packaging and inspection line"],
  ["gallery-11", "Stability chamber room"],
  ["gallery-12", "Primary packaging equipment"],
  ["gallery-13", "Laminar air flow workstation"],
  ["gallery-14", "Quality control laboratory"],
  ["gallery-15", "Pharmaceutical processing vessel"],
  ["gallery-16", "Environmental control equipment"],
  ["gallery-17", "Tablet compression equipment"],
  ["gallery-18", "Water testing laboratory"],
].map(([name, alt]) => ({
  src: `https://cdn.builder.io/api/v1/image/assets%2Fcf961b899c174ee6aab3153d65ab89f9%2F${{
    "gallery-2": "8582a6eab3ff4e50b80683222b6f1573",
    "gallery-3": "b8d4ee1a37e149d6baa3f173d6add547",
    "gallery-4": "1bfef7da287e4e5fb950ed253c55356e",
    "gallery-5": "6e47ccb93f654fcc9cbb09f253e45cac",
    "gallery-6": "39a692dcaeaf47be9c7dabb1a8c34c3f",
    "gallery-7": "2eab2fb51df84f8dac5f32b68a93e1c0",
    "gallery-8": "6a2ccc0a5fee4b2188c19b715fcd686a",
    "gallery-9": "03834adf3875472392e8cbdaf3c84e0d",
    "gallery-11": "e52940be12c645f5b2db40aed7a471e6",
    "gallery-12": "c9d8ef83028d49ada6001bd5f9e3d095",
    "gallery-13": "e8e472c6061743a39286e658d8e7e2ce",
    "gallery-14": "d8a4ed75130d4f7f84f21b03951b294d",
    "gallery-15": "633e4c157d404c2488eaf502766559f3",
    "gallery-16": "7808ae0a3f9548f88bebeb91ae414023",
    "gallery-17": "a12060f247694abdb21fbf30a4c31cf7",
    "gallery-18": "e2a02f957bd94362936fee07bb787200",
  }[name]}`,
  alt,
}));

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

        <section className="bg-slate-50 py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-red-500">INSIDE SWEFN</p>
              <h2 className="text-4xl font-bold text-pharma-gray">Our facility in focus</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-pharma-gray">
                A closer look at the controlled environments, equipment, laboratories, and teams behind our manufacturing capabilities.
              </p>
            </div>
            <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
              {galleryImages.map((image, index) => (
                <div key={image.src} className={`overflow-hidden rounded-xl bg-white shadow-sm ${index === 0 ? "col-span-2 row-span-2" : index === 5 ? "md:col-span-2" : ""}`}>
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                </div>
              ))}
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
