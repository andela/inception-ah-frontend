import axios from "axios";
import { API_URL } from "<constants>/constants";
import { SET_ERROR } from "<authActions>/types/types";
import {
  ADD_COMMENT_REACTION,
  ADD_ARTICLE_REACTION
} from "<reactionActions>/types/types";
// import { FETCH_ARTICLES_BY_CATEGORY } from "./types/types";

export const addArticleReaction = (slug, reaction) => dispatch => {
  return axios
    .post(
      `${API_URL}/articles/${slug}/reaction`,
      {
        reaction
      },
      {
        headers: {
          Authorization: window.localStorage.getItem("token")
        }
      }
    )
    .then(response => {
      const { articleNumberOfLikes, articleNumberOfDislikes } = response.data;
      dispatch({
        type: ADD_ARTICLE_REACTION,
        payload: {
          articleNumberOfLikes,
          articleNumberOfDislikes
        }
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors.response.message
      });
    });
};

export const addCommentReaction = (slug, commentId, reaction) => dispatch => {
  return axios
    .post(
      `${API_URL}/articles/${slug}/comments/${commentId}/reaction`,
      {
        reaction
      },
      {
        headers: {
          Authorization: window.localStorage.getItem("token")
        }
      }
    )
    .then(response => {
      const { commentNumberOfLikes, commentNumberOfDislikes } = response.data;

      dispatch({
        type: ADD_COMMENT_REACTION,
        payload: {
          commentNumberOfLikes,
          commentNumberOfDislikes
        }
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors.response.message
      });
    });
};

// export const fetchAllComments = slug => dispatch => {
//   return axios
//     .get(`${API_URL}/articles/${slug}/comments`)
//     .then(response => {
//       dispatch({
//         type: FETCH_ALL_COMMENTS,
//         payload: response.data.data
//       });
//     })
//     .catch(errors => {
//       dispatch({
//         type: SET_ERROR,
//         payload: errors.response.message
//       });
//     });
// };
