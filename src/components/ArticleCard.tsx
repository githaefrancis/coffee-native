import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { urlFor } from "../sanity/client";
interface ArticleCardProps {
  slug: Record<"current", string>;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  image: string;
  date: string;
}

const ArticleCard = ({
  slug,
  title,
  excerpt,
  category,
  readTime,
  image,
  date,
}: ArticleCardProps) => {
  const categoryColors: Record<string, string> = {
    Cultivation: "bg-forest text-paper",
    Stewardship: "bg-primary text-primary-foreground",
    Governance: "bg-burgundy text-paper",
    Character: "bg-sienna text-paper",
  };

  return (
    <Link to={`/article/${slug.current}`} className="group block">
      <article className="h-full bg-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={typeof image == "string" ? image : urlFor(image).url()}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category Badge */}
          <div
            className={`absolute top-4 left-4 px-3 py-1 ${categoryColors[category] || "bg-muted"}`}
          >
            <span className="text-xs font-sans font-medium tracking-wider uppercase">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-serif font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-muted-foreground font-body mb-4 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans">
            {/* <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{readTime} min read</span>
            </div> */}
            {/* <span>•</span> */}
            <time>{new Date(date).toDateString()}</time>
          </div>
        </div>

        {/* Hover Line */}
        <div className="h-0.5 bg-gradient-to-r from-primary to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </article>
    </Link>
  );
};

export default ArticleCard;
