const AgienceProject = () => (
  <section className="py-12 md:py-16 bg-[#0A0A0A] px-6 md:px-12">
    <div className="max-w-5xl mx-auto">
      <div className="border border-gray-800 rounded-xl p-6 bg-[#111111]">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">Selected Project: Agience</h3>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
          Agience is platform for human-in-the-loop AI Agent collaboration.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mb-4">
          <li>Workspaces enable information-first agentic composition using MCP-sourced skills and abilities.</li>
          <li>Collections enable curated grouping and semantic permission boundaries for information assets.</li>
          <li>Built‑in MCP services provide multi-surface connections for AI enabled workspaces and collections.</li>
          <li>Human‑in‑the‑loop curation produces governed outputs with clear ownership and semantic provenance.</li>
        </ul>
        <a
          href="https://agience.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-gray-600 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition-colors"
        >
          View Agience →
        </a>
      </div>
    </div>
  </section>
);
export default AgienceProject;
