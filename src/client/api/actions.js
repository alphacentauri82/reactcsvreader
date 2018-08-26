import {
  createAction
} from 'redux-actions';
import api from 'api/index';
import {
  showModal
} from 'containers/ModalsLayout/actions';
import ErrorWindow from 'components/ErrorWindow';

function* createGuidGenerator() {
  let i = 1;
  while (i) {
    yield i++;
  }
}

const guidGenerator = createGuidGenerator();

export const API_REQUEST_STARTED = 'API_REQUEST_STARTED';
export const apiRequestStarted = createAction(API_REQUEST_STARTED);
export const API_REQUEST_FINISHED = 'API_REQUEST_FINISHED';
export const apiRequestFinished = createAction(API_REQUEST_FINISHED);

export const API_DATA_USERS_LOADED = 'API_DATA_USERS_LOADED';
export const apiDataUsersLoaded = createAction(API_DATA_USERS_LOADED);

export function apiGetUsers(callback) {
  return function dispatchApiGetUsers(dispatch) {
    const requestId = guidGenerator.next().value;
    dispatch(apiRequestStarted({
      requestId
    }));
    return api
      .getUsers()
      .then((data) => {
        dispatch(apiDataUsersLoaded(data));
        dispatch(apiRequestFinished({
          requestId
        }));
        if (callback) {
          callback();
        }
      })
      .catch((error) => {
        dispatch(apiRequestFinished({
          requestId,
          error
        }));
        dispatch(showModal({
          key: ErrorWindow.NAME,
          props: {
            title: error.title,
            message: error.message,
            explanation: `URL: ${error.url} ${error.statusCode}`
          }
        }));
      });
  }
}

export function uploadFiles(data, callback) {
  return function dispatchApiUploadFile(dispatch) {
    const requestId = guidGenerator.next().value;
    dispatch(apiRequestStarted({
      requestId
    }));
    return api
      .uploadFiles(data)
      .then(() => {
        dispatch(apiGetUsers());
        dispatch(apiRequestFinished({
          requestId
        }));
        if (callback) {
          callback();
        }
      })
      .catch((error) => {
        dispatch(apiRequestFinished({
          requestId,
          error
        }));
        dispatch(showModal({
          key: ErrorWindow.NAME,
          props: {
            title: error.title,
            message: error.message,
            explanation: `URL: ${error.url} ${error.statusCode}`
          }
        }));
      });
  }
}