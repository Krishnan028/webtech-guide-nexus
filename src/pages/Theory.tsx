import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
`
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
`
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
`
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
`
    },
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
`
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
`
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