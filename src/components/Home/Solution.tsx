import { motion } from 'framer-motion';

const solutionCards = [
  {
    title: 'Strategic Collaboration & Technical Leadership',
    description: 'I collaborate directly with your engineering leaders to architect resilient systems that align with your business objectives. Get executive-level insight and action, without the commitment of a full-time hire.'
  },
  {
    title: 'In-Depth System Diagnostics',
    description: 'I apply hands-on investigation across application, infrastructure, and integration layers to identify hidden failure modes, performance bottlenecks, and architectural flaws that evade surface-level audits.'
  },
  {
    title: 'Permanent Remediation of Root Issues',
    description: 'I build and implement the solutions, whether that\'s rewriting brittle logic or eliminating deep-rooted tech debt, I ensure the issues I solve today don\'t reappear tomorrow'
  },
  {
    title: 'Security, Compliance & Platform Stability',
    description: 'From Salesforce to AI workflows, I secure your critical systems without sacrificing agility. Pass audits confidently, scale reliably, and sleep better at night.'
  }
];

export default function SolutionOverview() {
  return (
    <section className="w-full py-20 bg-[#141414] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hi, I'm John Sessford. I'm helping organizations navigate technical complexities with clarity and proven outcomes.
          </h2>          
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2A2A2A]/40 to-[#1F1F1F]/20
                border border-gray-700 rounded-xl p-6 shadow-lg
                hover:border-indigo-500 transition-all duration-300 flex flex-col"
              style={{ minHeight: '340px' }}
            >
              <h3 className="text-lg font-bold text-white mb-3 text-center">{card.title}</h3>
              <p className="text-gray-300 text-sm flex-grow">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
