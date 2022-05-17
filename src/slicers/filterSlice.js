import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({

    name: 'filterSlice',
    initialState: { 

        area: [],
        difficulty: [],
        time: []

    },
    reducers: {

        selectFilter: (state, action) => {
        
           const { key, value} = action.payload; 

           switch(key){

                case 'area': 
                    state.area.push(value);
                    break;
                case 'difficulty':
                    state.difficulty.push(value);
                    break;
                case 'time':
                    state.time.push(value);
                    break;
                default:
                    return;
            
           }

        },
        unselectFilter: (state, action) => {
       
            const { key, value} = action.payload;

            switch(key){

                case 'area': 
                    state.area = state.area.filter(item => item !== value )
                    break;
                case 'difficulty':
                    state.difficulty = state.difficulty.filter(item => item !== value )
                    break;
                case 'time':
                    state.time = state.time.filter(item => item !== value );
                    break;
                default:
                    return;
            
           }


        }

    },

});

export const { selectFilter, unselectFilter } = filterSlice.actions;
export default filterSlice.reducer;