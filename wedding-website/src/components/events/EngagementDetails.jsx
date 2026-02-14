import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import RSVPModal from '../rsvp/RSVPModal';

const EngagementDetails = () => {
  const [showRSVP, setShowRSVP] = useState(false);

  const timeline = [
    { time: '5:00 PM', event: 'Guest Arrival & Welcome' },
    { time: '5:30 PM', event: 'Ring Ceremony' },
    { time: '6:30 PM', event: 'Dinner Service' },
    { time: '8:00 PM', event: 'Cake Cutting & Celebration' },
    { time: '9:00 PM', event: 'Music & Dancing' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Event Information Card */}
        <Card>
          <div className="space-y-6">
            {/* Title */}
            <div className="text-center pb-4 border-b border-blush-200">
              <h2 className="text-4xl font-script text-deepRose mb-2">
                Engagement Celebration
              </h2>
              <p className="text-gray-600 font-sans text-sm">
                June 14, 2026 | Sunday
              </p>
            </div>

            {/* Date & Time */}
            <div className="flex items-start space-x-4">
              <div className="text-3xl">📅</div>
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-1">
                  Date & Time
                </h3>
                <p className="text-gray-600 font-sans">
                  Sunday, June 14, 2026
                </p>
                <p className="text-gray-600 font-sans">
                  5:00 PM - 10:00 PM
                </p>
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-start space-x-4">
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-1">
                  Venue
                </h3>
                <p className="text-gray-700 font-sans font-medium">
                  The Hilton Garden Inn Del Mar
                </p>
                <p className="text-gray-600 font-sans text-sm">
                  3939 Ocean Bluff Avenue
                </p>
                <p className="text-gray-600 font-sans text-sm">
                  San Diego, CA 92130
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=The+Hilton+Garden+Inn+Del+Mar+3939+Ocean+Bluff+Avenue+San+Diego+CA+92130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-deepRose hover:text-blush-300 font-sans text-sm underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            {/* Dress Code */}
            <div className="flex items-start space-x-4">
              <div className="text-3xl">👔</div>
              <div>
                <h3 className="font-serif text-xl text-gray-800 mb-1">
                  Dress Code
                </h3>
                <p className="text-gray-700 font-sans font-medium">
                  Formal
                </p>
                <p className="text-gray-600 font-sans text-sm">
                  Traditional
                </p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-babyBlue"></div>
                  <div className="w-6 h-6 rounded-full bg-pastelYellow"></div>
                  <div className="w-6 h-6 rounded-full bg-sage-200"></div>
                  <span className="text-xs text-gray-500 ml-2">Color Palette</span>
                </div>
              </div>
            </div>

            {/* RSVP Button */}
            <div className="pt-4">
              <Button
                onClick={() => setShowRSVP(true)}
                className="w-full"
              >
                RSVP Now
              </Button>
              <p className="text-center text-sm text-gray-500 mt-2 font-sans">
                Please respond by March 1, 2026
              </p>
            </div>
          </div>
        </Card>

        {/* Timeline Card */}
        <Card>
          <div className="space-y-6">
            <div className="text-center pb-4 border-b border-blush-200">
              <h2 className="text-3xl font-script text-deepRose">
                Event Timeline
              </h2>
            </div>

            {/* Timeline Items */}
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blush-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-deepRose text-white rounded-full w-20 h-20 flex items-center justify-center font-sans text-sm font-medium shadow-md">
                      {item.time.split(' ')[0]}
                      <span className="text-xs ml-1">{item.time.split(' ')[1]}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="font-sans text-gray-800 font-medium">
                      {item.event}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-sage-100 rounded-lg">
              <h4 className="font-serif text-lg text-gray-800 mb-2">
                Important Notes
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 font-sans">
                <li>✓ Free Parking available at the venue</li>
                <li>✓ Optional dress code encouraged!</li>
                <li>✓ Photography encouraged and welcomed</li>
                <li>✓ Invite Only Event</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Google Maps Embed */}
      <Card className="mt-8">
        <h3 className="text-2xl font-script text-deepRose mb-4 text-center">
          Find Us Here
        </h3>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <iframe
            title="Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.283350708068!2d-117.22880759999998!3d32.9171112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0651c8c9f3ad%3A0xc58b18585e4889d!2s3939%20Ocean%20Bluff%20Ave%2C%20San%20Diego%2C%20CA%2092130!5e0!3m2!1sen!2sus!4v1771018097441!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Card>

      {/* RSVP Modal */}
      <RSVPModal
        isOpen={showRSVP}
        onClose={() => setShowRSVP(false)}
        eventName="Engagement"
      />
    </>
  );
};

export default EngagementDetails;
