import axios from "axios";
import request from "<api>/request";
import { SET_ERROR } from "<authActions>/types/types";
import {
  LOAD_USER_FOLLOWERS,
  LOAD_USERS_FOLLOWED,
  LOAD_USER_ARTICLES,
  FOLLOW_OR_UNFOLLOW_USER,
  RESOURCE_NOT_FOUND,
  NOT_AUTHORIZED
} from "<profileActions>/types/types";
import { API_URL_DEV } from "<constants>/constants";
import setAuthToken from "<utils>/setAuthToken";

export const loadUserArticles = userId => dispatch => {
  setAuthToken();
  return axios({
    url: `${API_URL_DEV}/articles/${userId}/feed`,
    method: "GET"
  })
    .then(response => {
      dispatch({
        type: LOAD_USER_ARTICLES,
        payload: response.data.data
      });
    })
    .catch(errors => {
      if (errors.response) {
        switch (errors.response) {
          case "404":
            return dispatch({
              type: RESOURCE_NOT_FOUND
            });
          case "401":
            return dispatch({
              type: NOT_AUTHORIZED
            });
          default:
            break;
        }
      }
      dispatch({
        type: SET_ERROR,
        payload: errors
      });
    });
};

export const loadUserFollowers = () => dispatch => {
  setAuthToken();
  return request(`${API_URL_DEV}/profiles/follow`, "GET")
    .then(response => {
      dispatch({
        type: LOAD_USER_FOLLOWERS,
        payload: response.data
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors
      });
    });
};

export const loadUserFollowing = () => dispatch => {
  setAuthToken();
  return request(`${API_URL_DEV}/profiles/follower`, "GET")
    .then(response => {
      dispatch({
        type: LOAD_USERS_FOLLOWED,
        payload: response.data
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors
      });
    });
};

export const followOrUnfollowUser = userId => dispatch => {
  setAuthToken();
  return request(`${API_URL_DEV}/profiles/${userId}/follow`, "POST")
    .then(response => {
      dispatch({
        type: FOLLOW_OR_UNFOLLOW_USER,
        payload: response.data
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors
      });
    });
};
