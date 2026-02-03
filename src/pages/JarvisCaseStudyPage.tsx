import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function JarvisCaseStudyPage() {
  useEffect(() => {
    document.title = 'JarvisGPT at Foresight - Case Study - Ikailo';
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <header className="border-b border-white/10 bg-[#050505]/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Link to="/" className="inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-100">
              <span aria-hidden="true">←</span>
              <span>Back to home</span>
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-200">JarvisGPT case study</span>
          </div>
          <a
            href="https://www.linkedin.com/in/john-sessford"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center text-indigo-300 hover:text-indigo-100"
          >
            Connect on LinkedIn
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-16 pt-10 space-y-12">
        <section className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">Case study</p>
          <h1 className="text-2xl md:text-3xl font-semibold">JarvisGPT at Foresight</h1>
          <p className="text-gray-300">
            From prototype chatbot to a unified, production-grade RAG assistant that analysts and auditors can trust.
          </p>
        </section>

        <section className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
          <h2 className="text-xl md:text-2xl font-semibold">Client & context</h2>
          <p>
            Foresight provides structured analysis on companies, campaigns, groups, sectors, and regions. Analysts were
            spending hours manually searching across proprietary reports, Azure search indexes, and curated web content to
            build profiles and briefings under strict compliance and sourcing rules.
          </p>
          <p>
            They engaged the Ikailo Inc. consulting team, led by me, to design and build JarvisGPT from scratch, then
            continue evolving it. In a later phase I led the work to take our early multi-subgraph prototype to a unified,
            production-grade analyst assistant embedded in the Foresight portal, with clear guardrails around tenant
            isolation, authentication, observability, and eventual client-facing use.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 text-sm md:text-base text-gray-200">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Business problem</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Fragmented subgraphs and agents with overlapping responsibilities.</li>
              <li>Unreliable retrieval and grouping across search indexes and curated web content.</li>
              <li>Limited observability into how a query flowed through routing, retrieval, and composition.</li>
              <li>Unclear auth and tenant boundaries between chatbot, portal, and MCP server.</li>
              <li>A need for guardrails before exposing JarvisGPT to external clients.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">High-level goals</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Give analysts a single conversational interface for research and profiling.</li>
              <li>Enforce consistent AP-style formatting and sourcing rules.</li>
              <li>Align JarvisGPT with Foresight&apos;s existing identity and compliance posture.</li>
              <li>Make performance, cost, and quality measurable and tunable.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
          <h2 className="text-xl md:text-2xl font-semibold">Solution overview</h2>
          <p>
            After we proved out the initial architecture, I led the design and implementation of the unified RAG
            workflow for JarvisGPT, replacing the early multi-graph design with a single explicit graph, coupled with an
            MCP-aware backend and a BFF-aligned authentication model. The solution combined a unified workflow state and a
            secure integration layer for tools and search.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Unified 10-node RAG pipeline</h3>
              <p>
                Replaced multiple overlapping subgraphs with a single, explicit pipeline handling query preparation,
                routing, retrieval planning, parallel tool execution, evidence processing, and AP-style formatting. All
                nodes share a unified workflow state, making the system easier to reason about and test.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Unified workflow state</h3>
              <p>
                Introduced a typed <span className="font-mono">UnifiedWorkflowState</span> model capturing query, routing
                decisions, entities, retrieval plans, evidence, outputs, metrics, and identity. This contract is shared
                across nodes and tools, and adapters keep it compatible with existing application code.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">MCP-aware integration layer</h3>
              <p>
                JarvisGPT connects to a dedicated <span className="font-mono">jarvis-mcp</span> server over SSE, using
                standardized MCP tools for company, group, and campaign lookup, dimension aggregation, and search. Each
                request mints a short-lived MCP JWT so tools always run with clear user and tenant context.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">BFF-centric auth & governance</h3>
              <p>
                The Foresight portal remains the single entry point for authentication (Azure B2C / Entra). JarvisGPT
                treats the portal/BFF as the source of truth for identity and issues bounded-lifetime JWTs for internal
                calls, keeping external identity tokens out of downstream services and simplifying audits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Caching, metrics, and observability</h3>
              <p>
                Implemented Redis-backed caching for tool registry, routing decisions, and web results, plus an
                instrumented graph that records node timings, token usage, tool calls, evidence quality, retries, and
                cache hit rates. This makes performance and cost visible and tunable over time.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
          <h2 className="text-xl md:text-2xl font-semibold">Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Latency & reliability</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Routing reduced from roughly four serial LLM calls to a single router call.</li>
                <li>Parallel retrieval across tools cut latency for multi-source queries.</li>
                <li>High-confidence direct answers can bypass retrieval entirely for simple factual questions.</li>
                <li>ID-based filtering significantly reduced false positives in Azure search results.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Governance, quality & cost</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Evidence processing and AP-style formatting improved consistency and trust in analyst outputs.
                </li>
                <li>
                  BFF-centric auth and MCP JWTs clarified tenant boundaries and auditability for internal and client use.
                </li>
                <li>
                  Per-node metrics and cost estimators made it clear which parts of the workflow drive spend and latency.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
          <h2 className="text-xl md:text-2xl font-semibold">My role</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Led the Ikailo Inc. consulting team that co-designed and implemented the initial JarvisGPT architecture,
              then led the architecture and implementation of the unified RAG workflow.
            </li>
            <li>Designed the <span className="font-mono">UnifiedWorkflowState</span> contract and coordinated its adoption.</li>
            <li>
              Implemented or guided key nodes including query preparation, tool registry, resolver, evidence processing,
              composition, formatting, and instrumentation.
            </li>
            <li>
              Designed the BFF-centric auth and MCP JWT model, and authored the integration guide for the
              <span className="font-mono">jarvis-mcp</span> server.
            </li>
            <li>
              Established patterns for metrics, caching, and feature-flagged rollout to support safe, incremental
              deployment.
            </li>
          </ul>
        </section>

        <section className="pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <div>
            <p className="font-medium text-white">Want a similar system for your org?</p>
            <p className="text-gray-400">I design and ship production RAG assistants over real enterprise data.</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-indigo-500 text-indigo-200 hover:bg-indigo-500/10 transition-colors"
            >
              Back to home
            </Link>
            <a
              href="https://www.linkedin.com/in/john-sessford"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default JarvisCaseStudyPage;
