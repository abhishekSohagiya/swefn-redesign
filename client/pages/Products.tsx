import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pill,
  Heart,
  Shield,
  Activity,
  Brain,
  Stethoscope,
  Zap,
  Microscope,
  Plus,
  Download,
  ArrowLeft,
  Package,
  Tablet,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Product {
  name: string;
  strength: string;
  dosageForm: string;
  packaging: string;
  indication: string;
  composition: string;
}

interface ProductCategory {
  name: string;
  icon: any;
  description: string;
  color: string;
  products: Product[];
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory | null>(null);
  const [searchParams] = useSearchParams();
  const productTableRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (selectedCategory) {
      requestAnimationFrame(() => {
        productTableRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [selectedCategory]);

  const productCategories: ProductCategory[] = [
    {
      name: "Antibiotics",
      icon: Shield,
      description: "Broad-spectrum antibiotics for bacterial infections",
      color: "bg-blue-500",
      products: [
        {
          name: "Azithromycin",
          strength: "250mg",
          dosageForm: "Tablets",
          packaging: "Blister 3 TAB/6 TAB",
          indication: "Respiratory infections, skin infections",
          composition: "Azithromycin",
        },
        {
          name: "Azithromycin",
          strength: "500mg",
          dosageForm: "Tablets",
          packaging: "Blister 5 TAB/10 TAB",
          indication: "Respiratory infections, skin infections",
          composition: "Azithromycin",
        },
        {
          name: "Ofloxacin",
          strength: "200mg",
          dosageForm: "Tablets",
          packaging: "Alu-Alu 10 TAB",
          indication: "UTI, respiratory tract infections",
          composition: "Ofloxacin",
        },
        {
          name: "Ofloxacin + Ornidazole",
          strength: "200mg + 500mg",
          dosageForm: "Tablets",
          packaging: "Blister 10 TAB",
          indication: "Mixed bacterial and protozoal infections",
          composition: "Ofloxacin + Ornidazole",
        },
        {
          name: "Levofloxacin",
          strength: "250mg",
          dosageForm: "Tablets",
          packaging: "Alu-Alu 10 TAB",
          indication: "Respiratory tract infections, UTI",
          composition: "Levofloxacin",
        },
        {
          name: "Levofloxacin",
          strength: "500mg",
          dosageForm: "Tablets",
          packaging: "Alu-Alu 10 TAB",
          indication: "Severe respiratory infections, complicated UTI",
          composition: "Levofloxacin",
        },
        {
          name: "Norfloxacin + Tinidazole",
          strength: "400mg + 600mg",
          dosageForm: "Tablets",
          packaging: "Blister 10 TAB",
          indication: "GI infections, UTI with protozoal coverage",
          composition: "Norfloxacin + Tinidazole",
        },
      ],
    },
    {
      name: "Antidiabetic",
      icon: Activity,
      description: "Diabetes management and blood sugar control",
      color: "bg-green-500",
      products: [
        {
          name: "Metformin",
          strength: "500mg, 850mg, 1000mg",
          dosageForm: "Tablets",
          packaging: "10x15 Blister Pack",
          indication: "Type 2 diabetes mellitus",
          composition: "Metformin Hydrochloride",
        },
        {
          name: "Glimepiride",
          strength: "1mg, 2mg, 4mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Type 2 diabetes mellitus",
          composition: "Glimepiride",
        },
        {
          name: "Pioglitazone",
          strength: "15mg, 30mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Type 2 diabetes mellitus",
          composition: "Pioglitazone Hydrochloride",
        },
        {
          name: "Gliclazide",
          strength: "40mg, 80mg",
          dosageForm: "Tablets",
          packaging: "10x15 Blister Pack",
          indication: "Type 2 diabetes mellitus",
          composition: "Gliclazide",
        },
      ],
    },
    {
      name: "Antifungal",
      icon: Microscope,
      description: "Effective antifungal medications",
      color: "bg-purple-500",
      products: [
        {
          name: "Fluconazole",
          strength: "150mg, 200mg",
          dosageForm: "Capsules",
          packaging: "10x1 Blister Pack",
          indication: "Vaginal candidiasis, oral thrush",
          composition: "Fluconazole",
        },
        {
          name: "Itraconazole",
          strength: "100mg, 200mg",
          dosageForm: "Capsules",
          packaging: "10x10 Blister Pack",
          indication: "Systemic fungal infections",
          composition: "Itraconazole",
        },
        {
          name: "Ketoconazole",
          strength: "200mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Fungal infections",
          composition: "Ketoconazole",
        },
      ],
    },
    {
      name: "Anti-Inflammatory",
      icon: Zap,
      description: "Pain relief and inflammation management",
      color: "bg-orange-500",
      products: [
        {
          name: "Diclofenac",
          strength: "50mg, 100mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Pain, inflammation, arthritis",
          composition: "Diclofenac Sodium",
        },
        {
          name: "Ibuprofen",
          strength: "200mg, 400mg, 600mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Pain, fever, inflammation",
          composition: "Ibuprofen",
        },
        {
          name: "Nimesulide",
          strength: "100mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Pain and inflammation",
          composition: "Nimesulide",
        },
        {
          name: "Aceclofenac",
          strength: "100mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Arthritis, pain management",
          composition: "Aceclofenac",
        },
      ],
    },
    {
      name: "Cardiovascular",
      icon: Heart,
      description: "Heart health and cardiovascular support",
      color: "bg-red-500",
      products: [
        {
          name: "Atorvastatin",
          strength: "10mg, 20mg, 40mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "High cholesterol, cardiovascular protection",
          composition: "Atorvastatin Calcium",
        },
        {
          name: "Amlodipine",
          strength: "2.5mg, 5mg, 10mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Hypertension, angina",
          composition: "Amlodipine Besylate",
        },
        {
          name: "Ramipril",
          strength: "2.5mg, 5mg, 10mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Hypertension, heart failure",
          composition: "Ramipril",
        },
        {
          name: "Metoprolol",
          strength: "25mg, 50mg, 100mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Hypertension, angina, heart failure",
          composition: "Metoprolol Succinate",
        },
      ],
    },
    {
      name: "Gastrointestinal",
      icon: Plus,
      description: "Digestive health and GI disorder treatment",
      color: "bg-yellow-500",
      products: [
        {
          name: "Omeprazole",
          strength: "20mg, 40mg",
          dosageForm: "Capsules",
          packaging: "10x10 Blister Pack",
          indication: "GERD, peptic ulcer",
          composition: "Omeprazole",
        },
        {
          name: "Pantoprazole",
          strength: "20mg, 40mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Acid reflux, gastritis",
          composition: "Pantoprazole Sodium",
        },
        {
          name: "Domperidone",
          strength: "10mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Nausea, vomiting, gastroparesis",
          composition: "Domperidone",
        },
        {
          name: "Loperamide",
          strength: "2mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Diarrhea",
          composition: "Loperamide Hydrochloride",
        },
      ],
    },
    {
      name: "Neuropathy",
      icon: Brain,
      description: "Neurological conditions and nerve health",
      color: "bg-indigo-500",
      products: [
        {
          name: "Pregabalin",
          strength: "75mg, 150mg, 300mg",
          dosageForm: "Capsules",
          packaging: "10x10 Blister Pack",
          indication: "Neuropathic pain, epilepsy",
          composition: "Pregabalin",
        },
        {
          name: "Gabapentin",
          strength: "100mg, 300mg, 400mg",
          dosageForm: "Capsules",
          packaging: "10x10 Blister Pack",
          indication: "Neuropathic pain, seizures",
          composition: "Gabapentin",
        },
        {
          name: "Alpha Lipoic Acid",
          strength: "100mg, 200mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Diabetic neuropathy",
          composition: "Alpha Lipoic Acid",
        },
      ],
    },
    {
      name: "Respiratory",
      icon: Stethoscope,
      description: "Respiratory health and lung function",
      color: "bg-cyan-500",
      products: [
        {
          name: "Salbutamol",
          strength: "2mg, 4mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Asthma, COPD",
          composition: "Salbutamol Sulfate",
        },
        {
          name: "Montelukast",
          strength: "4mg, 5mg, 10mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Asthma, allergic rhinitis",
          composition: "Montelukast Sodium",
        },
        {
          name: "Cetirizine",
          strength: "5mg, 10mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Allergic rhinitis, urticaria",
          composition: "Cetirizine Hydrochloride",
        },
        {
          name: "Dextromethorphan",
          strength: "15mg, 30mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Dry cough",
          composition: "Dextromethorphan Hydrobromide",
        },
      ],
    },
    {
      name: "Steroids",
      icon: Pill,
      description: "Corticosteroids and hormonal treatments",
      color: "bg-pink-500",
      products: [
        {
          name: "Prednisolone",
          strength: "5mg, 10mg, 20mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Inflammation, autoimmune disorders",
          composition: "Prednisolone",
        },
        {
          name: "Dexamethasone",
          strength: "0.5mg, 4mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Severe inflammation, allergic reactions",
          composition: "Dexamethasone",
        },
        {
          name: "Hydrocortisone",
          strength: "10mg, 20mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Adrenal insufficiency",
          composition: "Hydrocortisone",
        },
      ],
    },
    {
      name: "Vitamins",
      icon: Plus,
      description: "Essential vitamins and nutritional supplements",
      color: "bg-emerald-500",
      products: [
        {
          name: "Vitamin D3",
          strength: "1000IU, 2000IU, 5000IU",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Vitamin D deficiency, bone health",
          composition: "Cholecalciferol",
        },
        {
          name: "Vitamin B12",
          strength: "500mcg, 1000mcg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "B12 deficiency, anemia",
          composition: "Methylcobalamin",
        },
        {
          name: "Folic Acid",
          strength: "5mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Folate deficiency, pregnancy",
          composition: "Folic Acid",
        },
        {
          name: "Calcium Carbonate",
          strength: "500mg",
          dosageForm: "Tablets",
          packaging: "10x10 Blister Pack",
          indication: "Calcium deficiency, osteoporosis",
          composition: "Calcium Carbonate + Vitamin D3",
        },
      ],
    },
  ];

  useEffect(() => {
    const categoryName = searchParams.get("category");
    if (!categoryName) {
      setSelectedCategory(null);
      return;
    }

    const category = productCategories.find(
      (item) => item.name.toLowerCase() === categoryName.toLowerCase(),
    );
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryClick = (category: ProductCategory) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-white">
        <Header />

        {/* Category Details Header */}
        <section className="bg-gradient-to-r from-red-500 to-red-600 py-12">
          <div className="container mx-auto px-6">
            <Button
              onClick={handleBackClick}
              variant="outline"
              className="border-white bg-white text-red-500 hover:bg-red-50 hover:text-red-700 mb-6"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to All Categories
            </Button>
            <div className="flex items-center mb-4">
              <div
                className={`w-16 h-16 ${selectedCategory.color} rounded-2xl flex items-center justify-center mr-6`}
              >
                <selectedCategory.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">
                  {selectedCategory.name}
                </h1>
                <p className="text-xl text-red-100">
                  {selectedCategory.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Table */}
        <section ref={productTableRef} className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pharma-gray mb-4">
                Product Specifications
              </h2>
              <p className="text-lg text-pharma-gray">
                Detailed information for {selectedCategory.name.toLowerCase()}{" "}
                products
              </p>
            </div>

            <Card className="p-8 bg-white border-gray-200 shadow-sm overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-pharma-gray">
                      Product Name
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-pharma-gray">
                      Strength
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-pharma-gray">
                      Dosage Form
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-pharma-gray">
                      Packaging
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-pharma-gray">
                      Indication
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-pharma-gray">
                      Composition
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCategory.products.map((product, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-3">
                            {product.dosageForm.includes("Capsule") ? (
                              <Pill className="w-5 h-5 text-red-500" />
                            ) : (
                              <Tablet className="w-5 h-5 text-red-500" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-pharma-gray">
                              {product.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-pharma-gray">
                        {product.strength}
                      </td>
                      <td className="py-4 px-4 text-pharma-gray">
                        {product.dosageForm}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-pharma-gray">
                          <Package className="w-4 h-4 mr-2 text-red-500" />
                          {product.packaging}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-pharma-gray">
                        {product.indication}
                      </td>
                      <td className="py-4 px-4 text-pharma-gray font-mono text-sm">
                        {product.composition}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

            {/* Additional Information */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 bg-pharma-red-light border-gray-200">
                <Shield className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold text-pharma-gray mb-2">
                  Quality Assured
                </h3>
                <p className="text-pharma-gray text-sm">
                  All products manufactured under strict GMP guidelines with
                  comprehensive quality testing.
                </p>
              </Card>

              <Card className="p-6 bg-pharma-red-light border-gray-200">
                <Microscope className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold text-pharma-gray mb-2">
                  Regulatory Compliant
                </h3>
                <p className="text-pharma-gray text-sm">
                  PICs and MHRA compliant manufacturing ensuring international
                  quality standards.
                </p>
              </Card>

              <Card className="p-6 bg-pharma-red-light border-gray-200">
                <Package className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold text-pharma-gray mb-2">
                  Secure Packaging
                </h3>
                <p className="text-pharma-gray text-sm">
                  Tamper-evident blister packaging ensuring product integrity
                  and safety.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Product Portfolio
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of high-quality pharmaceutical products across
            multiple therapeutic categories, manufactured to international
            standards. Click on any category to view detailed specifications.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pharma-gray mb-4">
              Therapeutic Categories
            </h2>
            <p className="text-xl text-pharma-gray max-w-2xl mx-auto">
              Select a category to view detailed product specifications,
              strengths, and packaging information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 border-gray-200 group hover:border-red-200 cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                >
                  <div
                    className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pharma-gray mb-3">
                    {category.name}
                  </h3>
                  <p className="text-pharma-gray text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="text-xs text-red-500 font-medium">
                    {category.products.length} Products Available
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rest of the original content */}
      {/* Product Features */}
      <section className="py-20 bg-pharma-red-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pharma-gray mb-4">
              Why Choose Our Products
            </h2>
            <p className="text-xl text-pharma-gray max-w-2xl mx-auto">
              Quality, safety, and efficacy are at the core of everything we
              manufacture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-gray-200 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pharma-gray mb-4">
                Quality Assured
              </h3>
              <p className="text-pharma-gray leading-relaxed">
                All products undergo rigorous quality testing and comply with
                international pharmaceutical standards.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pharma-gray mb-4">
                Research-Based
              </h3>
              <p className="text-pharma-gray leading-relaxed">
                Products developed based on extensive research and proven
                therapeutic efficacy.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pharma-gray mb-4">
                Patient-Focused
              </h3>
              <p className="text-pharma-gray leading-relaxed">
                Designed with patient safety and therapeutic outcomes as our
                primary focus.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-red-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss custom formulations, contract manufacturing,
            or licensing opportunities
          </p>
          <Button
            size="lg"
            className="bg-white text-red-500 hover:bg-gray-100 text-lg px-8 py-4"
          >
            Contact Our Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
