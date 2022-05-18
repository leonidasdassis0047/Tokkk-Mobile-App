import axios from 'axios';
import {Dispatch} from 'redux';
import {CommentsAction, CommentsActionType} from './actionTypes';

// action for fetching
const getPostComments = (post_id: string) => {
  return async (dispatch: Dispatch<CommentsAction>): Promise<void> => {
    dispatch({
      type: CommentsActionType.GET_POST_COMMENTS_PENDING,
    });

    try {
      const {data} = await axios.get('some url');
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
