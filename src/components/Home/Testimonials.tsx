const testimonials = [
  { name: "VP Engineering, SaaS", quote: "John came in, diagnosed the issue in days, and saved our launch." },
  { name: "CTO, Fintech", quote: "He’s the only person I’ve seen explain an outage root cause and get everyone nodding—legal, dev, execs." }
];

const Testimonials = () => (
  <section className="py-16 px-6 text-center bg-[#0F0F0F]">
    <h2 className="text-3xl font-bold mb-8">What Leaders Say</h2>
    <div className="space-y-8 max-w-3xl mx-auto">
      {testimonials.map((t, i) => (
        <div key={i}>
          <blockquote className="italic text-xl text-white">“{t.quote}”</blockquote>
          <p className="mt-2 text-sm text-gray-400">– {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Testimonials;