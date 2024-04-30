import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import mario from '../assets/ns-mario-profile-pg.png'

export interface UserType {
  username: string
  background: string
  character: string
  email: string
}

const initialState: UserType = {
  username: 'Nintendo',
  background: '#ff0000',
  character: mario,
  email: 'nintendo@gmail.com'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeCharacter: (state, action) => {
      state.character = action.payload
    },
    changeBackground: (state, action) => {
      state.background = action.payload
    },
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    }
  }
})

export const { changeCharacter, changeUsername, changeBackground } = userSlice.actions

export default userSlice.reducer
