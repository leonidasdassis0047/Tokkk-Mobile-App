import {CommentsAction, CommentsActionType} from '../actions/actionTypes';

export interface CommentInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface State {
  comments: CommentInterface[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  comments: [],
  error: null,
  loading: false,
};
export const commentsReducer = (
  state = initialState,
  action: CommentsAction,
): State => {
  switch (action.type) {
    case CommentsActionType.GET_POST_COMMENTS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case CommentsActionType.GET_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };

    case CommentsActionType.GET_POST_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
