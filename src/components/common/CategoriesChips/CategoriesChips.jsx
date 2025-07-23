import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

import { getCategoriesApi } from '../../../utils/apis/categories/getCategoriesApi'
import CategoriesChipsSkeleton from '../../skeleton/CategoriesChipsSkeleton'
import ErrorOnFetchApi from '../ErrorOnFetchApi/ErrorOnFetchApi'

const CategoriesChips = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategoriesApi(),
  })

  return (
    <div className='flex flex-wrap gap-4 mx-4'>
      {isPending && <CategoriesChipsSkeleton />}
      {error && <ErrorOnFetchApi />}
      {data &&
        data?.data.map((category) => (
          <Link to={`/categories${category?.id}`} key={category?.id}>
            <Chip
              sx={{ height: '4.3rem' }}
              avatar={
                <Avatar
                  sx={{
                    width: '3.3rem !important',
                    height: '3.3rem !important',
                  }}
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
