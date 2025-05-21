import { Eye, Wrench, Rocket } from "lucide-react";
import Card from "../Shared/Card";

const services = [
  {
    title: "Embed & Discover",
    desc: "I join your team to surface the root issues. Fragile systems, hidden risks, and architectural gaps. Think of it as an internal audit, but actually useful.",
    Icon: Eye
  },
  {
    title: "Stabilize & Solve",
    desc: "We work together to design and deliver lasting solutions. Technically sound, audit-ready, and resilient under pressure.",
    Icon: Wrench
  },
  {
    title: "Scale & Institutionalize",
    desc: "I help your team build muscle. Embedding the solutions into process, ownership, and systems that scale with confidence.",
    Icon: Rocket
  }
];

const HowIHelp = () => (
  <section className="bg-gradient-to-b from-[#141414] via-[#1c1c1c] to-[#191919] py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center text-4xl font-bold mb-12 text-white">How I Help</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <Card key={i} title={s.title} desc={s.desc} Icon={s.Icon} />
        ))}
      </div>
    </div>
  </section>
);

export default HowIHelp;
