import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    users:[]
  },
  reducers: {
    postUser: (state,action) => {
      state.users.push(action.payload)
    }
  },
})

export const { postUser } = userSlice.actions

export default userSlice.reducer