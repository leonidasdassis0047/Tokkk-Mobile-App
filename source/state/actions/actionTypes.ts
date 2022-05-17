import {CommentInterface} from '../reducers/commentsReducer';

export enum CommentsActionType {
  GET_POST_COMMENTS_PENDING = 'GET_POST_COMMENTS_PENDING',
  GET_POST_COMMENTS_SUCCESS = 'GET_POST_COMMENTS_SUCCESS',
  GET_POST_COMMENTS_FAIL = 'GET_POST_COMMENTS_FAIL',
}

interface commentActionPending {
  type: CommentsActionType.GET_POST_COMMENTS_PENDING;
}

interface commentActionSuccess {
  type: CommentsActionType.GET_POST_COMMENTS_SUCCESS;
  payload: CommentInterface[];
}

interface commentActionFail {
  type: CommentsActionType.GET_POST_COMMENTS_FAIL;
  payload: string;
}

export type CommentsAction =
  | commentActionPending
  | commentActionSuccess
  | commentActionFail;
