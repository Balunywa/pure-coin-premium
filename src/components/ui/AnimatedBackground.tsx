export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 80% 30%, hsl(var(--border)), transparent 60%)',
        }}
      />
    </div>
  );
};
