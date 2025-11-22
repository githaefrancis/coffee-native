import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import governanceImg from "@/assets/article-governance.jpg";
import cultivationImg from "@/assets/article-cultivation.jpg";
import stewardshipImg from "@/assets/article-stewardship.jpg";
import characterImg from "@/assets/article-character.jpg";
import heroImage from "@/assets/hero-coffee-farm.jpg";

const allArticles = [
  {
    slug: "harvest-timer",
    title: "The Harvest Timer: What Coffee Cherries Taught Me About Exit Strategies",
    excerpt: "Picking too early leaves value on the branch. Waiting too long spoils the returns. After thirty years, I've learned the signs.",
    category: "Stewardship",
    readTime: 8,
    image: heroImage,
    date: "Nov 18, 2025",
  },
  {
    slug: "punctuality-respect",
    title: "Punctuality Isn't Performance—It's Respect",
    excerpt: "Everyone talks about 'hustle culture.' I've been up at 4 AM for thirty years, not because a guru told me to, but because coffee cherries don't care about your schedule.",
    category: "Character",
    readTime: 6,
    image: characterImg,
    date: "Nov 12, 2025",
  },
  {
    slug: "fair-trade-integrity",
    title: "Fair Trade and the Long Game",
    excerpt: "The integrity required in fair trade isn't about certification badges—it's about looking farmers in the eye year after year and keeping your word when no one's watching.",
    category: "Governance",
    readTime: 10,
    image: governanceImg,
    date: "Nov 5, 2025",
  },
  {
    slug: "soil-patience",
    title: "Soil Work: The Patient Investment",
    excerpt: "Building soil health takes years. Destroying it takes one season of shortcuts. Portfolio management follows the same truth.",
    category: "Cultivation",
    readTime: 7,
    image: cultivationImg,
    date: "Oct 29, 2025",
  },
];

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesField = !selectedField || article.category === selectedField;
    return matchesSearch && matchesField;
  });

  const fields = ["Cultivation", "Stewardship", "Governance", "Character"];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-charcoal text-paper">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-display font-serif font-bold mb-6">The Collection</h1>
            <p className="text-2xl font-body text-paper-dark leading-relaxed">
              Essays on cultivation, stewardship, governance, and character—
              <br />
              earned through thirty years of real work.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search essays..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 font-sans"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                variant={selectedField === null ? "default" : "outline"}
                onClick={() => setSelectedField(null)}
                className="font-sans"
              >
                All Fields
              </Button>
              {fields.map((field) => (
                <Button
                  key={field}
                  variant={selectedField === field ? "default" : "outline"}
                  onClick={() => setSelectedField(field)}
                  className="font-sans"
                >
                  {field}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredArticles.map((article, index) => (
                  <div
                    key={article.slug}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ArticleCard {...article} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground font-body">
                  No essays found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Archive;
