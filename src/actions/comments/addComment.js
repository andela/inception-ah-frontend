import axios from "axios";
import { API_URL } from "<constants>/constants";
import { SET_ERROR } from "<authActions>/types/types";
import { ADD_COMMENT, FETCH_ALL_COMMENTS } from "<commentActions>/types/types";
// import { FETCH_ARTICLES_BY_CATEGORY } from "./types/types";

export const postNewComment = (slug, content, history) => dispatch => {
  return axios
    .post(
      `${API_URL}/articles/${slug}/comments`,
      {
        content
      },
      {
        headers: {
          Authorization: window.localStorage.getItem("token")
        }
      }
    )
    .then(response => {
      dispatch({
        type: ADD_COMMENT,
        payload: response.data.comment
      });
    })
    .catch(errors => {
      if (errors.response) {
        switch (errors.response.status) {
          case 404:
            return history.push("/not-found");
          default:
            dispatch({
              type: SET_ERROR,
              payload: errors.response.message
            });
            break;
        }
      }
    });
};

export const fetchAllComments = slug => dispatch => {
  return axios
    .get(`${API_URL}/articles/${slug}/comments`)
    .then(response => {
      dispatch({
        type: FETCH_ALL_COMMENTS,
        payload: response.data.data
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors.response.message
      });
    });
};
