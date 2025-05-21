import { Calendar } from "lucide-react";

const Hero = () => (
  <section className="py-8 text-center px-6 md:px-12">
    <div className="max-w-4xl mx-auto">
      <img
        src="/images/john-sessford.jpg"
        alt="John Sessford"
        className="mx-auto mb-6 rounded-full w-40 h-40 object-cover border-4 border-indigo-600"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Collaborate. Debug. Resolve. Secure.
      </h1>
      <p className="text-lg text-gray-400 mb-6">
        Embedded technical expertise to create resilient systems, eliminate critical risks, and protect what matters.
      </p>


      <a
        href="https://calendly.com/john-sessford/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-indigo-700/50 transform hover:scale-105 transition duration-200"
      >
        <Calendar className="w-5 h-5" />
        Book a Discovery Call
      </a>

      {/* 🔗 LinkedIn Link */}
      <div className="mt-4">
        <a
          href="https://www.linkedin.com/in/john-sessford"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-400 hover:text-indigo-300 underline"
        >
          Or connect with me on LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
