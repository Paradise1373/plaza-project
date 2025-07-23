const CategoriesChipsSkeleton = () => {
  return Array.from('1234567').map((i) => (
    <div key={i} className='flex flex-wrap gap-4 mx-4'>
      <div className='flex p-2 gap-2 items-center bg-slate-100 rounded-md'>
        <div className='w-[3.3rem] h-[3.3rem] animate-pulse bg-slate-400 rounded-full'></div>
        <div className='w-[4rem] h-[1rem] animate-pulse bg-slate-400 rounded-lg'></div>
      </div>
    </div>
  ))
}

export default CategoriesChipsSkeleton
