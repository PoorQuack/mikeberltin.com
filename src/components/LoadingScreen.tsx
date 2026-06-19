'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  // fading: overlay visible but fading out
  // done: unmounted
  const [phase, setPhase] = useState<'closed' | 'open' | 'fading' | 'done'>('closed');

  useEffect(() => {
    // Step 1: open brackets after a short beat
    const t1 = setTimeout(() => setPhase('open'), 300);

    // Step 2: dismiss once the page is fully loaded
    const dismiss = () => {
      // start fade
      setPhase('fading');
      // unmount after fade completes
      setTimeout(() => setPhase('done'), 700);
    };

    if (document.readyState === 'complete') {
      // already loaded — give the animation a moment to play
      setTimeout(dismiss, 800);
    } else {
      window.addEventListener('load', () => setTimeout(dismiss, 400), { once: true });
    }

    return () => clearTimeout(t1);
  }, []);

  if (phase === 'done') return null;

  const contentVisible = phase === 'open' || phase === 'fading';

  return (
    <div className="loader-overlay" data-fading={phase === 'fading'}>
      <div className="loader-inner">

        {/* Left bracket */}
        <span className="loader-bracket loader-bracket-left" data-open={contentVisible}>[</span>

        {/* Content — expands outward when open */}
        <span className="loader-content" data-visible={contentVisible}>
          <span className="loader-mcl">MCL</span>
          <span className="loader-divider" />
          <span className="loader-wordmark">
            MIKEBERLTIN
            <span className="loader-rule" />
          </span>
        </span>

        {/* Right bracket */}
        <span className="loader-bracket loader-bracket-right" data-open={contentVisible}>]</span>
      </div>

      {/* Progress line at bottom */}
      <div className="loader-progress" data-active={contentVisible} />
    </div>
  );
}
