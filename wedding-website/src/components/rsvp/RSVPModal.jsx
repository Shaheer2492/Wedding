import { useEffect, useState } from 'react';
import RSVPForm from './RSVPForm';
import { guestList } from '../../data/guestList';

const SealIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3 L14 10 L21 12 L14 14 L12 21 L10 14 L3 12 L10 10 Z" />
  </svg>
);

const RSVPModal = ({ isOpen, onClose, eventName }) => {
  const [step, setStep] = useState('side'); // 'side' | 'search' | 'confirm' | 'success'
  const [side, setSide] = useState(null); // 'groom' | 'bride'
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

  const handleClose = () => onClose();

  // Reset to the first step each time the modal opens; lock body scroll while open.
  useEffect(() => {
    if (isOpen) {
      resetState();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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
    const results = [];

    guestList.forEach((group) => {
      if (group.side !== side) return;
      group.members.forEach((member) => {
        if (member.name.toLowerCase().includes(lowerQuery)) {
          results.push({ member, group });
        }
      });
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
    }, 3500);
  };

  const handleBack = () => {
    if (step === 'search') setStep('side');
    if (step === 'confirm') setStep('search');
  };

  return (
    <div
      className={`modal-overlay${isOpen ? ' show' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="modal rsvp" role="dialog" aria-modal="true" aria-label="RSVP">
        <button className="modal-x" onClick={handleClose} aria-label="Close">
          ×
        </button>
        {step !== 'side' && step !== 'success' && (
          <button className="rsvp-back" onClick={handleBack}>
            ← Back
          </button>
        )}

        {step !== 'success' && (
          <div className="rsvp-head">
            <SealIcon className="ico-seal" />
            <h3>RSVP</h3>
            <span className="rsvp-eyebrow">{eventName}</span>
          </div>
        )}

        {step === 'side' && (
          <>
            <p className="rsvp-lead">Please select whose guest you are:</p>
            <div className="side-grid">
              <button className="side-btn" onClick={() => handleSideSelect('groom')}>
                Groom's Side
              </button>
              <button className="side-btn" onClick={() => handleSideSelect('bride')}>
                Bride's Side
              </button>
            </div>
          </>
        )}

        {step === 'search' && (
          <>
            <p className="rsvp-lead">Search for your name to find your invitation.</p>
            <div className="rsvp-field">
              <input
                type="text"
                className="rsvp-input"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Enter your name…"
                aria-label="Search for your name"
                autoFocus
              />
            </div>
            <div className="rsvp-results">
              {searchQuery.length > 1 && searchResults.length === 0 && (
                <p className="rsvp-empty">No guests found with that name.</p>
              )}
              {searchResults.map((result) => (
                <button
                  key={`${result.group.id}-${result.member.id}`}
                  className="rsvp-result"
                  onClick={() => handleGroupSelect(result.group)}
                >
                  <div className="nm">{result.member.name}</div>
                  {result.group.members.length > 1 && (
                    <div className="grp">Family group · {result.group.members.length} members</div>
                  )}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 'confirm' && selectedGroup && (
          <RSVPForm
            key={selectedGroup.id}
            eventName={eventName}
            group={selectedGroup}
            onSuccess={handleSuccess}
          />
        )}

        {step === 'success' && (
          <div className="rsvp-success">
            <SealIcon className="seal" />
            <h3>Thank you</h3>
            <p>Your RSVP has been received.</p>
            <p>We can't wait to celebrate with you, inshaAllah.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RSVPModal;
