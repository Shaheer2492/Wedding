import { createContext, useContext, useState } from 'react';
import RSVPModal from '../components/rsvp/RSVPModal';

const RSVPContext = createContext();

export const RSVPProvider = ({ children }) => {
  const [showRSVP, setShowRSVP] = useState(false);

  return (
    <RSVPContext.Provider value={{ showRSVP, setShowRSVP }}>
      {children}
      <RSVPModal
        isOpen={showRSVP}
        onClose={() => setShowRSVP(false)}
        eventName="Engagement"
      />
    </RSVPContext.Provider>
  );
};

export const useRSVP = () => useContext(RSVPContext);
