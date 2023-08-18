

const FilterReducer = (state, action) =>{
    switch (action.type){
        case "FILTER_PRODUCTS":
            return{
                ...state,
                filterProducts: [{...action.payload}],
                allProduct: [{...action.payload}],
            }
            case "set_gridview":
                return{
                    ...state,
                    oppo:true,
                }
                case "set_Listview":
                    return{
                        ...state,
                        oppo:false,
                    }
                    case "get_sort":
                        return{
                            ...state,
                            sorting_value:action.payload,
                              
                        }
                        
                    case "filterproductss":
                        let newsortdata;
                        const {filterProducts,sorting_value} = state
                        let tempSortProduct = [{...filterProducts}];
                           console.log(filterProducts)
                        const sortingProducts = (a, b) => {
                            if (sorting_value === "lowest") {
                              return a.price - b.price;
                            }
                    
                            if (sorting_value === "highest") {
                              return b.price - a.price;
                            }
                    
                            if (sorting_value === "a-z") {
                              return a.name.localeCompare(b.name);
                            }
                    
                            if (sorting_value === "z-a") {
                              return b.name.localeCompare(a.name);
                            }
                          };
                    
                          newsortdata = tempSortProduct.sort(sortingProducts);
                        return {
                            ...state,
                            filter_products: newsortdata,
                          };
                        
        default: 
            return state
    }

}
export default FilterReducer