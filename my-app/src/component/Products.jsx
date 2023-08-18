import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import PriceFormat from "../helper/PriceFormat"



const Products = (curElem) => {
  
const {id,price,name,category,image} = curElem  
  return <NavLink to={`/singalproduct/${id}`}>
<Wrapper>   
   <div className="card">
   
      {/* {<PriceFormat price={price}/>} */}
      {price}<br></br>
      {name}
        <img src={image}/>
        {name}
        
    
    </div>
    </Wrapper>

  </NavLink>
   
    
}
const Wrapper = styled.section`
.card{
border: none;

 
}
.card img{
  width: 200px;
  display: flex;
}
`

export default Products