import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: [],
}

const commonSlice = createSlice({
    name: 'Common',
    initialState,
    reducers: {
        setData: (state,action) => {
            state.data = action.payload;
        },
    }
});

export const {setData} = commonSlice.actions;

export const commonReducer = commonSlice.reducer;