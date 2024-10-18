import {configureStore,createSlice} from '@reduxjs/toolkit'

const listSlice = createSlice({
  name:'todoList',
  initialState:[],
  reducers:{
    addTodo:(state,action)=>{
    state.push(action.payload);
    },
    deleteTodo:(state,action)=>{
     return state.filter((item)=> item.task!=action.payload)
    }
  }
})

const todoListStore = configureStore({
  reducer:{
  todoList:listSlice.reducer
  }
})

export const todoActions = listSlice.actions;
export default todoListStore;