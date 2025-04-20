
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Theory = () => {
  const chapters = [
    { id: 1, title: "Introduction to Web Technologies", content: "Coming soon..." },
    { id: 2, title: "HTML Fundamentals", content: "Coming soon..." },
    { id: 3, title: "CSS and Styling", content: "Coming soon..." },
    { id: 4, title: "JavaScript Basics", content: "Coming soon..." },
    { id: 5, title: "Web Protocols and HTTP", content: "Coming soon..." },
    { id: 6, title: "Server-Side Programming", content: "Coming soon..." },
    { id: 7, title: "Database Integration", content: "Coming soon..." },
    { id: 8, title: "Web Security", content: "Coming soon..." },
    { id: 9, title: "Web Services and APIs", content: "Coming soon..." },
    { id: 10, title: "Modern Web Frameworks", content: "Coming soon..." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Theory Notes</h1>
        <Tabs defaultValue="1" className="w-full">
          <TabsList className="flex flex-wrap gap-2 mb-4">
            {chapters.map((chapter) => (
              <TabsTrigger key={chapter.id} value={chapter.id.toString()}>
                Chapter {chapter.id}
              </TabsTrigger>
            ))}
          </TabsList>
          {chapters.map((chapter) => (
            <TabsContent key={chapter.id} value={chapter.id.toString()}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">{chapter.title}</h2>
                <p className="text-gray-600">{chapter.content}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Theory;
