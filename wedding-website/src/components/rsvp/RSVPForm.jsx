import { useState } from 'react';
import { submitRSVP } from '../../services/googleSheets';

const RSVPForm = ({ eventName, group, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // State for member attendance
  const [attendance, setAttendance] = useState(
    group.members.reduce((acc, member) => ({ ...acc, [member.id]: true }), {})
  );

  // State for plus ones
  const [plusOnes, setPlusOnes] = useState(
    Array(group.maxPlusOnes || 0).fill({ name: '', isAttending: false })
  );

  const handleAttendanceChange = (memberId) => {
    setAttendance((prev) => ({
      ...prev,
      [memberId]: !prev[memberId],
    }));
  };

  const handlePlusOneChange = (index, field, value) => {
    setPlusOnes((prev) => {
      const newPlusOnes = [...prev];
      newPlusOnes[index] = { ...newPlusOnes[index], [field]: value };
      return newPlusOnes;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Filter attending members
    const attendingMembers = group.members
      .filter((m) => attendance[m.id])
      .map((m) => ({
        name: m.name,
        type: 'Family Member',
        id: m.id,
      }));

    // Filter attending plus ones
    const attendingPlusOnes = plusOnes
      .filter((p) => p.isAttending && p.name.trim() !== '')
      .map((p, idx) => ({
        name: p.name,
        type: 'Plus One',
        id: `plus_${group.id}_${idx}`,
      }));

    const allAttendees = [...attendingMembers, ...attendingPlusOnes];

    try {
      await submitRSVP({
        groupId: group.id,
        groupName: group.members[0].name + "'s Party",
        allMembers: group.members.map((m) => m.name),
        side: group.side,
        event: eventName,
        email,
        phone,
        message,
        attendees: allAttendees,
      });

      onSuccess?.();
    } catch (error) {
      console.error('RSVP submission error:', error);
      setSubmitError('Failed to submit RSVP. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      {/* Family Members */}
      <div className="rsvp-block">
        <h4 className="rsvp-block-title">Your Party</h4>
        <p className="rsvp-block-hint">Please confirm who will be joining us.</p>
        {group.members.map((member) => (
          <div key={member.id} className="attendee-row">
            <span className="nm">{member.name}</span>
            <label className="toggle-wrap">
              <span className="toggle-state">
                {attendance[member.id] ? 'Attending' : 'Regrets'}
              </span>
              <span className="toggle">
                <input
                  type="checkbox"
                  checked={attendance[member.id]}
                  onChange={() => handleAttendanceChange(member.id)}
                  aria-label={`${member.name} attending`}
                />
                <span className="track" />
                <span className="knob" />
              </span>
            </label>
          </div>
        ))}
      </div>

      {/* Plus Ones */}
      {group.maxPlusOnes > 0 && (
        <div className="rsvp-block">
          <h4 className="rsvp-block-title">Guests</h4>
          <p className="rsvp-block-hint">
            You may bring up to {group.maxPlusOnes} {group.maxPlusOnes === 1 ? 'guest' : 'guests'}.
          </p>
          {plusOnes.map((guest, idx) => (
            <div key={idx} className="plusone">
              <div className="plusone-head">
                <span className="nm">Guest {idx + 1}</span>
                <label className="toggle-wrap">
                  <span className="toggle-state">
                    {guest.isAttending ? 'Attending' : 'Regrets'}
                  </span>
                  <span className="toggle">
                    <input
                      type="checkbox"
                      checked={guest.isAttending}
                      onChange={(e) => handlePlusOneChange(idx, 'isAttending', e.target.checked)}
                      aria-label={`Guest ${idx + 1} attending`}
                    />
                    <span className="track" />
                    <span className="knob" />
                  </span>
                </label>
              </div>
              {guest.isAttending && (
                <input
                  type="text"
                  className="rsvp-input"
                  value={guest.name}
                  onChange={(e) => handlePlusOneChange(idx, 'name', e.target.value)}
                  placeholder="Guest full name"
                  required={guest.isAttending}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Contact Info */}
      <div className="rsvp-grid2">
        <div className="rsvp-field">
          <label htmlFor="rsvp-email">Email Address *</label>
          <input
            type="email"
            id="rsvp-email"
            className="rsvp-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
        </div>
        <div className="rsvp-field">
          <label htmlFor="rsvp-phone">Phone Number *</label>
          <input
            type="tel"
            id="rsvp-phone"
            className="rsvp-input"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(123) 456-7890"
          />
        </div>
      </div>

      {/* Message to the Couple */}
      <div className="rsvp-field">
        <label htmlFor="rsvp-message">A Note for the Couple</label>
        <textarea
          id="rsvp-message"
          className="rsvp-textarea"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a kind word, a prayer, or a wish…"
        />
      </div>

      {/* Error Message */}
      {submitError && <div className="rsvp-error">{submitError}</div>}

      {/* Submit Button */}
      <button type="submit" className="rsvp-submit" disabled={isSubmitting}>
        <span className="dot" aria-hidden="true" />
        {isSubmitting ? 'Sending…' : 'Confirm RSVP'}
        <span className="dot" aria-hidden="true" />
      </button>
    </form>
  );
};

export default RSVPForm;
