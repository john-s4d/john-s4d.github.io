import { Calendar } from "lucide-react";

const FinalCTA = () => (
  <section className="text-center py-16 bg-[#141414] px-6">
    <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Ready for clarity and lasting solutions?</h2>
    <p className="text-lg text-gray-400 mb-6">Schedule a call and let's tackle your toughest challenges head-on.</p>
    <a
      href="https://calendly.com/john-sessford/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-indigo-700/50 transform hover:scale-105 transition duration-200"
    >
      <Calendar className="w-5 h-5" />
      Book a Discovery Call
    </a>
    </div>
  </section>
);

export default FinalCTA;