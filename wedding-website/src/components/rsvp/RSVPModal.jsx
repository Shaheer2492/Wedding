import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RSVPForm from './RSVPForm';
import FloralDecoration from '../ui/FloralDecoration';
import { guestList } from '../../data/guestList';

const RSVPModal = ({ isOpen, onClose, eventName }) => {
  const [step, setStep] = useState('side'); // 'side', 'search', 'confirm', 'success'
  const [side, setSide] = useState(null); // 'groom' or 'bride'
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const resetState = () => {
    setStep('side');
    setSide(null);
    setSearchQuery('');
    setSearchResults([]);
    setSelectedGroup(null);
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleSideSelect = (selectedSide) => {
    setSide(selectedSide);
    setStep('search');
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = guestList.filter((group) => {
      if (group.side !== side) return false;
      return group.members.some((member) =>
        member.name.toLowerCase().includes(lowerQuery)
      );
    });
    setSearchResults(results);
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setStep('confirm');
  };

  const handleSuccess = () => {
    setStep('success');
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleBack = () => {
    if (step === 'search') setStep('side');
    if (step === 'confirm') setStep('search');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Floral Decorations */}
          <FloralDecoration position="top-left" className="opacity-20 scale-75" />
          <FloralDecoration position="top-right" className="opacity-20 scale-75" />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Back Button (for steps > 'side' and not success) */}
          {step !== 'side' && step !== 'success' && (
            <button
              onClick={handleBack}
              className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all text-sm font-sans text-gray-600 flex items-center gap-1"
            >
              ← Back
            </button>
          )}

          {/* Content */}
          <div className="p-4 md:p-12 min-h-[400px]">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-script text-deepRose mb-2">
                RSVP
              </h2>
              <div className="flex items-center justify-center mt-4 space-x-4">
                <div className="w-16 h-px bg-blush-300"></div>
                <span className="text-sm text-gray-500 font-sans">{eventName}</span>
                <div className="w-16 h-px bg-blush-300"></div>
              </div>
            </div>

            {/* Step 1: Side Selection */}
            {step === 'side' && (
              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                <p className="text-center text-gray-600 font-sans mb-4">
                  Please select which side you are a guest of:
                </p>
                <button
                  onClick={() => handleSideSelect('groom')}
                  className="w-full py-4 px-6 bg-white border-2 border-deepRose text-deepRose rounded-xl font-serif text-xl hover:bg-deepRose hover:text-white transition-all shadow-sm hover:shadow-md"
                >
                  Groom's Side
                </button>
                <button
                  onClick={() => handleSideSelect('bride')}
                  className="w-full py-4 px-6 bg-white border-2 border-deepRose text-deepRose rounded-xl font-serif text-xl hover:bg-deepRose hover:text-white transition-all shadow-sm hover:shadow-md"
                >
                  Bride's Side
                </button>
              </div>
            )}

            {/* Step 2: Search */}
            {step === 'search' && (
              <div className="max-w-md mx-auto">
                <p className="text-center text-gray-600 font-sans mb-4">
                  Please search for your name to find your invitation:
                </p>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Enter your name..."
                  className="w-full px-4 py-3 rounded-lg border border-blush-200 focus:outline-none focus:ring-2 focus:ring-deepRose transition-all mb-4 font-sans"
                  autoFocus
                />

                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {searchQuery.length > 1 && searchResults.length === 0 && (
                    <p className="text-center text-gray-400 font-sans text-sm">No guests found with that name.</p>
                  )}
                  {searchResults.map((group) => (
                    <div
                      key={group.id}
                      onClick={() => handleGroupSelect(group)}
                      className="p-4 rounded-lg border border-gray-100 hover:border-deepRose/30 hover:bg-blush-50 cursor-pointer transition-all"
                    >
                      <p className="font-serif text-lg text-gray-800">
                        {group.members.map(m => m.name).join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Confirmation Form */}
            {step === 'confirm' && selectedGroup && (
              <RSVPForm
                eventName={eventName}
                group={selectedGroup}
                onSuccess={handleSuccess}
              />
            )}

            {/* Step 4: Success Message */}
            {step === 'success' && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-deepRose to-blush-300 rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </motion.div>
                <h3 className="text-3xl font-script text-deepRose mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600 font-sans mb-2">
                  Your RSVP has been received successfully.
                </p>
                <p className="text-gray-500 font-sans text-sm">
                  We can't wait to celebrate with you!
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RSVPModal;
