import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import Pagination from '@mui/material/Pagination'

import { getProductsApi } from '../../../utils/apis/products/getProductsApi'

import ProductGridSkeleton from '../../skeleton/ProductGridSkeleton/ProductGridSkeleton'
import ErrorOnFetchApi from '../ErrorOnFetchApi'

const ProductsGridWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 9
  const total = 200 // backend in response should provide total pages, total items and ...

  const { isPending, error, data } = useQuery({
    queryKey: ['products', currentPage],
    queryFn: () => getProductsApi((currentPage - 1) * limit, limit),
  })

  return (
    <div className='flex flex-wrap gap-4 px-8 items-center justify-center my-8'>
      {isPending &&
        Array.from('123456').map((i) => <ProductGridSkeleton key={i} />)}
      {error && <ErrorOnFetchApi />}
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
      {data && (
        <div className='my-8'>
          <Pagination
            onChange={(event, value) => setCurrentPage(value)}
            size='large'
            count={Math.ceil(total / limit)}
            defaultPage={currentPage}
            boundaryCount={2}
          />
        </div>
      )}
    </div>
  )
}

export default ProductsGridWithPagination
