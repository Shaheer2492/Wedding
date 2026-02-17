import { useState } from 'react';
import { motion } from 'framer-motion';
import EngagementDetails from './EngagementDetails';
import EventPlaceholder from './EventPlaceholder';
import FloralCorner from '../ui/FloralCorner';

const EventTabs = () => {
  const [activeTab, setActiveTab] = useState('engagement');

  const tabs = [
    { id: 'engagement', label: 'Engagement', icon: '💍' },
    { id: 'shaadi', label: 'Shaadi', icon: '👰' },
    { id: 'valima', label: 'Valima', icon: '🤵' },
  ];

  return (
    <section className="py-20 px-4 min-h-screen relative overflow-hidden">
      {/* Floral Corner Decorations */}
      <FloralCorner position="top-left" className="opacity-40" />
      <FloralCorner position="top-right" className="opacity-40" />
      <FloralCorner position="bottom-left" className="opacity-30" />
      <FloralCorner position="bottom-right" className="opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-script text-deepRose mb-4">
            Our Events
          </h1>
          <p className="text-gray-600 font-sans">
            Join us as we celebrate our journey together
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-lg p-2 flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 flex items-center space-x-2 ${activeTab === tab.id
                  ? 'bg-deepRose text-white shadow-md'
                  : 'text-gray-600 hover:text-deepRose hover:bg-blush-50'
                  }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'engagement' && <EngagementDetails />}
          {activeTab === 'shaadi' && <EventPlaceholder eventName="Shaadi" />}
          {activeTab === 'valima' && <EventPlaceholder eventName="Valima" />}
        </motion.div>
      </div>
    </section>
  );
};

export default EventTabs;
