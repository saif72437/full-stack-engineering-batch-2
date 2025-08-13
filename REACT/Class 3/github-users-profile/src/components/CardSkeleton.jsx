function CardSkeleton() {
  return (
    // Outer container matching the Card's basic styling
    <div className='w-sm bg-slate-300 p-2 flex flex-col items-center justify-center gap-2 rounded-lg shadow-md'>
      {/* Skeleton for the circular image */}
      <div className='w-20 h-20 rounded-full bg-gray-400 animate-pulse'></div>
      
      {/* Skeleton for the name (wider line) */}
      <div className='h-4 w-3/4 bg-gray-400 rounded animate-pulse'></div>
      
      {/* Skeleton for the username (narrower line) */}
      <div className='h-3 w-1/2 bg-gray-400 rounded animate-pulse'></div>
    </div>
  );
}

export default CardSkeleton;