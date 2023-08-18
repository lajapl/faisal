import React from 'react'
import { styled } from 'styled-components'
import {BsFillGridFill, BsList} from 'react-icons/bs'
import { useFilterContext } from '../component/usecontext/FilterContext'


const Sort = () => {
  const { oppo,setGridview,setListview, filterProducts,sorting } = useFilterContext()
       
  return (
    <Wrapper >
      <div className='onerow'>       
       <div className='sort'>
        <button><BsFillGridFill className={oppo ? " sortbtn" :  "sortbtn" } onClick={setListview }/></button>
        <button><BsList className={!oppo ? " listbtn" : "listbtn"} onClick={setGridview}/></button>
        </div>
        <div className='allproducts'><p>{filterProducts.length}</p></div>
        <div className='list'>
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id='sort' onClick={sorting}>
              <option value="lowest">price(lowest)</option>
              <option value="highest">price(highest)</option>
              <option value="a-z">price(a-z)</option>
              <option value="z-a">price(z-a)</option>
            
            </select>
          </form>
          </div>

        </div>


    </Wrapper>
  )
}
const Wrapper = styled.section`
.onerow{
  display: flex;
  justify-content: space-between;
  
}
`
 
export default Sort
