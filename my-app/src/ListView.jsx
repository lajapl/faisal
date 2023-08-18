import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

const ListView = ({raja}) => {
  
  return (
    <Wrapper>
      <div className='li'>
         <div className='in'>
         {raja.length > 0 && 
  Object.keys(raja[0]).map((key) => {
    const {id, description, image, price } = raja[0][key]; 
    return (
      
        <div>
       {price}<br></br>
        <img src={image}/><br></br>
        {description.slice(0, 99)}<br></br>
        
        <NavLink to={`/SingalProduct/${id}`}>
          <button>read more</button>
        </NavLink>
         </div>
      
              )
            })
          }
         </div>

      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .li img{
width: 200px;
  }
`

export default ListView
