import { createSlice } from "@reduxjs/toolkit";

export const fetcherSlice = createSlice({
    name: 'fetcher',
    initialState: {
        latitude: '37.27574',
        longitude: '127.13249',
    },
    reducers: {
        saveLocation: (state, action) => {
            console.log(action.payload);
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        }
    },
    extraReducers: {},
})

export const { saveLocation } = fetcherSlice.actions;
export default fetcherSlice.reducer;