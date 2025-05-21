const BeforeAfter = () => (
  <section className="py-12 px-6 text-center">
     <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-red-400">Before</h3>
        <ul className="space-y-2">
          <li>The system works, until it doesn't.</li>
          <li>Incidents keep resurfacing.</li>
          <li>The team is overloaded and working blind.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-green-400">After</h3>
        <ul className="space-y-2">
          <li>Root causes diagnosed and resolved.</li>
          <li>Reliable system performance under stress.</li>
          <li>Your team empowered, clear, and confident.</li>
        </ul>
      </div>
    </div>
    </div>
  </section>
);
export default BeforeAfter;