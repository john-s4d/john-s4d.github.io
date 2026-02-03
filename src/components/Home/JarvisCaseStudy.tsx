const JarvisCaseStudy = () => (
  <section id="jarvisgpt" className="pt-8 md:pt-10 pb-12 md:pb-16 bg-[#0A0A0A] px-6 md:px-12">
    <div className="max-w-5xl mx-auto">
      <div className="border border-gray-800 rounded-xl p-6 bg-[#111111]">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">Case Study: JarvisGPT</h3>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
          JarvisGPT is a production-grade, RAG-based analyst assistant.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mb-4">
          <li>
            Problem: Analysts were stitching together research from multiple systems, with no single conversational
            interface.
          </li>
          <li>Approach: Designed a 10-node RAG workflow with an MCP-aware backend.</li>
          <li>
            Outcomes: Faster routing and retrieval via a single explicit graph, plus more consistent AP-style answers
            analysts can trust.
          </li>
        </ul>
        <a
          href="/jarvisgpt"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-gray-600 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition-colors"
        >
          View JarvisGPT Case Study →
        </a>
      </div>
    </div>
  </section>
);

export default JarvisCaseStudy;
