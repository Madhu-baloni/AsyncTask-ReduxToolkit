import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

//create a action for fetching the data
export const fetchTodos = createAsyncThunk("fetchTodos", async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
});

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        isLoading : false,
        data : null,
        isError : false,
    },
    extraReducers : (builder) => {
      builder.addCase(fetchTodos.pending,(state)=>{
        state.isLoading = true;
      })
      builder.addCase(fetchTodos.fulfilled, (state,action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      builder.addCase(fetchTodos.rejected, (state,action) => {
        console.log('Error',action.payload);
        state.isError = true;
      })
    }
})

export const todoAction = todoSlice.actions;

export default todoSlice;