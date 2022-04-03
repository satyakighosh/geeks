import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHotel {
    name: string;
    cuisines: string;
    featured_image: string;
    id: string;
}

interface IHotelResponse {
    isLoading: boolean;
    hotels: IHotel[];
}

const initialState: IHotelResponse = {
    isLoading: false,
    hotels: []
}

const hotelSlice = createSlice({
    name: "hotelSlice",
    initialState: initialState,
    reducers: {
        started(state: IHotelResponse) {
            state.isLoading = true;
        },
        completed(state: IHotelResponse, payload: PayloadAction<IHotel[]>) {
            state.isLoading = false;
            state.hotels = payload.payload;
        }
    }
})

export const {started, completed} = hotelSlice.actions;
export default hotelSlice.reducer;