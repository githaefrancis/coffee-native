import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Mail, Linkedin, Twitter } from "lucide-react";

const About = () => {
  const timeline = [
    { year: "1995", event: "Began coffee farming, learning from the ground up" },
    { year: "2002", event: "First board position, local agricultural cooperative" },
    { year: "2008", event: "Expanded operations across three regions" },
    { year: "2012", event: "Fair trade certification, commitment to ethical sourcing" },
    { year: "2015", event: "Board member, regional investment fund" },
    { year: "2018", event: "Published first essay on farm management and governance" },
    { year: "2020", event: "Advisory roles for sustainable agriculture startups" },
    { year: "2025", event: "Launched The Cultivated Mind" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-charcoal text-paper">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-display font-serif font-bold mb-6">About</h1>
            <p className="text-2xl font-body text-paper-dark leading-relaxed italic">
              "In a world drowning in performance, this is a space for practice.
              <br />
              Thirty years of lessons learned the hard way."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Portrait & Bio */}
            <div className="grid md:grid-cols-5 gap-12 mb-16 animate-fade-in">
              <div className="md:col-span-2">
                {/* Portrait Placeholder */}
                <div className="aspect-[3/4] bg-muted flex items-center justify-center border-2 border-gold/30">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 border-2 border-gold rounded-full" />
                    <p className="text-sm font-sans text-muted-foreground">Portrait</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 space-y-6 font-body text-lg leading-relaxed">
                <p>
                  I've been waking up at 4 AM for thirty years—not because a productivity guru told me to, 
                  but because coffee cherries don't negotiate. They ripen on their schedule, not mine.
                </p>

                <p>
                  That simple truth has taught me everything I need to know about discipline, timing, 
                  and the difference between hustle culture and actual work. The kind where your reputation 
                  is built harvest by harvest, handshake by handshake, and there's no faking it.
                </p>

                <p>
                  Over three decades, I've cultivated coffee across multiple regions, served on corporate 
                  boards, advised investment funds, and learned that the principles are universal: 
                  patience compounds, integrity scales, and the quiet work no one sees determines everything.
                </p>

                <p className="text-primary italic font-medium">
                  This isn't theory from business school. These are patterns recognized through real work—
                  the kind where bad decisions cost you a season, good ones build legacy, and excellence 
                  is the only protection against commodity thinking.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-heading font-serif font-bold mb-8 text-center">
                The Journey
              </h2>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className="flex gap-8 items-start group"
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-2xl font-serif font-bold text-primary group-hover:text-gold transition-colors">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1 pb-6 border-b border-border/50 group-hover:border-primary/50 transition-colors">
                      <p className="text-lg font-body">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-muted p-12 mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h2 className="text-heading font-serif font-bold mb-6 text-center">
                The Philosophy
              </h2>

              <div className="space-y-6 font-body text-lg leading-relaxed max-w-3xl mx-auto">
                <p className="text-center italic text-xl text-muted-foreground">
                  What I believe and why it matters
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-3 text-primary">Earned Authority</h3>
                    <p className="text-muted-foreground">
                      Real credibility comes from decades of actual work, not social media performance. 
                      I share what I've learned through practice, failure, and persistence.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-3 text-primary">Long-Term Thinking</h3>
                    <p className="text-muted-foreground">
                      Whether farming, investing, or building organizations, the best outcomes emerge 
                      from patience, compound effects, and resisting short-term optimization.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-3 text-primary">Integrity Scales</h3>
                    <p className="text-muted-foreground">
                      Keeping your word, showing up on time, treating people fairly—these aren't soft skills. 
                      They're the foundation of everything that lasts.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-3 text-primary">Timeless Over Trendy</h3>
                    <p className="text-muted-foreground">
                      I don't chase viral topics or hot takes. These essays explore principles that 
                      were true thirty years ago and will be true thirty years from now.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
              <h2 className="text-heading font-serif font-bold mb-6">
                Connect
              </h2>

              <p className="text-lg font-body text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                For guest submissions, speaking inquiries, or just to share your own lessons from the field, 
                I'd be honored to hear from you.
              </p>

              <div className="flex justify-center gap-6 mb-12">
                <a
                  href="mailto:hello@cultivatedmind.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-gold-light transition-colors font-sans font-medium"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary hover:text-primary transition-colors font-sans font-medium"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary hover:text-primary transition-colors font-sans font-medium"
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </a>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-sm font-sans text-muted-foreground">
                  Coffee farmer • Investor • Board member
                  <br />
                  Writing from the farm since 1995
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
