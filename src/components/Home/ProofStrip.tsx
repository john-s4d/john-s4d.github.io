const ProofStrip = () => (
  <section className="border-t border-b border-gray-800 bg-[#0F0F0F]">
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-gray-800 md:divide-y-0 md:divide-x text-sm md:text-base">
        <div className="py-3 md:py-0 md:pr-8 text-center">
          <div className="font-semibold text-white">12+ years at Salesforce</div>
          <div className="text-gray-300">Signature Support · Critical Accounts</div>
        </div>

        <div className="py-3 md:py-0 md:px-8 text-center">
          <div className="font-semibold text-white">15 Salesforce certifications</div>
          <div className="text-gray-300">System &amp; Application Architect</div>
        </div>

        <div className="py-3 md:py-0 md:pl-8 text-center">
          <div className="font-semibold text-white">Enterprise Delivery</div>
          <div className="text-gray-300">Identity · Telemetry · Scale</div>
        </div>
      </div>
    </div>
  </section>
);

export default ProofStrip;
