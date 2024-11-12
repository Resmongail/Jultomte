import React, { useState } from 'react';
import { TreePine } from 'lucide-react';
import Snow from './components/Snow';
import Santa from './components/Santa';

function App() {
  const [showSnow, setShowSnow] = useState(false);
  const [showSanta, setShowSanta] = useState(false);

  const handleClick = () => {
    setShowSnow(true);
    setTimeout(() => setShowSanta(true), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {showSnow && <Snow />}
      {showSanta && <Santa />}
      
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse">
            Christmas Magic ✨
          </h1>
          <p className="text-blue-200 text-lg md:text-xl">
            Click the button to start the festive celebration!
          </p>
        </div>
        
        <button
          onClick={handleClick}
          className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full 
          transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-3
          font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed
          hover:shadow-red-500/50 hover:shadow-xl"
          disabled={showSnow}
        >
          <TreePine className="w-6 h-6" />
          Start Christmas Magic!
        </button>
      </div>
    </div>
  );
}

export default App;