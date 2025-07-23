import { useQuery } from '@tanstack/react-query'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

import { getCategoriesApi } from '../../../utils/apis/categories/getCategoriesApi'

const CategoriesChips = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategoriesApi(),
  })

  return (
    <div className='flex flex-wrap gap-4 mx-4'>
      {data &&
        data?.data.map((category) => (
          <Chip
            sx={{ height: '4.3rem'}}
            key={category?.id}
            avatar={
              <Avatar
                sx={{ width: '3.3rem !important', height: '3.3rem !important' }}
                alt={`${category?.name} image`}
                src={category?.image}
              />
            }
            label={category?.name}
            variant='outlined'
          />
        ))}
    </div>
  )
}

export default CategoriesChips
