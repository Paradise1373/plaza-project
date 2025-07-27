import { useQuery } from '@tanstack/react-query'

import { getProductsByCategory } from '../../../utils/apis/products/getProductsByCategory'

const ProductsByCategoryGrid = ({ id }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['categoriesById'],
    queryFn: () => getProductsByCategory(id),
  })

  console.log(data)
  
  return <div>ProductsByCategoryGrid</div>
}

export default ProductsByCategoryGrid
