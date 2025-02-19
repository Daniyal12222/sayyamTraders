

export default function Loader  ()  {
  return (
    <div className="w-full h-dvh flex justify-center items-center absolute top-0 left-0 bg-[#f2f3f5] " >
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="relative w-32 h-32">
          <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#f3d52c] border-b-[#f3c72b] animate-spin" style={{animationDuration: '3s'}} />
          <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#f5c02d] animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm" />
      </div>
    </div>
    </div>
  );
}


