const personas = [
  {
    title: "CTO: Scaling SaaS",
    desc: "The product's growth is outpacing your infrastructure. You want stability and predictability before Series C hits.",
    align: "left"
  },
  {
    title: "CISO: Post-Audit",
    desc: "You've cleared the audit but not your worries. You need safe, compliant systems that won't trigger future crises.",
    align: "right"
  },
  {
    title: "VP Eng: AI Startup",
    desc: "Shipped v1 with OpenAI and ingenuity. Now you need an expert check before launch or your next funding round.",
    align: "left"
  }
];

const CustomerProfile = () => (
  <section className="bg-[#0e0e0e] py-20 px-6">
    <h2 className="text-4xl font-bold text-center text-white mb-16">Who I Help</h2>
    <div className="space-y-24 max-w-5xl mx-auto">
      {personas.map((p, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row ${
            p.align === "right" ? "md:flex-row-reverse" : ""
          } items-center gap-10`}
        >
          {/* Title block */}
          <div className={`md:w-1/2 ${p.align === "right" ? "text-right" : "text-left"}`}>
            <h3 className="text-2xl text-white font-semibold mb-2">{p.title}</h3>
          </div>

          {/* Description block */}
          <div className={`md:w-1/2 ${p.align === "right" ? "text-right" : "text-left"}`}>
            <div className="bg-[#1a1a1a] rounded-xl p-6 w-full text-gray-400">
              <p>{p.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CustomerProfile;
