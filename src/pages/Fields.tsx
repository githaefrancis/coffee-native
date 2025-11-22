import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Sprout, TrendingUp, Shield, Heart, ArrowRight } from "lucide-react";
import cultivationImg from "@/assets/article-cultivation.jpg";
import stewardshipImg from "@/assets/article-stewardship.jpg";
import governanceImg from "@/assets/article-governance.jpg";
import characterImg from "@/assets/article-character.jpg";

const fields = [
  {
    name: "Cultivation",
    icon: Sprout,
    description: "Farm management wisdom, seasonal patience, quality over quantity",
    philosophy: "Coffee farming has taught me that you cannot rush growth. You can only create conditions for it. The best yields come from patient tending, not aggressive intervention. This truth transfers directly to building businesses, careers, and character.",
    color: "from-forest to-forest/70",
    bgColor: "bg-forest",
    count: 12,
    image: cultivationImg,
    topics: [
      "Sustainable practices and long-term thinking",
      "Quality vs. quantity tradeoffs",
      "Seasonal rhythms and timing",
      "Soil health as foundation",
      "The compound effect of daily care",
    ],
  },
  {
    name: "Stewardship",
    icon: TrendingUp,
    description: "Long-term thinking, risk management, building real wealth",
    philosophy: "Real wealth isn't about getting rich quick—it's about building something that compounds. Whether managing a coffee farm or an investment portfolio, the principles are identical: understand risk, think in decades not quarters, and never sacrifice long-term value for short-term convenience.",
    color: "from-primary to-gold-light",
    bgColor: "bg-primary",
    count: 15,
    image: stewardshipImg,
    topics: [
      "Portfolio thinking and diversification",
      "Risk management from farm to finance",
      "Long-term value vs. short-term gains",
      "The economics of patience",
      "Building generational wealth",
    ],
  },
  {
    name: "Governance",
    icon: Shield,
    description: "Organizational discipline, decision frameworks, lasting institutions",
    philosophy: "Good governance isn't about control—it's about creating systems that work when you're not watching. After serving on multiple boards and managing operations across continents, I've learned that the best institutions are built on clear accountability, transparent decision-making, and respect for everyone's time.",
    color: "from-burgundy to-burgundy/70",
    bgColor: "bg-burgundy",
    count: 10,
    image: governanceImg,
    topics: [
      "Decision-making frameworks that scale",
      "Accountability and measurement",
      "Building trust through transparency",
      "Fair trade and ethical operations",
      "Leadership through example",
    ],
  },
  {
    name: "Character",
    icon: Heart,
    description: "Punctuality as respect, keeping your word, the quiet work",
    philosophy: "Character isn't what you say—it's what you do when no one's looking. It's showing up on time because you respect others' schedules. It's keeping your word even when it's inconvenient. It's doing the work that builds reputation harvest by harvest, handshake by handshake.",
    color: "from-sienna to-sienna/70",
    bgColor: "bg-sienna",
    count: 8,
    image: characterImg,
    topics: [
      "Punctuality as a form of respect",
      "Integrity in daily decisions",
      "Building reputation over decades",
      "Discipline vs. hustle culture",
      "Authenticity in a performative world",
    ],
  },
];

const Fields = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-charcoal text-paper">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-display font-serif font-bold mb-6">The Four Fields</h1>
            <p className="text-2xl font-body text-paper-dark leading-relaxed">
              Every essay grows from one of these foundations—
              <br />
              where real experience meets timeless wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Fields */}
      {fields.map((field, index) => (
        <section
          key={field.name}
          className={`py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-[500px] overflow-hidden animate-fade-in ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img
                    src={field.image}
                    alt={field.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className={`absolute bottom-8 left-8 p-6 bg-gradient-to-br ${field.color}`}>
                    <field.icon className="h-12 w-12 text-paper" />
                  </div>
                </div>

                {/* Content */}
                <div className={`animate-fade-in ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`} style={{ animationDelay: '200ms' }}>
                  <div className={`inline-block px-4 py-2 ${field.bgColor} text-paper mb-6`}>
                    <span className="text-sm font-sans font-medium tracking-wider uppercase">
                      {field.name}
                    </span>
                  </div>

                  <h2 className="text-heading font-serif font-bold mb-6">
                    {field.description}
                  </h2>

                  <p className="text-xl font-body text-muted-foreground leading-relaxed mb-8 italic">
                    {field.philosophy}
                  </p>

                  <div className="space-y-3 mb-8">
                    <h3 className="text-lg font-sans font-semibold mb-4">Key Topics:</h3>
                    <ul className="space-y-2">
                      {field.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground font-body">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <span className="text-sm font-sans text-muted-foreground">
                      {field.count} essays in this field
                    </span>
                    <Link
                      to={`/archive`}
                      className="inline-flex items-center gap-2 text-primary font-sans font-medium hover-underline group"
                    >
                      Explore Essays
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Fields;
