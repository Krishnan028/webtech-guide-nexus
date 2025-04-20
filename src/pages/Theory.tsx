
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Theory = () => {
  const chapters = [
    {
      id: 1,
      title: "Introduction to Web Technologies",
      content: `Web technologies encompass the various tools and protocols used for communicating between computers over the internet. Key components include:

• Client-side technologies (HTML, CSS, JavaScript)
• Server-side technologies (Node.js, Python, PHP)
• Web protocols (HTTP/HTTPS)
• Web services and APIs
• Database technologies`
    },
    {
      id: 2,
      title: "HTML Fundamentals",
      content: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. Core concepts include:

• Document structure and elements
• Semantic HTML tags
• Forms and input elements
• Tables and lists
• Multimedia elements`
    },
    {
      id: 3,
      title: "CSS and Styling",
      content: `CSS (Cascading Style Sheets) controls the visual presentation of HTML elements. Key topics include:

• Selectors and properties
• Box model and layout
• Flexbox and Grid
• Responsive design
• CSS animations`
    },
    {
      id: 4,
      title: "JavaScript Basics",
      content: `JavaScript is the primary programming language for web browsers. Essential concepts include:

• Variables and data types
• Functions and scope
• DOM manipulation
• Events and event handling
• Asynchronous programming`
    },
    {
      id: 5,
      title: "Web Protocols and HTTP",
      content: `Understanding web protocols is crucial for web development:

• HTTP methods (GET, POST, PUT, DELETE)
• Status codes and headers
• HTTPS and security
• RESTful principles
• WebSocket protocol`
    },
    {
      id: 6,
      title: "Server-Side Programming",
      content: `Server-side programming handles business logic and data storage:

• Server architectures
• Request handling
• Database interactions
• Session management
• API development`
    },
    {
      id: 7,
      title: "Database Integration",
      content: `Databases are essential for storing and managing web application data:

• Database types (SQL vs NoSQL)
• CRUD operations
• Data modeling
• Query optimization
• Database security`
    },
    {
      id: 8,
      title: "Web Security",
      content: `Security is crucial for protecting web applications:

• Common vulnerabilities (XSS, CSRF)
• Authentication and authorization
• Input validation
• Security headers
• SSL/TLS encryption`
    },
    {
      id: 9,
      title: "Web Services and APIs",
      content: `Web services enable communication between different systems:

• REST APIs
• SOAP services
• API authentication
• Data formats (JSON, XML)
• API documentation`
    },
    {
      id: 10,
      title: "Modern Web Frameworks",
      content: `Modern frameworks accelerate web development:

• React.js fundamentals
• State management
• Component architecture
• Routing and navigation
• Build tools and deployment`
    }
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
                <p className="text-gray-600 whitespace-pre-line">{chapter.content}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Theory;
