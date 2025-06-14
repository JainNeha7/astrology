import React from 'react';

function Achievements() {
  return (
    <div className="my-8 text-black">
      <div className="bg-gradient-to-r mt-14 rounded-full from-yellow-300 via-yellow-200 to-yellow-300 flex items-center justify-center">
        <div className="flex-col py-2">
          <h2 className="font-serif text-4xl font-bold">Achievements</h2>
          <div className="w-20 h-1 border-b-4 border-orange-500 mt-1 rounded-2xl"></div>
        </div>
      </div>

      <div className="mx-11 p-9 bg-slate-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/achiever1.jpeg" className="w-60 h-50 rounded-lg shadow-2xl" alt="Achiever 1" />
          <div>
            <p className="font-semibold text-lg">
              I am feeling proud to announce that I have received an award of my grandfather from Janki Mandir Ayodhya with great blessings from Shri Ramkinkar Maharaj ji avam Shri Didi Maa. Blessed to receive the legacy of him to maintain the young spiritual coach award in Ayodhya - Jai Siya Ram 🙏💐...
            </p>
          </div>
        </div>
      </div>

      <div className="mx-11 p-9 bg-slate-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/achiever3.jpeg" className="w-80 h-90 mr-8 rounded-lg shadow-2xl" alt="Achiever 3" />
          <div>
            <p className="py-6 font-semibold text-2xl">Received - "Best Healer Award"</p>
          </div>
        </div>
      </div>

      <div className="mx-11 p-9 bg-slate-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/a4.jpeg" className="w-60 h-50 rounded-lg shadow-2xl" alt="Award 4" />
          <div>
            <p className="font-semibold text-lg">
              This award is presented to Nehaa Jain for her exceptional work as a Psychic Medium, Akashic Records Expert, Tarot Consultant, and Holistic Healer. Her contributions are celebrated as part of the Azadi Ka Amrit Mahotsav on Independence Day, 15th August 2024.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-11 p-9 bg-slate-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/a5.jpeg" className="w-60 h-50 rounded-lg shadow-2xl" alt="Award 5" />
          <div>
            <p className="font-semibold text-lg">
              Cozzmo (The House of Divine Energies) has been certified for ISO 9001:2015 for its commitment to quality in providing astrology, healing, and holistic treatments. This certification, awarded by RBS Cert, recognizes their adherence to global quality management standards.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-11 p-9 bg-slate-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/a6.jpeg" className="w-60 h-50 rounded-lg shadow-2xl" alt="Award 6" />
          <div>
            <p className="font-semibold text-lg">
              Nehaa Jain, the founder of Cozzmo by Nehaa Jain, is a gifted Psychic Medium and renowned spiritual healer. Her work combines profound intuition with holistic practices to empower individuals on their transformative journeys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
