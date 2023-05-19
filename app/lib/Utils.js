import React, {useRef} from 'react';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  BASE_URL,
  DEFAULT_PROTOCOL,
  API_ENDPOINT,
  LOGOUT_IMAGE,
} from '../config/settings';

export const setConfig = async (key, value) => {
  global.username = true;
};

export const getConfig = async (key, value) => {
  try {
    const username = global.username;
    return username;
  } catch (e) {
    console.log(e);
  }
};

// export const setJwttoken = async token => {
//   await AsyncStorage.setItem('jwtToken', token);
// };

/**
 * Creates a node compatible backend URL from provided input
 * @param {string} nodeController
 * @param {string} nodeAction
 * @param {string} nodeModule
 * @param {string} proto
 */
export const createUrl = nodeAction => {
  let url;
  let protocol;
  protocol = `${DEFAULT_PROTOCOL}://`;
  url = BASE_URL;
  url = protocol + url + nodeAction;
  console.log(':: Url', url);
  return url;
};

/**
 * Sends an API call
 * @param {string} url
 * @param {object} params
 * @param {string} method
 * @param {number} timeout
 */
export const ajaxCall = async (
  url,
  params = {},
  showSpinner = true,
  method = 'POST',
  isAccessToken,
) => {
  if (showSpinner == true) {
    try {
      // if (showSpinner) {
      //   global.store.dispatch({
      //     type: UPDATE_LOADING_SPINNER_STATE,
      //     payload: true,
      //   });
      // }

      let response = '';
      const accesstoken = '266f1e1ea1f6c57b284cacd7972b26a40de0a1ec';
      if (isAccessToken == true && method == 'GET') {
        console.log('accesstoken', accesstoken);
        response = await fetch(
          url,
          {
            method: method,
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + accesstoken,
            },
          },
          (err, res) => {
            if (err) {
              return null;
            }
            return res;
          },
        );
      } else if (isAccessToken == true && method == 'POST') {
        response = await fetch(
          url,
          {
            method: method,
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + accesstoken,
            },
            body: JSON.stringify(params),
          },
          (err, res) => {
            if (err) {
              return null;
            }
            return res;
          },
        );
      }

      if (response !== null) {
        if (response.status === 404) {
          console.log('no result', response);
        }

        if (response.status === 401) {
          console.log('401', response);
          return;
        }
      
        let responseJson = await response.json();
        console.log('responce1', responseJson);
        if (responseJson.success || responseJson.result) {
         
          return responseJson;
        } else {
          if (responseJson.maintenance) {
            return responseJson;
          } else {
            return responseJson;
          }
        }
      } else {
        return {success: false, info: 'error.system'};
      }
    } catch (err) {
      console.log(':: error - ' + err, url, params);
      // if (showSpinner) {
      //   global.store.dispatch({
      //     type: UPDATE_LOADING_SPINNER_STATE,
      //     payload: false,
      //   });
      // }

      return {success: false, info: 'error.system'};
    }
  }
};
