
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
}

function Loading({ size = 'md' }: LoadingProps) {
  // Define size classes based on prop
  const sizeClasses = {
    sm: 'w-6 h-6 border-[2px]',
    md: 'w-12 h-12 border-[3px]',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div className="flex justify-center min-h-svh">
      <div
        className={`absolute rounded-full border-red-100 border-r-[#f10410] border-b-[#f10410] animate-spin ${sizeClasses[size]}`}
        style={{ animationDuration: '1s' }}
      ></div>
    </div>
  );
}

export default Loading;