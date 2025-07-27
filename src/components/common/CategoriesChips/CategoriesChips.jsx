import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'

import { getCategoriesApi } from '../../../utils/apis/categories/getCategoriesApi'
import CategoriesChipsSkeleton from '../../skeleton/CategoriesChipsSkeleton'
import ErrorOnFetchApi from '../ErrorOnFetchApi'

const CategoriesChips = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategoriesApi(),
  })

  return (
    <div className='mx-4 flex flex-wrap gap-4'>
      {isPending && <CategoriesChipsSkeleton />}
      {error && <ErrorOnFetchApi />}
      {data &&
        data?.data.map((category) => (
          <Link to={`/categories/${category?.id}`} key={category?.id}>
            <Chip
              sx={{ height: '5rem' }}
              avatar={
                <Avatar
                  sx={{ width: '3rem !important', height: '3rem !important' }}
                  alt={`${category?.name} image`}
                  src={category?.image}
                />
              }
              label={category?.name}
              variant='outlined'
            />
          </Link>
        ))}
    </div>
  )
}

export default CategoriesChips
