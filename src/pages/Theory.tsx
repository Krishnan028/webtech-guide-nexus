
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Image references (Unsplash free images)
const bgImage1 = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80";
const bgImage2 = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80";
const accentImg = "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80";

const Theory = () => {
  const chapters = [
    {
      id: 1,
      title: "INTRODUCTION TO HTML",
      content: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. Core concepts include:
• HTML stands for Hypertext Markup Language, used to create web pages or hypertext documents
• Platform independent - can be viewed on any OS with a browser
• Basic structure includes <html>, <head>, <title>, and <body> tags
• Common formatting tags:
  - Text formatting: <b>, <i>, <u>, <strong>, <sub>, <sup>
  - Headings: <h1> to <h6>
  - Font: <font> with size, color, and face attributes
  - Marquee: <marquee> for scrolling text
  - Preformatted text: <pre>
• Lists:
  - Unordered lists: <ul> with <li>
  - Ordered lists: <ol> with <li>
  - Definition lists: <dl> with <dt> and <dd>
• Tables:
  - Created with <table>, <tr>, <th>, <td>
  - Attributes: border, cellpadding, cellspacing, colspan, rowspan
• Forms:
  - Created with <form>
  - Input elements: text, password, textarea, radio, checkbox, select, button
  - Attributes: action, method
• Frames:
  - Divide browser window with <frameset> and <frame>
  - Attributes: rows, cols, src, name
• CSS:
  - Three ways to apply styles: inline, embedded, external
  - Style rules have selectors and declarations
`,
      pdfUrl: "https://github.com/Krishnan028/webtech-guide-nexus/raw/main/Unit-1.pdf"
    },
    {
      id: 2,
      title: "JAVASCRIPT",
      content: `JavaScript is a scripting language for client-side web applications. Key concepts:
• JavaScript basics:
  - Embedded into HTML, browser dependent, interpreted language
  - Loosely typed, object-based, event-driven
  - Scripts included with <script> tag
• Statements and control structures:
  - if-else, switch-case
  - Loops: for, while, do-while
• Functions:
  - Defined with function keyword
  - Can have parameters and return values
  - Example: function validate() { ... }
• Events:
  - Mouse events: onclick, onmouseover, onmouseout
  - Keyboard events: onkeydown, onkeyup
  - Form events: onsubmit, onchange, onfocus
• Objects:
  - Window: methods like open(), close(), scroll()
  - Document: methods like write(), writeln()
  - Form: validation, building forms through JS
  - Math: min(), max(), random(), round()
  - Date: getDate(), getDay(), getMonth(), etc.
• Arrays:
  - Creation: var days = ["Mon", "Tue", "Wed"]
  - Adding elements, accessing with index
  - Length property
• Dynamic HTML:
  - Changing tags and content
  - Live positioning of elements
  - Dynamic fonts
  - Methods: insertAdjacentHTML, innerText, innerHTML
• Form Validation:
  - Client-side validation before submission
  - Checking for empty fields, valid formats
  - Example: validate email with regular expressions
`,
      pdfUrl: "https://github.com/Krishnan028/webtech-guide-nexus/raw/main/Unit-2.pdf"
    },
    {
      id: 3,
      title: "XML WEB SERVERS & SERVLETS",
      content: `XML and server-side technologies:
• XML (Extensible Markup Language):
  - Text-based markup language, self-descriptive
  - Advantages: readable, hierarchical, platform independent
  - Well-formed XML: proper nesting, closing tags
  - DTD (Document Type Definition): defines document structure
  - XML Schema: alternative to DTD, more powerful
• Presenting XML:
  - XSL (Extensible Stylesheet Language)
  - XSLT for transforming XML documents
  - Example: transforming XML to HTML
• Document Object Model (DOM):
  - API for XML documents
  - Represents document as tree structure
  - Methods to navigate, search, modify XML
• Servlets:
  - Server-side Java programs
  - Lifecycle: init(), service(), destroy()
  - Advantages over CGI: better performance, platform independent
• Servlet API:
  - javax.servlet and javax.http packages
  - Key interfaces: Servlet, ServletConfig, ServletRequest, ServletResponse
  - HttpServlet class for HTTP-specific servlets
• Handling requests/responses:
  - doGet() for GET requests
  - doPost() for POST requests
  - Request parameters and form data
• Session Tracking:
  - Cookies: addCookie(), getCookies()
  - HttpSession: setAttribute(), getAttribute()
`,
      pdfUrl: "https://github.com/Krishnan028/webtech-guide-nexus/raw/main/Unit-3.pdf"
    },
    {
      id: 4,
      title: "JSP APPLICATION DEVELOPMENT",
      content: `JavaServer Pages (JSP) for dynamic content:
• JSP Basics:
  - File extension .jsp
  - Combines HTML with Java code
  - Translated into servlets by container
• Implicit Objects:
  - out: JspWriter for output
  - request: HttpServletRequest
  - response: HttpServletResponse
  - session: HttpSession
  - application: ServletContext
• Scripting Elements:
  - Declarations: <%! ... %>
  - Expressions: <%= ... %>
  - Scriptlets: <% ... %>
• Directives:
  - page: <%@ page ... %>
  - include: <%@ include ... %>
  - taglib: <%@ taglib ... %>
• Conditional Processing:
  - if-else statements
  - switch-case statements
  - Example: displaying student results based on marks
• Sharing Data:
  - Between JSP pages using session object
  - setAttribute() and getAttribute()
• Including Content:
  - include directive: <%@ include file="..." %>
  - include action: <jsp:include page="..." />
• Database Access:
  - JDBC from JSP
  - Connection, Statement, ResultSet
  - Displaying query results in tables
`,
      pdfUrl: "https://github.com/Krishnan028/webtech-guide-nexus/raw/main/Unit-4.pdf"
    },
    // Now split unit 5 and 6 as separate chapters:
    {
      id: 5,
      title: "STRUTS",
      content: `Struts framework for MVC web applications:
• MVC Architecture:
  - Model: Business logic (Java classes)
  - View: Presentation (JSP)
  - Controller: Mediates (Struts components)
• Struts Components:
  - ActionServlet: Front controller
  - RequestProcessor: Handles requests
  - Action: Business logic
  - ActionForm: Captures form data
  - ActionForward: Navigation
• Struts Configuration:
  - struts-config.xml: Central configuration
  - Action mappings
  - Form bean definitions
  - Global forwards
• Struts Request Lifecycle:
  1. Request received by ActionServlet
  2. RequestProcessor processes
  3. ActionForm populated
  4. Action executes
  5. ActionForward returns result
• Hello World Example:
  - HelloWorldForm extends ActionForm
  - HelloWorldAction extends Action
  - struts-config.xml mappings
  - JSP view with struts tags
• Form Validation:
  - Validateable interface
  - validate() method
  - Error handling
  - Workflow interceptor
• Struts Tags:
  - <html:form>, <html:text>
  - <html:submit>, <html:errors>
  - Logic and bean tags
`,
      pdfUrl: "https://github.com/Krishnan028/webtech-guide-nexus/raw/main/Unit-5.pdf"
    },
    {
      id: 6,
      title: "DATABASE ACCESS & AJAX",
      content: `Database connectivity and asynchronous JavaScript:
• JDBC Architecture:
  - Java Application
  - JDBC API
  - Driver Manager
  - JDBC Driver
  - Database
• JDBC Driver Types:
  1. JDBC-ODBC Bridge
  2. Native-API Driver
  3. Net-Protocol Driver
  4. Native-Protocol Driver
• Database Programming Steps:
  1. Load driver: Class.forName()
  2. Define connection URL
  3. Establish connection
  4. Create statement
  5. Execute query
  6. Process results
  7. Close connection
• javax.sql Package:
  - DataSource interface
  - Connection pooling
  - Distributed transactions
  - RowSets
• Database Operations:
  - Create tables
  - Insert data
  - Retrieve data
  - Update data
  - Example JSP pages with JDBC
• AJAX Basics:
  - Asynchronous JavaScript and XML
  - XMLHttpRequest object
  - Partial page updates
  - Enhanced user experience
`,
      pdfUrl: "https://github.com/Krishnan028/webtech-guide-nexus/raw/main/Unit-6.pdf"
    }
  ];

  return (
    <div
      className="relative min-h-screen pt-20 pb-12"
      style={{
        background: 'linear-gradient(135deg,#fdfcfb 0%,#e2d1c3 100%)',
        fontFamily: "'Sora', sans-serif"
      }}
    >
      {/* Decorative Images (background and accent) */}
      <img 
        src={bgImage1}
        alt=""
        className="fixed top-0 left-0 w-[350px] opacity-30 pointer-events-none select-none rounded-xl z-0 hidden md:block"
        style={{ filter: "blur(1px)", objectFit: "cover" }}
      />
      <img
        src={bgImage2}
        alt=""
        className="fixed bottom-0 right-0 w-[420px] opacity-40 pointer-events-none select-none rounded-xl z-0 hidden lg:block"
        style={{ filter: "blur(2px)", objectFit: "cover" }}
      />
      {/* Main Theory Section */}
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 drop-shadow-sm font-sora">
          Theory Notes
        </h1>
        <Tabs defaultValue="1" className="w-full">
          <TabsList className="flex flex-wrap gap-2 mb-4 bg-pastel-blue/80">
            {chapters.map((chapter) => (
              <TabsTrigger key={chapter.id} value={chapter.id.toString()} className="transition-colors font-medium">
                Chapter {chapter.id}
              </TabsTrigger>
            ))}
          </TabsList>
          {chapters.map((chapter) => (
            <TabsContent key={chapter.id} value={chapter.id.toString()}>
              <div className="relative overflow-hidden bg-white bg-opacity-75 rounded-xl shadow-md p-8 mb-6 border border-pastel-blue/30 hover:shadow-xl transition-shadow">
                {/* Small accent image for style */}
                <img
                  src={accentImg}
                  alt=""
                  className="absolute top-4 right-4 w-24 h-24 object-cover rounded-full opacity-10 pointer-events-none"
                />
                <h2 className="text-2xl font-semibold text-primary mb-4 font-sora">{chapter.title}</h2>
                <p className="text-gray-600 whitespace-pre-line mb-6 font-sora">{chapter.content}</p>
                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">PDF Version</h3>
                  <div className="border rounded-lg overflow-hidden bg-white">
                    <iframe
                      src={chapter.pdfUrl}
                      title={`PDF for ${chapter.title}`}
                      width="100%"
                      height="420"
                      className="mx-auto rounded-lg border"
                      style={{ background: "#faf9fa" }}
                    />
                  </div>
                  <div className="mt-2">
                    <a
                      href={chapter.pdfUrl}
                      download
                      className="text-blue-600 font-medium hover:underline flex items-center"
                    >
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Theory;
