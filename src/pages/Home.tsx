import Hero from '../components/Home/Hero';
import Logos from '../components/Home/Logos';
import Problem from '../components/Home/Problem';
import Solution from '../components/Home/Solution';
import BeforeAfter from '../components/Home/BeforeAfter';
import CustomerProfile from '../components/Home/CustomerProfile';
import Process from '../components/Home/Process';
import Expertise from '../components/Home/Expertise';
import Testimonials from '../components/Home/Testimonials';
import FinalCTA from '../components/Home/FinalCTA';

function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white font-sans">
      <Hero />
      <Logos />
      <Problem />
      <Solution />
      <BeforeAfter />
      <CustomerProfile />
      <Process />
      <Expertise />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}

export default Home;
