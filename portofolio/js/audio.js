/**
 * Web Audio API Synthesizer Sound FX System
 */
(function() {
  let audioCtx = null;
  let isMuted = localStorage.getItem('portfolio_muted') === 'true';

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.05) {
    if (isMuted) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  const SoundFX = {
    click: () => playTone(600, 'sine', 0.06, 0.04),
    hover: () => playTone(350, 'triangle', 0.04, 0.02),
    switch: () => playTone(800, 'sine', 0.08, 0.05),
    success: () => {
      playTone(523.25, 'sine', 0.1, 0.05); // C5
      setTimeout(() => playTone(659.25, 'sine', 0.12, 0.05), 80); // E5
      setTimeout(() => playTone(783.99, 'sine', 0.15, 0.05), 160); // G5
    },
    toggleMute: () => {
      isMuted = !isMuted;
      localStorage.setItem('portfolio_muted', isMuted);
      return isMuted;
    },
    isMuted: () => isMuted
  };

  window.SoundFX = SoundFX;
})();
