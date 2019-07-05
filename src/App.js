import React from 'react';
import StateHooks from './pages/01_StateHooks';
import EffectHooks from './pages/02_EffectHooks';
import EffectClear from './pages/03_EffectClear';
import EffectPerformance from './pages/04_EffectPerformance';
import HooksRules from './pages/05_HooksRules';
import ContextHooks from './pages/06_ContextHooks';
import ReducerHooks from './pages/07_ReducerHooks';
import CallbackHooks from './pages/08_CallbackHooks/index';

function App() {
  return (
    <div className="App">
      <StateHooks />
      <EffectHooks />
      <EffectClear />
      <EffectPerformance />
      <HooksRules />
      <ContextHooks />
      <ReducerHooks />
      <CallbackHooks />
    </div>
  );
}

export default App;