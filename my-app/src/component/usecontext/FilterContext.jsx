import { createContext, useContext, useEffect, useReducer } from "react";
import { usePook } from "./Context";
import reducer from "../components/reducer/FilterReducer"



const Raju = createContext()

const initialState ={
    
    filterProducts: [],
    allProducts: [],
    oppo: true,
    sorting_value:"lowest",
}


export const FilterProvider = ({children}) =>{

    const { Products } = usePook()
    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridview = () =>{
        return dispatch({type: "set_gridview"})
    }
    const setListview = () =>{
        return dispatch({type: "set_Listview"})
    }


    const sorting = (event) =>{
        let uservalue = event.target.value
    
        dispatch({type: "get_sort", payload: uservalue })
    }

    useEffect(() =>{
        dispatch({type: "filterproductss"})
        
      dispatch({type: "sortingproducts"})
    },[Products, state.sortingvalue,state.filter])

    useEffect(() =>{
        dispatch({type: "FILTER_PRODUCTS", payload: Products})
    },[Products])

       return(<Raju.Provider value={{...state,setGridview,setListview,sorting}}>
         {children}
      </Raju.Provider>)
}



export const useFilterContext = ()=>{
    return useContext(Raju)
}