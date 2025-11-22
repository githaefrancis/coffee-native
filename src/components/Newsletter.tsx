import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing. Rare thoughts, delivered monthly.");
    setEmail("");
  };

  return (
    <section className="py-24 bg-charcoal text-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <Mail className="h-12 w-12 mx-auto mb-6 text-gold" />
          
          <h2 className="text-heading font-serif font-bold mb-4">
            The Morning Brief
          </h2>
          
          <p className="text-xl font-body text-paper-dark mb-8 leading-relaxed">
            One paragraph of wisdom. Delivered weekly at 6 AM. 
            Written personally, feels like a letter.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-paper-dark/10 border-paper-dark/30 text-paper placeholder:text-paper-dark/60 focus:border-gold font-sans"
            />
            <Button 
              type="submit"
              className="bg-gold hover:bg-gold-light text-charcoal font-sans font-medium transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>

          <p className="mt-6 text-sm text-paper-dark font-sans">
            Rare thoughts, delivered monthly. No spam, no noise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
