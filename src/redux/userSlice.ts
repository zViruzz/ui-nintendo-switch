import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserType {
  username: string
  avatarUrl: string
  email: string
}

const initialState: UserType = {
  username: 'null',
  avatarUrl: '',
  email: 'nintendo@gmail.com'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { username, avatarUrl } = action.payload
      state.username = username
      state.avatarUrl = avatarUrl
    },
    changeAvatar: (state, action) => {
      state.avatarUrl = action.payload
    },
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    }
  }
})

export const { addUser, changeAvatar, changeUsername } = userSlice.actions

export default userSlice.reducer
