import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({

    name: 'filterSlice',
    initialState: { 

        area: [],
        difficulty: [],
        time: []

    },
    reducers: {

        // This reducer receives the info of a checkbox, selects the filter and adds the filter to the arrays 
        selectFilter: (state, action) => {
        
           const { filterName, filter} = action.payload; 

           switch(filterName){

                case 'area': 
                    state.area.push(filter);
                    break;
                case 'difficulty':
                    state.difficulty.push(filter);
                    break;
                case 'time':
                    state.time.push(filter);
                    break;
                default:
                    return;
            
           }

        },
        // This reducer receives the info of a checkbox and unselects the filter 
        unselectFilter: (state, action) => {
       
            const { filterName, filter} = action.payload;

            switch(filterName){

                case 'area': 
                    state.area = state.area.filter(item => item !== filter )
                    break;
                case 'difficulty':
                    state.difficulty = state.difficulty.filter(item => item !== filter )
                    break;
                case 'time':
                    state.time = state.time.filter(item => item !== filter );
                    break;
                default:
                    return;
            
           }


        }

    },

});

export const { selectFilter, unselectFilter } = filterSlice.actions;
export default filterSlice.reducer;