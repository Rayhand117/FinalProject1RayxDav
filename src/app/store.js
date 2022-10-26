import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/news/newsSlice';

export default configureStore({
  reducer: {
    news: newsReducer
  }
})