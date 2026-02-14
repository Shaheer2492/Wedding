import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
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
    setAttendance(prev => ({
      ...prev,
      [memberId]: !prev[memberId]
    }));
  };

  const handlePlusOneChange = (index, field, value) => {
    setPlusOnes(prev => {
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
      .filter(m => attendance[m.id])
      .map(m => ({
        name: m.name,
        type: 'Family Member',
        id: m.id
      }));

    // Filter attending plus ones
    const attendingPlusOnes = plusOnes
      .filter(p => p.isAttending && p.name.trim() !== '')
      .map((p, idx) => ({
        name: p.name,
        type: 'Plus One',
        id: `plus_${group.id}_${idx}`
      }));

    const allAttendees = [...attendingMembers, ...attendingPlusOnes];

    try {
      await submitRSVP({
        groupId: group.id,
        groupName: group.members[0].name + "'s Party",
        allMembers: group.members.map(m => m.name),
        side: group.side,
        event: eventName,
        email,
        phone,
        message,
        attendees: allAttendees
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Family Members */}
      <div>
        <h3 className="text-xl font-script text-deepRose mb-4">Family Members</h3>
        <div className="space-y-3">
          {group.members.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-blush-200 transition-colors">
              <span className="font-sans text-gray-800 text-lg">{member.name}</span>
              <label className="flex items-center space-x-3 cursor-pointer">
                <span className="text-sm text-gray-500 font-sans">
                  {attendance[member.id] ? 'Attending' : 'Not Attending'}
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={attendance[member.id]}
                    onChange={() => handleAttendanceChange(member.id)}
                    className="sr-only"
                  />
                  <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${attendance[member.id] ? 'bg-deepRose' : 'bg-gray-300'}`}></div>
                  <div className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${attendance[member.id] ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Plus Ones */}
      {group.maxPlusOnes > 0 && (
        <div>
          <h3 className="text-xl font-script text-deepRose mb-4">Plus Ones</h3>
          <p className="text-sm text-gray-500 mb-4 font-sans">You may bring up to {group.maxPlusOnes} total guests.</p>
          <div className="space-y-4">
            {plusOnes.map((guest, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-700 font-sans">Guest {idx + 1}</span>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <span className="text-sm text-gray-500 font-sans">
                      {guest.isAttending ? 'Attending' : 'Not Attending'}
                    </span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={guest.isAttending}
                        onChange={(e) => handlePlusOneChange(idx, 'isAttending', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${guest.isAttending ? 'bg-deepRose' : 'bg-gray-300'}`}></div>
                      <div className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${guest.isAttending ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                  </label>
                </div>
                {guest.isAttending && (
                  <input
                    type="text"
                    value={guest.name}
                    onChange={(e) => handlePlusOneChange(idx, 'name', e.target.value)}
                    placeholder="Guest Full Name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-deepRose"
                    required={guest.isAttending}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-sans font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-blush-200 focus:outline-none focus:ring-2 focus:ring-deepRose transition-all"
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-sans font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-blush-200 focus:outline-none focus:ring-2 focus:ring-deepRose transition-all"
            placeholder="(123) 456-7890"
          />
        </div>
      </div>

      {/* Message to the Couple */}
      <div>
        <label htmlFor="message" className="block text-sm font-sans font-medium text-gray-700 mb-2">
          Message to the Bride and Groom
        </label>
        <textarea
          id="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-blush-200 focus:outline-none focus:ring-2 focus:ring-deepRose transition-all resize-none"
          placeholder="Leave a sweet note for the couple..."
        />
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{submitError}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Confirm RSVP'}
        </Button>
      </div>
    </form>
  );
};

export default RSVPForm;
