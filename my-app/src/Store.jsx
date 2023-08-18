import React from 'react'
import { styled } from 'styled-components'
import ProductsList from './ProductsList'
import Sort from './filter/Sort'



const Store = () => {
 
  
  
    return (
      <Wrapper className='container'>
     <div className='raaj'>
      <div className='lft'>
        filtersection
      </div>
      <section className='right'>
        <div className='fir'>
         <Sort/>
        </div>
        <div className='roww'>
          <ProductsList/>
           {/* <GridView raja={filterProducts}/> */}
        </div>
      </section>

     </div>
          </Wrapper>
    
    )
  }
const Wrapper = styled.section`
.container{
  
}
.raaj{
  display: flex;
  

 
  
}
.lft{
   width: 20%;
}
.right{
  width: 80%;

}

`











export default Store