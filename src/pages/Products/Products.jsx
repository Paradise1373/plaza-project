import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { getProductById } from '../../utils/apis/products/getProductById'

import Header from '../../components/common/Header'
import ProductSkeleton from '../../components/skeleton/ProductSkeleton'
import ErrorOnFetchApi from '../../components/common/ErrorOnFetchApi/ErrorOnFetchApi'

const Products = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const { id } = useParams() || ''

  const { isPending, error, data } = useQuery({
    queryKey: ['productById'],
    queryFn: () => getProductById(id),
  })

  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 items-center mb-12 px-16 justify-center'>
        {isPending && <ProductSkeleton />}
        {error && <ErrorOnFetchApi />}
        {data && (
          <>
            <img
              className='w-[15rem] h-[15rem] rounded-2xl shadow-2xl'
              src={data?.data?.images[activeImageIndex].replace(
                /^["[]+|["\]]/g,
                ''
              )}
            />
            <div className='flex flex-wrap gap-2'>
              {data?.data?.images.map((image, index) => (
                <img
                  onClick={() => setActiveImageIndex(index)}
                  key={image}
                  src={image.replace(/^["[]+|["\]]/g, '')}
                  className={`w-[6rem] h-[6rem] rounded-xl border-4 cursor-pointer ${
                    index === activeImageIndex
                      ? 'border-slate-400 shadow-2xl'
                      : 'border-transparent shadow-2xl'
                  }`}
                />
              ))}
            </div>
            <p className='font-bold text-xl'>{data?.data?.title}</p>
            <p className='text-xl'>{data?.data?.price} $</p>
            <p className='text-xl'>{data?.data?.description}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Products
