const items = [
  {
    title: "Systems & Orchestration",
    body: "Design and implement agent workflows that coordinate tools, memory, and human input so teams can work at the speed of thought.",
  },
  {
    title: "MCP Integration & Tools",
    body: "Build and harden MCP tools that expose real systems to LLMs in a controlled, observable way.",
  },
  {
    title: "Retrieval / RAG & Evaluation",
    body: "Design retrieval strategies, guardrails, and evaluation loops so agents answer with grounded, auditable information.",
  },
  {
    title: "Enterprise Integration & Reliability",
    body: "Integrate agents with existing identity, logging, and incident processes so they behave like first-class production services.",
  },
];

const WhatIBuild = () => (
  <section id="whatibuild" className="pt-12 md:pt-16 pb-8 md:pb-10 bg-[#0A0A0A] px-6 md:px-12">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="border border-gray-800 rounded-xl p-5 bg-[#121212] hover:border-indigo-500 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIBuild;
