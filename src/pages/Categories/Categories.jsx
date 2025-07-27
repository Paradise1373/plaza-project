import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import Header from '../../components/common/Header'
import getCategoryByIdApi from '../../utils/apis/categories/getCategoryByIdApi'

const Categories = () => {
  const { id } = useParams() || ''

  const { isPending, error, data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategoryByIdApi(),
  })

  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center gap-4'>
      </div>
    </>
  )
}

export default Categories

