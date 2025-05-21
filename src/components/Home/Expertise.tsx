import { ShieldCheck, Code2, Brain } from "lucide-react";
import Card from "../Shared/Card";

const areas = [
  { title: "Salesforce Optimization", desc: "Untangle complexity, solve scale-related problems, and ensure robust integrations with your Salesforce ecosystem.", Icon: Code2 },
  { title: "Security & Standards", desc: "Embed practical, scalable security practices and compliance measures to protect your business proactively.", Icon: ShieldCheck },
  { title: "AI & Agentic Systems", desc: "Turn fragile AI pipelines into reliable, observable, and secure workflows that align with your strategic goals.", Icon: Brain }
];

const Expertise = () => (  
  <section className="bg-gradient-to-b from-[#0d0d0d] to-[#111] py-20 px-6">
     <div className="max-w-4xl mx-auto">
    <h2 className="text-center text-4xl font-bold mb-12 text-white">My Expertise</h2>
    <div className="grid md:grid-cols-3 gap-10">
      {areas.map((area, i) => (
        <Card key={i} title={area.title} desc={area.desc} Icon={area.Icon} />
      ))}
    </div>
    </div>
  </section>
);

export default Expertise;
