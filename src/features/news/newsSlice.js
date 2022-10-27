import { createSlice } from '@reduxjs/toolkit'

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    dataArray: [],
    dataObject: {},
  },
  reducers: {
    saveNews: (state, action) => {
        // console.log('action', action.payload)
        state.dataArray = action.payload.dataArray
        state.dataObject = action.payload.dataObject
    },
    unSaveNews: (state, action) => {
        state.dataArray = action.payload.dataArray
        state.dataObject = action.payload.dataObject
    }
  }
})

// Action creators are generated for each case reducer function
export const { saveNews, unSaveNews } = newsSlice.actions

export default newsSlice.reducer;
