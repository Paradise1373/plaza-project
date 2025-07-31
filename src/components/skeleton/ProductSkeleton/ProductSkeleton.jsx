const ProductSkeleton = () => {
  return (
    <>
      <div className='bg-slate-400 w-[15rem] h-[15rem] rounded-2xl animate-pulse'></div>
      <div className='flex flex-wrap gap-2'>
        <div className='bg-slate-400 w-[6rem] h-[6rem] rounded-xl animate-pulse'></div>
        <div className='bg-slate-400 w-[6rem] h-[6rem] rounded-xl animate-pulse'></div>
        <div className='bg-slate-400 w-[6rem] h-[6rem] rounded-xl animate-pulse'></div>
      </div>
      <div className='bg-slate-400 w-[6rem] h-[1.5rem] rounded-xl animate-pulse'></div>
      <div className='bg-slate-400 w-[6rem] h-[1.5rem] rounded-xl animate-pulse'></div>
      <div className='bg-slate-400 w-[15rem] h-[5rem] rounded-xl animate-pulse'></div>
    </>
  )
}

export default ProductSkeleton
