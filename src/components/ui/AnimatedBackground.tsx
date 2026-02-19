export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot matrix grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      
      {/* Subtle radial fade from center */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 20%, hsl(0 0% 100% / 0.03) 0%, transparent 50%)',
        }}
      />

      {/* Noise texture for depth */}
      <div className="absolute inset-0 noise" />
    </div>
  );
};
