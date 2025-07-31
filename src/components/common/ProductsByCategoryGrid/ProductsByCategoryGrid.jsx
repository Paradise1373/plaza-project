import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import { getProductsByCategory } from '../../../utils/apis/products/getProductsByCategory'

import ProductGridSkeleton from '../../skeleton/ProductGridSkeleton/ProductGridSkeleton'

const ProductsByCategoryGrid = ({ id }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['productsByCategory'],
    queryFn: () => getProductsByCategory(id),
  })

  return (
    <div className='flex flex-wrap gap-4 px-8 items-center justify-center my-8'>
      {isPending &&
        Array.from('123456').map((i) => <ProductGridSkeleton key={i} />)}
      {data &&
        data?.data?.map((product) => (
          <Link
            to={`/products/${product?.id}`}
            key={product?.id}
            className='flex flex-col rounded-xl shadow-lg gap-4 items-center justify-center pb-2 w-5/12 lg:w-3/12'
          >
            <img
              className='w-[100%] rounded-t-xl h-[15rem]'
              src={product?.images[0].replace(/^["[]+|["\]]/g, '')}
            />
            <p>{product?.title}</p>
            <p>{product?.price}$</p>
          </Link>
        ))}
    </div>
  )
}

export default ProductsByCategoryGrid
