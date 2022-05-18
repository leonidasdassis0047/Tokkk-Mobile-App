import {CommentsAction} from './actionTypes';

export interface CommentInterface {
  post_id: string;
  id: number;
  name: string;
  email: string;
  body: string;
}

type CommentsState = {
  comments: CommentInterface[];
  loading: boolean;
  error: string | null;
};

const initialCommentsState: CommentsState = {
  comments: [],
  error: null,
  loading: false,
};

export const commentsReducer = (
  state = initialCommentsState,
  action: CommentsAction,
): CommentsState => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
