import Hero from '../components/home/Hero';
import Countdown from '../components/home/Countdown';
import FloatingRSVP from '../components/ui/FloatingRSVP';
import invitationImg from '../assets/invitation.jpeg';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Invitation Section */}
      <section className="py-16 px-4 bg-white flex justify-center">
        <div className="max-w-4xl w-full">
          <img
            src={invitationImg}
            alt="Wedding Invitation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <Countdown />

      {/* Floating RSVP Button (appears on scroll) */}
      <FloatingRSVP />
    </div>
  );
};

export default Home;
