import { COMMENTS } from '../../app/shared/COMMENTS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    commentsArray : COMMENTS
};

const commentSlice= createSlice({
    name: 'comments',
    initialState
});
export const commentsReducer = commentSlice.reducer;

export const selectCommentsByCampsiteId = (campsiteId) => (state) =>{
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};