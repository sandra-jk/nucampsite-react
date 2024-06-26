import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';
import logger from 'redux-logger';
import { userReducer } from '../features/users/userSlice';
export const store = configureStore({
    reducer: {
        
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        user: userReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});