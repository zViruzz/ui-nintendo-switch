import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import marioProfile from '../assets/ns-mario-profile.jpg'
import mario from '../assets/ns-mario-profile-pg.png'

interface UserType {
  username: string
  avatarUrl: string
  background: string
  character: string
  email: string
}

const initialState: UserType = {
  username: 'null',
  avatarUrl: marioProfile,
  background: '#ff0000',
  character: mario,
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
    changeBackground: (state, action) => {
      console.log('🚀 ~  action.payload:', action.payload)
      state.background = action.payload
    },
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    }
  }
})

export const { addUser, changeAvatar, changeUsername, changeBackground } = userSlice.actions

export default userSlice.reducer
