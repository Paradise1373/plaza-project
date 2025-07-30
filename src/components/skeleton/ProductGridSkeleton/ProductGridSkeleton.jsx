const ProductGridSkeleton = () => {
  return (
    <div className='flex flex-col rounded-xl shadow-lg gap-4 my-4 w-5/12 lg:w-3/12 items-center justify-center pb-2'>
      <div className='bg-slate-400 rounded-t-xl animate-pulse w-[100%] h-[15rem]'></div>
      <div className='bg-slate-400 rounded-xl w-[7rem] h-[1rem]'></div>
      <div className='bg-slate-400 rounded-xl w-[7rem] h-[1rem]'></div>
    </div>
  )
}

export default ProductGridSkeleton
