import {createSlice} from '@reduxjs/toolkit';


const initialState = [
    {id: '0', name: 'Albert'},
    {id: '1', name: 'Aarthi'},
    {id: '2', name: 'Vicky'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        
    }

})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;