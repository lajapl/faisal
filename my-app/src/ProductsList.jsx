import React from 'react'
import { useFilterContext } from './component/usecontext/FilterContext'
import GridView from './GridView'
import ListView from './ListView'

const ProductsList = () => {
    const {filterProducts, oppo} = useFilterContext()
    if (oppo === true){
        return <GridView raja={filterProducts}/>
    }
    if (oppo === false){
        return <ListView  raja={filterProducts}/>
    }
  return (
    <div>
      
    </div>
  )
}

export default ProductsList
