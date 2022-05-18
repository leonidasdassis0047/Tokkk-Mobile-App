import {CommentInterface} from './reducer';

export enum CommentsActionType {
  GET_POST_COMMENTS_PENDING = 'GET_POST_COMMENTS_PENDING',
  GET_POST_COMMENTS_SUCCESS = 'GET_POST_COMMENTS_SUCCESS',
  GET_POST_COMMENTS_FAIL = 'GET_POST_COMMENTS_FAIL',
}

interface CommentsActionPending {
  type: CommentsActionType.GET_POST_COMMENTS_PENDING;
}

interface CommentsActionSuccess {
  type: CommentsActionType.GET_POST_COMMENTS_SUCCESS;
  payload: CommentInterface[];
}

interface CommentsActionFail {
  type: CommentsActionType.GET_POST_COMMENTS_FAIL;
  payload: string;
}

export type CommentsAction =
  | CommentsActionPending
  | CommentsActionFail
  | CommentsActionSuccess;
