import { useParams, Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee-farm.jpg";
import governanceImg from "@/assets/article-governance.jpg";
import cultivationImg from "@/assets/article-cultivation.jpg";
import stewardshipImg from "@/assets/article-stewardship.jpg";
import characterImg from "@/assets/article-character.jpg";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { type SanityDocument } from "@sanity/client";
import { urlFor } from "../sanity/client";

const ARTICLES_QUERY = `
*[_type == "article" && slug.current ==$slug][0]{_id, title, slug, date, content, image, category, excerpt}
`;

// Sample article data
const _articles: Record<string, any> = {
  "the-harvest-timer-what-coffee-cherries-taught-me-about-exit-strategies": {
    title:
      "The Harvest Timer: What Coffee Cherries Taught Me About Exit Strategies",
    subtitle:
      "Picking too early leaves value on the branch. Waiting too long spoils the returns.",
    category: "Stewardship",
    readTime: 8,
    date: "Nov 18, 2025",
    image: heroImage,
    author: "The Cultivated Mind",
    location: "Written from the farm",
    content: `
      Everyone talks about timing the market. I've been timing harvests for thirty years.

      The parallel is exact. Pick coffee cherries too early, and they're sour—the sugars haven't developed, the acids are harsh. The potential was there, but you grabbed it before it matured. Leave them too long, and they overripen, ferment on the branch, fall to the ground. What could have been premium becomes compost.

      Exit strategies follow the same truth.

      # The Signs Before the Pick

      In coffee farming, you learn to read subtle signals. The color shift from red to deep burgundy. The slight give when you squeeze. The way morning dew sits on the skin. These aren't guesses—they're patterns recognized through repetition.

      Investment exits have their own signals. Market sentiment shifts. Valuation multiples expand beyond fundamentals. Management teams start talking more about strategy than execution. Competitors emerge with better efficiency. The trade press changes tone.

      Most people miss these signs because they're looking at prices, not conditions.

      > "The best time to harvest is when the fruit is perfect, not when you need the money."

      # The Discipline to Walk the Rows

      I walk my farm every morning. Not because something's wrong. Not because I'm anxious. Because daily observation is how you develop judgment.

      You notice when one section ripens faster due to elevation. When afternoon shade delays maturity. When a particular varietal needs three more days. This accumulated knowledge compounds.

      Portfolio management requires the same discipline. Daily review of positions, not to trade frantically, but to build pattern recognition. You notice when momentum shifts. When volume changes character. When correlation breaks down.

      The undisciplined farmer and the reactive investor make the same mistake: they check only when they think they need to act. By then, optimal timing has passed.

      # Patience Under Pressure

      Harvest season brings pressure. Neighbors pick early because they need cash flow. Buyers push you to deliver because their schedules are tight. Weather forecasts predict rain.

      Every external force says: "Pick now."

      But if the cherries aren't ready, they aren't ready. Harvest too early under pressure, and you get paid less—buyers know quality by taste. Your short-term cash need becomes a long-term price discount.

      Exit pressure works the same way. Markets get frothy. Founders talk about their exits. Advisors suggest "taking some off the table." Tax law changes loom.

      But if the underlying business hasn't reached its valuation potential, selling early means leaving the best returns for the next owner. You solved a short-term optimization at the cost of the long-term outcome.

      # Knowing When to Let Go

      Here's the uncomfortable truth: there's no perfect harvest. There's a window—usually 3-7 days for coffee—where quality is optimal. Pick in that window, and you maximize value. Miss it entirely, and value degrades fast.

      The same window exists in exits. Not a single perfect day, but a period where multiple factors align: business performance, market conditions, buyer appetite, your own readiness to move on.

      Obsessing over the absolute peak is how you miss the window entirely. I've seen farmers let entire sections overripen trying to hit the theoretically perfect day. They got neither perfection nor profit.

      # The Harvest Philosophy

      After three decades, here's what I've learned:

      **Timing beats prediction.** You can't predict the perfect moment, but you can recognize the right conditions when they arrive.

      **Readiness is preparation.** The time to think about exit strategy isn't when you're ready to exit. It's now, so you recognize the window when it opens.

      **Quality compounds patience.** Every year I wait for full ripeness, even under pressure, my reputation for quality grows. Premium buyers seek me out. I've earned pricing power through consistency.

      **The land teaches slower than the market moves.** Agricultural rhythms are measured in seasons. Financial markets move faster. But the underlying principles—recognize readiness, resist pressure, optimize for the window, not the day—these transfer exactly.

      # The Practical Application

      So how do you actually apply this to investments, businesses, or careers?

      **First, define your indicators.** For coffee, it's color, firmness, sugar content. For your situation, what are the measurable signs of peak value? Not price—price is lagging. What are the leading indicators?

      **Second, review systematically.** Not emotionally, not reactively. Build a review rhythm that lets you notice change over time. Weekly for active positions. Monthly for passive. Quarterly for strategic.

      **Third, set your window, not your point.** Don't try to call the exact top. Define the conditions that represent "good enough" and have the discipline to act when they arrive.

      **Fourth, plan the logistics early.** Harvest requires labor, equipment, buyers, processing. Exits require legal work, tax planning, buyer identification, transition planning. Start these conversations before you need them.

      # The Final Pick

      The hardest lesson: sometimes the optimal exit is earlier than you want.

      I've harvested sections knowing that three more days would improve quality by 5%. But weather was coming. Processing capacity was available now but not next week. Buyers were ready to pay.

      The perfect became the enemy of the very good.

      In business, this means accepting that 80% of the potential gain is better than holding for 100% and getting 50% due to changed conditions.

      Coffee cherries and exit strategies both teach the same wisdom: **Timing is about reading conditions, not predicting prices. Discipline beats optimization. And the best harvest is the one you actually execute in the right window, not the theoretical one you missed.**

      The rows are waiting. The market is open. The question isn't whether conditions will be perfect—they won't be. The question is whether you're walking the rows daily, learning to read the signs, and preparing to act when your window arrives.
    `,
    nextArticle: "punctuality-respect",
    prevArticle: null,
    relatedArticles: [
      {
        slug: "soil-patience",
        title: "Soil Work: The Patient Investment",
        category: "Cultivation",
      },
      {
        slug: "fair-trade-integrity",
        title: "Fair Trade and the Long Game",
        category: "Governance",
      },
    ],
  },
  "punctuality-respect": {
    title: "Punctuality Isn't Performance—It's Respect",
    subtitle:
      "Everyone talks about hustle culture. I've been up at 4 AM for thirty years.",
    category: "Character",
    readTime: 6,
    date: "Nov 12, 2025",
    image: characterImg,
    author: "The Cultivated Mind",
    location: "Written from the farm",
    content: `
      Everyone talks about "hustle culture." I've been up at 4 AM for thirty years, not because Gary Vee told me to, but because coffee cherries don't care about your schedule.

      That's not hustle—that's discipline. And there's a difference.

      # The Morning Truth

      Coffee cherries ripen on their own timeline. Rain comes when it comes. Buyers arrive at the agreed time. Your workers show up expecting leadership.

      None of this negotiates with your feelings, your intentions, or your excuses.

      Punctuality in farming isn't about impressing anyone. It's about respecting reality. The crop doesn't care if you're tired. The season doesn't wait for you to feel ready. Nature operates on precision, and you either sync with it or you fail.

      This is the first thing most people misunderstand about discipline: **it's not about willpower. It's about accepting that the world runs on schedules that aren't yours.**

      # Respect in Time

      When I tell a worker we start at 6 AM, and I arrive at 6:15, I've just communicated something. Not with words—with time.

      I've said: "My time is more valuable than yours. My schedule matters more than our agreement. Your respect for the commitment means less than my convenience."

      This is why punctuality is a character issue, not a productivity hack.

      Being late is a statement. Being consistently late is a philosophy. It says: "I value my flexibility over your time. I privilege my chaos over our coordination."

      > "Show me someone's calendar and their punctuality record, and I'll show you their integrity in time-based form."

      # The Compound Cost

      Here's what most people miss: lateness compounds.

      I show up late to a meeting. You wait 15 minutes. But you didn't just lose 15 minutes—you lost the mental context you'd prepared, the momentum you'd built, the next task you'd planned. Multiply this by everyone waiting, and a 15-minute delay becomes an hour of collective waste.

      Do this weekly, and you've stolen days from your team over a year. Do it for years, and you've built a culture where precision doesn't matter, commitments are negotiable, and excellence becomes approximate.

      Meanwhile, the farmer who starts on time, every time, builds something different: **a reputation for reliability that becomes a competitive advantage.**

      When buyers need to choose between suppliers, they choose the one whose word is demonstrated through their schedule.

      # The Hidden Leverage

      Here's the part people really don't want to hear: **punctuality is one of the easiest ways to outperform in modern life, precisely because almost no one does it.**

      Show up on time. Every time. Not because you're obsessed with clocks, but because you respect the people whose time you're asking for.

      This costs nothing. It requires no talent. It needs no special resources. But it immediately places you in the top 20% of reliable people.

      I've won contracts over competitors with better equipment. I've earned board seats over people with better credentials. Not because I'm more capable—because I can be counted on to show up when I say I will.

      That's not a small thing. In a world of flaky execution, it's everything.

      # The Culture Question

      Late cultures are broken cultures.

      If meetings start late, it means leadership doesn't value collective time. If deadlines slide, it means commitments aren't real. If "flexible schedule" means "no one knows when anyone's available," it means coordination is a luxury you've decided not to afford.

      These aren't policies. They're symptoms. The disease is the belief that individual convenience trumps collective coordination.

      Healthy cultures operate differently. Meetings start precisely. Deadlines are either met or renegotiated early. Schedules are visible and honored.

      This doesn't mean rigidity. It means respect.

      # The Exception Trap

      Someone will say: "But what about emergencies? What about flexibility? What about work-life balance?"

      Real emergencies are rare. True flexibility doesn't mean absence of structure—it means clarity about when structure bends. And work-life balance isn't achieved through chronic lateness—it's achieved through honest scheduling.

      If you're always late, you're never experiencing an emergency. You're experiencing a pattern. And patterns reveal priorities.

      # The Practice

      So how do you actually become punctual if you're not?

      **First, understand it's moral, not tactical.** This isn't about productivity tips. It's about respecting other people's time as much as you value your own.

      **Second, schedule less.** If you're always late, you're overscheduled. Cut commitments until you can honor the ones remaining.

      **Third, add buffer time.** If something starts at 10, plan to arrive at 9:50. Traffic, parking, the last-minute call—these aren't surprises. They're predictable. Plan for them.

      **Fourth, communicate early.** If you're genuinely going to be late, notify immediately. Not when you're supposed to arrive—when you first know you won't make it. Give people options.

      **Fifth, fix the root cause.** Chronic lateness isn't about time management. It's usually about overcommitment, poor boundaries, or disorganization. Address those.

      # The Long View

      After thirty years of 4 AM mornings, here's what I know:

      **Punctuality is invisible until it's absent.** No one notices you showed up on time—until the day you don't. Then they notice everything.

      **It's the easiest way to demonstrate respect.** You can say you value someone. Or you can show it by honoring the time they've allocated to you.

      **It compounds into reputation.** One on-time appearance means little. Thirty years of them means everything.

      The coffee cherries taught me this. They're ready when they're ready, not when I feel like checking. The harvest waits for no one. The season doesn't negotiate.

      And the people who understand this—who sync their schedules with reality rather than asking reality to wait for them—these are the people who build things that last.

      **Because respect isn't performed. It's practiced. And the most basic practice is showing up when you said you would.**
    `,
    nextArticle: "fair-trade-integrity",
    prevArticle: "harvest-timer",
    relatedArticles: [
      {
        slug: "harvest-timer",
        title: "The Harvest Timer",
        category: "Stewardship",
      },
      {
        slug: "soil-patience",
        title: "Soil Work: The Patient Investment",
        category: "Cultivation",
      },
    ],
  },
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [readProgress, setReadProgress] = useState(0);
  // const article = slug ? _articles[slug] : null;

  const [article, setArticle] = useState([]);

  const fetchArticle = useCallback(async () => {
    try {
      const fetchedArticle = await client.fetch<SanityDocument[]>(
        ARTICLES_QUERY,
        { slug: slug }
      );
      setArticle(fetchedArticle);
    } catch (err) {
      console.log("failed");
    }
  }, []);
  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">
            Essay Not Found
          </h1>
          <Link to="/" className="text-primary hover-underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    Cultivation: "bg-forest text-paper",
    Stewardship: "bg-primary text-primary-foreground",
    Governance: "bg-burgundy text-paper",
    Character: "bg-sienna text-paper",
  };

  const components = {
    block: {
      blockquote: ({ children }) => (
        <blockquote className="pull-quote">{children}</blockquote>
      ),
    },
  };

  return (
    <div className="min-h-screen">
      {/* Reading Progress Bar */}
      <div
        className="reading-progress fixed top-0 left-0 z-50"
        style={{ width: `${readProgress}%` }}
      />

      <Header />

      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={article.image ? urlFor(article.image).url() : ""}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-8 left-8 p-3 bg-paper/90 backdrop-blur-sm hover:bg-paper transition-all duration-300 group"
        >
          <ArrowLeft className="h-5 w-5 text-charcoal group-hover:-translate-x-1 transition-transform" />
        </Link>

        {/* Category Badge */}
        <div className="absolute top-8 right-8">
          <div className={`px-4 py-2 ${categoryColors[article.category]}`}>
            <span className="text-xs font-sans font-medium tracking-wider uppercase">
              {article.category}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 animate-fade-in">
          <h1 className="text-display font-serif font-bold mb-4 leading-tight">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="text-2xl text-muted-foreground font-body italic mb-8 leading-relaxed">
              {article.subtitle}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans border-y border-border py-6">
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">
                By {article.author}
              </span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>{article.date}</time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} min read</span>
            </div>
            {article.location && (
              <>
                <span>•</span>
                <span className="text-primary italic">{article.location}</span>
              </>
            )}
          </div>
        </header>

        {/* Article Body */}
        <div
          className="prose max-w-none animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          {article?.content && (
            <PortableText value={article.content} components={components} />
          )}
          {
            // article.content
            //   .split("\n\n")
            //   .map((paragraph: string, index: number) => {
            //     if (paragraph.trim().startsWith("# ")) {
            //       return (
            //         <h2
            //           key={index}
            //           className="text-heading font-serif font-bold mt-16 mb-6"
            //         >
            //           {paragraph.replace("# ", "")}
            //         </h2>
            //       );
            //     } else if (paragraph.trim().startsWith("> ")) {
            //       return (
            //         <blockquote key={index} className="pull-quote">
            //           {paragraph.replace("> ", "").replace(/"/g, "")}
            //         </blockquote>
            //       );
            //     } else if (
            //       paragraph.trim().startsWith("**") &&
            //       paragraph.trim().endsWith("**")
            //     ) {
            //       return (
            //         <p
            //           key={index}
            //           className="text-xl font-medium my-8 text-charcoal"
            //         >
            //           {paragraph.replace(/\*\*/g, "")}
            //         </p>
            //       );
            //     } else if (paragraph.trim()) {
            //       return (
            //         <p key={index} className="mb-6 text-lg leading-relaxed">
            //           {paragraph.split("**").map((part, i) =>
            //             i % 2 === 1 ? (
            //               <strong key={i} className="font-semibold text-charcoal">
            //                 {part}
            //               </strong>
            //             ) : (
            //               part
            //             )
            //           )}
            //         </p>
            //       );
            //     }
            //     return null;
            //   })
          }
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          {/* Related Essays */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <div className="mb-12 animate-fade-in">
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Related Essays
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {article.relatedArticles.map((related: any) => (
                  <Link
                    key={related.slug}
                    to={`/article/${related.slug}`}
                    className="group p-6 bg-muted hover:bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div
                      className={`inline-block px-3 py-1 mb-3 text-xs font-sans font-medium tracking-wider uppercase ${categoryColors[related.category]}`}
                    >
                      {related.category}
                    </div>
                    <h4 className="text-xl font-serif font-semibold group-hover:text-primary transition-colors">
                      {related.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Next/Previous Navigation */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {article.prevArticle ? (
              <Link
                to={`/article/${article.prevArticle}`}
                className="group p-8 bg-charcoal text-paper hover:bg-secondary transition-all duration-300 flex items-center gap-4"
              >
                <ArrowLeft className="h-6 w-6 text-gold group-hover:-translate-x-2 transition-transform flex-shrink-0" />
                <div>
                  <div className="text-xs font-sans uppercase tracking-wider text-gold mb-2">
                    Previous Essay
                  </div>
                  <div className="text-lg font-serif font-semibold">
                    {_articles[article.prevArticle]?.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-8 bg-muted opacity-50">
                <div className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-2">
                  First Essay
                </div>
              </div>
            )}

            {article.nextArticle ? (
              <Link
                to={`/article/${article.nextArticle}`}
                className="group p-8 bg-charcoal text-paper hover:bg-secondary transition-all duration-300 flex items-center justify-end gap-4"
              >
                <div className="text-right">
                  <div className="text-xs font-sans uppercase tracking-wider text-gold mb-2">
                    Next Essay
                  </div>
                  <div className="text-lg font-serif font-semibold">
                    {_articles[article.nextArticle]?.title}
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-gold group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </Link>
            ) : (
              <div className="p-8 bg-muted opacity-50">
                <div className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-2 text-right">
                  Latest Essay
                </div>
              </div>
            )}
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link to="/" className="inline-block">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                ← Return to The Collection
              </Button>
            </Link>
          </div>
        </footer>
      </article>

      <Footer />
    </div>
  );
};

export default Article;
