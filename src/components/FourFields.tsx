import { Link } from "react-router-dom";
import { Sprout, TrendingUp, Shield, Heart } from "lucide-react";

const fields = [
  {
    name: "Cultivation",
    icon: Sprout,
    description: "Farm management wisdom, seasonal patience, quality over quantity",
    color: "from-forest to-forest/70",
    count: 12,
  },
  {
    name: "Stewardship",
    icon: TrendingUp,
    description: "Long-term thinking, risk management, building real wealth",
    color: "from-primary to-gold-light",
    count: 15,
  },
  {
    name: "Governance",
    icon: Shield,
    description: "Organizational discipline, decision frameworks, lasting institutions",
    color: "from-burgundy to-burgundy/70",
    count: 10,
  },
  {
    name: "Character",
    icon: Heart,
    description: "Punctuality as respect, keeping your word, the quiet work",
    color: "from-sienna to-sienna/70",
    count: 8,
  },
];

const FourFields = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-serif font-bold mb-4">The Four Fields</h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Every essay grows from one of these foundations—where real experience meets timeless wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.map((field, index) => (
            <Link
              key={field.name}
              to={`/field/${field.name.toLowerCase()}`}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-8 bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 mb-6 bg-gradient-to-br ${field.color} transition-transform duration-500 group-hover:scale-110`}>
                  <field.icon className="h-8 w-8 text-paper" />
                </div>

                <h3 className="text-2xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {field.name}
                </h3>

                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {field.description}
                </p>

                <div className="flex items-center justify-between text-sm font-sans">
                  <span className="text-muted-foreground">{field.count} essays</span>
                  <span className="text-primary group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>

                {/* Bottom accent line */}
                <div className={`mt-6 h-0.5 bg-gradient-to-r ${field.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourFields;
