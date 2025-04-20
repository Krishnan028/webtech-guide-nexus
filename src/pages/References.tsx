
const References = () => {
  const references = [
    { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { name: "W3Schools", url: "https://www.w3schools.com" },
    { name: "CSS-Tricks", url: "https://css-tricks.com" },
    { name: "JavaScript.info", url: "https://javascript.info" },
    { name: "Web.dev", url: "https://web.dev" },
    { name: "HTML5 Rocks", url: "https://www.html5rocks.com" },
    { name: "Can I Use", url: "https://caniuse.com" },
    { name: "DevDocs", url: "https://devdocs.io" },
    { name: "Smashing Magazine", url: "https://www.smashingmagazine.com" },
    { name: "A List Apart", url: "https://alistapart.com" },
    { name: "Web Platform", url: "https://webplatform.github.io" },
    { name: "HTML Living Standard", url: "https://html.spec.whatwg.org" },
    { name: "WebAIM", url: "https://webaim.org" },
    { name: "Google Web Fundamentals", url: "https://developers.google.com/web" },
    { name: "HTTP Status Codes", url: "https://httpstatuses.com" },
    { name: "RegExr", url: "https://regexr.com" },
    { name: "Node.js Docs", url: "https://nodejs.org/docs" },
    { name: "React Documentation", url: "https://reactjs.org" },
    { name: "TypeScript Documentation", url: "https://www.typescriptlang.org/docs" },
    { name: "Web Security Academy", url: "https://portswigger.net/web-security" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">References</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <a
              key={index}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{ref.name}</h3>
              <p className="text-gray-600 text-sm truncate">{ref.url}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
