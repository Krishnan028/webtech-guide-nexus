
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Book, FileText, Link as LinkIcon, Star, Code } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">WebTech Guide</Link>
          <div className="flex space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/benefits" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Benefits
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/theory" className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                Theory
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/lab" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Lab Manual
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/references" className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                References
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
