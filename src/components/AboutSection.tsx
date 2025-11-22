const AboutSection = () => {
  return (
    <section className="py-24 bg-secondary text-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Portrait placeholder - you can add an image here */}
            <div className="aspect-square bg-charcoal/30 flex items-center justify-center animate-fade-in">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 border-2 border-gold rounded-full" />
                <p className="text-sm font-sans text-paper-dark">Portrait</p>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-heading font-serif font-bold mb-6">About</h2>
              
              <div className="space-y-4 text-lg font-body text-paper-dark leading-relaxed">
                <p>
                  Thirty years of coffee farming. Two decades on corporate boards. 
                  A lifetime of learning that discipline compounds, integrity scales, 
                  and patience pays.
                </p>
                
                <p>
                  This isn't theory taught in business schools. These are patterns 
                  recognized through real work—the kind where your reputation is 
                  built harvest by harvest, handshake by handshake.
                </p>
                
                <p className="text-gold font-medium italic">
                  "In a world drowning in performance, this is a space for practice."
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-paper-dark/30">
                <p className="text-sm font-sans text-paper-dark">
                  Coffee farmer • Investor • Board member
                  <br />
                  Writing from the farm since 1995
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
