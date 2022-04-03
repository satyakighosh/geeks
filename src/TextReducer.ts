import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IData {
    name: string;
}

/*

crud
c create data in table
r read data in table
u update data in table
d delete data in table

create table with name TextReducer
TextReducer
{
    name: geeksforgeeks
}

react will invoke reducer
write("geeksforgeeks")
geeksforgeeks will be assigned to PayloadAction

insert table col1Val, col2value

write("geeksforgeeks")

"geeksforgeeks" will be stored in action: PayloadAction<string>

geek - store it as hello geek
*/

const TextReducer = createSlice({
    name: "TextReducer",
    initialState: { name: '' } as IData,
    reducers: {
        write(state: IData, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        helloWrite(state: IData, action: PayloadAction<string>) {
            state.name = "hello " + action.payload;
        }
    }
});

export const { write, helloWrite } = TextReducer.actions;

export default TextReducer.reducer;



