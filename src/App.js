import React from 'react';
import CountHooks from './pages/CountHooks';
import CountEffect from './pages/CountEffect';
import CountEffectClear from './pages/CountEffectClear';
import CountEffectPerformance from './pages/CountEffectPerformance';
import HooksRules from './pages/HooksRules';

function App() {
  return (
    <div className="App">
      <CountHooks />
      <CountEffect />
      <CountEffectClear />
      <CountEffectPerformance />
      <HooksRules />
    </div>
  );
}

export default App;