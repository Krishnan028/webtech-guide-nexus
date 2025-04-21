
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Theory = () => {
  const chapters = [
    {
      id: 1,
      title: "INTRODUCTION TO HTML",
      content: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. Core concepts include:

• Document structure and elements
• Semantic HTML tags
• Forms and input elements
• Tables and lists
• Multimedia elements`
    },
    {
      id: 2,
      title: "JAVASCRIPT",
      content: `JavaScript is the primary programming language for web browsers. Essential concepts include:

• Variables and data types
• Functions and scope
• DOM manipulation
• Events and event handling
• Asynchronous programming`
    },
    {
      id: 3,
      title: "XML WEB SERVERS & SERVLETS",
      content: `This unit covers XML web servers and servlet technology:

• XML basics and syntax
• Web server configuration
• Servlet lifecycle and API
• Handling HTTP requests and responses
• Session management`
    },
    {
      id: 4,
      title: "JSP APPLICATION DEVELOPMENT",
      content: `JSP (JavaServer Pages) for dynamic web applications:

• JSP syntax and scripting elements
• Directives, declarations, and expressions
• JavaBeans integration
• Error handling and debugging
• MVC architecture with JSP`
    },
    {
      id: 5,
      title: "STRUTS.DATABASE ACCESS & AJAX",
      content: `Advanced web development with Struts and asynchronous programming:

• Struts framework basics
• Database integration and access
• Form validation and tags
• AJAX concepts and implementation
• Enhancing user experience via asynchronous calls`
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

