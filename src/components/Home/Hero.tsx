const Hero = () => (
  <section className="py-10 md:py-16 text-center px-6 md:px-12">
    <div className="max-w-5xl mx-auto">
      <img
        src="/images/john-sessford.jpg"
        alt="John Sessford"
        className="mx-auto mb-6 rounded-full w-40 h-40 object-cover border-4 border-indigo-600"
      />

      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300 mb-2">
        John Sessford · Ikailo Inc.
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-3 max-w-5xl mx-auto">
        AI Architect & MCP Specialist
      </h1>

      <p className="text-lg text-gray-300 mb-8">
        I help teams build agentic AI systems grounded in their own data, with secure workflows that
        ship and scale. 
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <a
          href="/John_Sessford_Resume_2026_AI_Architect.pdf"
          className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-indigo-700/50 transform hover:scale-105 transition duration-200"
        >
          Download Resume
        </a>

{ /*       <a
          href="#jarvisgpt"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-indigo-400 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/10 transition-colors"
        >
          JarvisGPT Case Study
        </a> */}
      </div>

      <div className="mt-6">
        <a
          href="https://www.linkedin.com/in/john-sessford"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-400 hover:text-indigo-300 underline"
        >
          Connect on LinkedIn
        </a>
      </div>
      <p className="mt-6 text-sm max-w-2xl mx-auto">
        Available for senior architect, staff/principal IC, or advisory roles focused on real-world AI systems.
      </p>
    </div>
  </section>
);

export default Hero;
