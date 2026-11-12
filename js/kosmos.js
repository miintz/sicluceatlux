document.addEventListener('DOMContentLoaded', () => {
  // 1. Generate Procedural Firmament Stars across 45vh
  const firmament = document.getElementById('kosmos-firmament');
  if (firmament) {
    const starCount = 65; // Slightly more stars to fill the 45vh vault
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random coordinates: full width, and filling down the 45vh height
      const left = Math.random() * 100; 
      const top = Math.random() * 100;   // Uses percentage of the 45vh container
      const size = Math.random() * 1.5 + 0.75; // 0.75px to 2.25px
      
      // Random atmospheric shimmer variables
      const minOp = Math.random() * 0.1 + 0.05;
      const maxOp = Math.random() * 0.5 + 0.3;
      const duration = Math.random() * 5 + 3; // 3s to 8s
      const delay = Math.random() * 5;        // Staggered start times
      
      star.style.left = `${left}%`;
      star.style.top = `${top}%`;             // Positioned via percentage
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--min-opacity', minOp);
      star.style.setProperty('--max-opacity', maxOp);
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--delay', `${delay}s`);
      
      firmament.appendChild(star);
    }
  }

  // 2. Generate Bottom Telemetry Readout
  const telemetry = document.getElementById('kosmos-telemetry');
  if (telemetry) {
    const leftLabel = document.createElement('div');
    leftLabel.textContent = "SICLVCEATLVX";
    
    const ticksContainer = document.createElement('div');
    ticksContainer.className = 'telemetry-ticks';
    for (let t = 0; t < 16; t++) {
      const tick = document.createElement('div');
      tick.className = t % 4 === 0 ? 'tick tick-major' : 'tick';
      ticksContainer.appendChild(tick);
    }
    
    const rightLabel = document.createElement('div');
    rightLabel.textContent = "MAARTEN VAN HEES";

    telemetry.appendChild(leftLabel);
    telemetry.appendChild(ticksContainer);
    telemetry.appendChild(rightLabel);
  }
});

