import Header from '../../components/common/Header'
import CategoriesChips from '../../components/common/CategoriesChips/CategoriesChips'
import ProductsGridWithPagination from '../../components/common/ProductsGridWithPagination/ProductsGridWithPagination'

const Root = () => {
  return (
    <div>
      <Header />
      <CategoriesChips />
      <ProductsGridWithPagination />
    </div>
  )
}

export default Root
