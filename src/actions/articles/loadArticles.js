import axios from "axios";
import {
  FETCH_ARTICLE_BY_SLUG,
  FETCH_ALL_ARTICLES
} from "<articleActions>/types/types";
import { API_URL } from "<constants>/constants";
import { SET_ERROR } from "<authActions>/types/types";
import { FETCH_ARTICLES_BY_CATEGORY } from "./types/types";

export const fetchArticlesBySlug = (slug, history) => dispatch => {
  return axios
    .get(`${API_URL}/articles/${slug}`)
    .then(response => {
      dispatch({
        type: FETCH_ARTICLE_BY_SLUG,
        payload: response.data.article
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

export const fetchArticlesByCategory = (categoryId, history) => dispatch => {
  return axios
    .get(`${API_URL}/categories/${categoryId}/articles`)
    .then(response => {
      dispatch({
        type: FETCH_ARTICLES_BY_CATEGORY,
        payload: response.data.articles
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

export const fetchAllArticles = () => dispatch => {
  return axios
    .get(`${API_URL}/articles`)
    .then(response => {
      dispatch({
        type: FETCH_ALL_ARTICLES,
        payload: response.data.articles
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors.response.message
      });
    });
};
