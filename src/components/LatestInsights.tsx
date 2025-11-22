import ArticleCard from "./ArticleCard";
import governanceImg from "@/assets/article-governance.jpg";
import cultivationImg from "@/assets/article-cultivation.jpg";
import stewardshipImg from "@/assets/article-stewardship.jpg";
import characterImg from "@/assets/article-character.jpg";

const articles = [
  {
    slug: "harvest-timer",
    title: "The Harvest Timer: What Coffee Cherries Taught Me About Exit Strategies",
    excerpt: "Picking too early leaves value on the branch. Waiting too long spoils the returns. After thirty years, I've learned the signs.",
    category: "Stewardship",
    readTime: 8,
    image: stewardshipImg,
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

const LatestInsights = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <h2 className="text-heading font-serif font-bold">Latest Insights</h2>
          <a 
            href="/archive" 
            className="text-primary font-sans font-medium hover-underline"
          >
            View All →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div 
              key={article.slug}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
