import Hero from '../components/Home/Hero';
import ProofStrip from '../components/Home/ProofStrip';
import WhatIBuild from '../components/Home/WhatIBuild';
//import JarvisCaseStudy from '../components/Home/JarvisCaseStudy';
import AgienceProject from '../components/Home/AgienceProject';
import Credibility from '../components/Home/Credibility';
import FinalCTA from '../components/Home/FinalCTA';

function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white font-sans">
      <Hero />
      <ProofStrip />
      <WhatIBuild />
      { /* <JarvisCaseStudy /> */}
      <Credibility />
      <AgienceProject />      
      <FinalCTA />
    </div>
  );
}

export default Home;
