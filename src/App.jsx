import React, { useRef } from 'react';

export const App = () => {
  const helloRef = useRef(null);

  const executeScroll = () => {
    if (helloRef.current) {
      helloRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fullscreen-height">
        <h1>Ref exercise starter</h1>
        <button onClick={executeScroll}>Click to scroll</button>
      </div>
      <div ref={helloRef} className="fullscreen-height lightblue-background">
        <h1>Hello</h1>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Scroll to top</button>
      </div>
    </>
  );
};
