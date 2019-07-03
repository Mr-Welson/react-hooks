import React from 'react';
import CountHooks from './pages/CountHooks';
import EffectHooks from './pages/EffectHooks';
import EffectClear from './pages/EffectClear';
import EffectPerformance from './pages/EffectPerformance';
import HooksRules from './pages/HooksRules';
import ContextHooks from './pages/ContextHooks';
import ReducerHooks from './pages/ReducerHooks';

function App() {
  return (
    <div className="App">
      <CountHooks />
      <EffectHooks />
      <EffectClear />
      <EffectPerformance />
      <HooksRules />
      <ContextHooks />
      <ReducerHooks />
    </div>
  );
}

export default App;