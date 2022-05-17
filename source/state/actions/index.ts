import axios from 'axios';
import {Dispatch} from 'react';

import {CommentsAction, CommentsActionType} from './actionTypes';

export const getComments = (post_id: string) => {
  return async (dispatch: Dispatch<CommentsAction>) => {
    dispatch({
      type: CommentsActionType.GET_POST_COMMENTS_PENDING,
    });

    try {
      // call api to get comments for this post
      const {data} = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`,
      );

      dispatch({
        type: CommentsActionType.GET_POST_COMMENTS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: CommentsActionType.GET_POST_COMMENTS_FAIL,
        payload: error.message,
      });
    }
  };
};
