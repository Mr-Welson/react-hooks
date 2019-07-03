import React from 'react';
import CountHooks from './pages/CountHooks';
import CountEffect from './pages/CountEffect';
import CountEffectClear from './pages/CountEffectClear';
import CountEffectPerformance from './pages/CountEffectPerformance';
import HooksRules from './pages/HooksRules';
import ContextHooks from './pages/ContextHooks';
import ReducerHooks from './pages/ReducerHooks';

function App() {
  return (
    <div className="App">
      <CountHooks />
      <CountEffect />
      <CountEffectClear />
      <CountEffectPerformance />
      <HooksRules />
      <ContextHooks />
      <ReducerHooks />
    </div>
  );
}

export default App;