import React from 'react'
import Products from './component/Products'
import { styled } from 'styled-components';

const GridView = ({raja}) => {
  return (
  <Wrapper>

<div className='nmme'>
      <div className='three'>
         
          {raja.length > 0 && 
          Object.keys(raja[0]).map((key) => {
            return (
              <Products
                key={raja[0][key].id}
                 {...raja[0][key]}
                   
              />
             );
         })}
         </div>
          </div>
         </Wrapper>
         
  )
}
const Wrapper = styled.section`

.nmme{
    display: flex;
    margin-bottom: 100px;
   
  }
  .three{
    column-count: 3;
    margin: auto;
  
  }
`

export default GridView
