/**
 * Created by Administrator on 2016/8/15.
 */
'use strict';

import fetch from 'isomorphic-fetch';
import {CATS_GET_ALL, CATS_GET_ALL_SUCCESS, CATS_GET_ALL_ERROR} from '../constants/actions';

export function getCats() {
    return {
        type: CATS_GET_ALL
    };
}

export function getCatsSuccess(cats) {
    return {
        type: CATS_GET_ALL_SUCCESS,
        cats
    };
}

export function getCatsError(error) {
    return {
        type: CATS_GET_ALL_ERROR,
        error
    };
}

export function sendGetCatsRequest() {
    return function (dispatch) {
        dispatch(getCats());
        return fetch('http://127.0.0.1:3000/cats')
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then(function (json) {
                return dispatch(getCatsSuccess(json));
            })
            .catch(function (error) {
                return dispatch(getCatsError(error));
            });
    };
}