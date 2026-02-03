const testimonials = [
  { name: "Senior Director", quote: "I want to specifically call out John Sessford, who truly went the extra mile to ultimately identify root cause. Great work everyone!" },
  { name: "Customer Success Manager", quote: "Your technical expertise in digging through the logs and surfacing the exact root cause not only helped R&D fix such complex known issue in such a short time (less than 24 hours) but also prevented future occurrences for other customers." }
];

const Testimonials = () => (
  <section className="py-16 px-6 md:px-12 text-center bg-[#0F0F0F]">
    <h2 className="text-3xl font-bold mb-8">What Leaders Say</h2>
    <div className="space-y-8 max-w-5xl mx-auto">
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