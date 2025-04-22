
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, FileText, Link as LinkIcon, Star } from "lucide-react";

// Jazz Unsplash images:
const jazzBg1 = "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=900&q=80"; // Blue starry night
const jazzBg2 = "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&q=80"; // Yellow lights / mood
const jazzAccent = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"; // Music/Matrix mood

const Index = () => {
  const features = [
    {
      icon: Star,
      title: "Benefits",
      description: "Discover the advantages of web technology",
      link: "/benefits"
    },
    {
      icon: Book,
      title: "Theory Notes",
      description: "Comprehensive chapters on web technology concepts",
      link: "/theory"
    },
    {
      icon: FileText,
      title: "Lab Manual",
      description: "Practical exercises and assignments",
      link: "/lab"
    },
    {
      icon: LinkIcon,
      title: "References",
      description: "Curated list of helpful resources",
      link: "/references"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Jazz theme decorative images */}
      <img 
        src={jazzBg1}
        alt=""
        className="fixed top-0 left-0 w-[380px] opacity-45 pointer-events-none select-none rounded-3xl z-0 hidden md:block transition-all jazz-accent-img"
        style={{ filter: "blur(2px)", objectFit: "cover" }}
      />
      <img
        src={jazzBg2}
        alt=""
        className="fixed bottom-0 right-0 w-[500px] opacity-60 pointer-events-none select-none rounded-3xl z-0 hidden md:block transition-all jazz-accent-img"
        style={{ filter: "blur(2.5px)", objectFit: "cover" }}
      />
      {/* Subtle accent image */}
      <img
        src={jazzAccent}
        alt=""
        className="absolute top-14 left-1/2 -translate-x-1/2 w-36 h-36 object-cover rounded-full opacity-15 pointer-events-none jazz-accent-img"
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-primary drop-shadow-lg tracking-tight mb-4 font-sora jazz-glass">
            Web Technology
          </h1>
          <p className="text-xl text-accent font-bold drop-shadow-sm font-sora jazz-glass inline-block px-6 py-2 rounded-full">
            Krishnan.R - E22ASR028
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="block group">
              <div className="jazz-glass rounded-3xl shadow-xl p-8 hover:scale-105 hover:border-accent transition-all text-center relative">
                <feature.icon className="w-14 h-14 mx-auto mb-5 text-jazz-gold group-hover:scale-110 transition-all" />
                <h2 className="text-2xl font-bold text-jazz-mauve mb-2 drop-shadow-md">{feature.title}</h2>
                <p className="text-muted-foreground mb-6 font-sora">{feature.description}</p>
                <Button variant="outline" className="w-full border-accent text-jazz-gold hover:bg-accent/30 hover:text-primary transition-all">
                  Learn More
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="jazz-wave" />
    </div>
  );
};

export default Index;
