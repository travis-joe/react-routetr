/**
 * Created by Administrator on 2016/8/15.
 */
'use strict';

import fetch from 'isomorphic-fetch';
import {CATS_GET_ONE, CATS_GET_ONE_SUCCESS, CATS_GET_ONE_ERROR} from '../constants/actions';

export function getCat(id) {
    return {
        type: CATS_GET_ONE,
        id
    };
}

export function getCatSuccess(cat) {
    return {
        type: CATS_GET_ONE_SUCCESS,
        cat
    };
}

export function getCatError(error) {
    return {
        type: CATS_GET_ONE_ERROR,
        error
    };
}

export function sendGetCatRequest(id) {
    return function (dispatch) {
        dispatch(getCat(id));
        return fetch(`http://127.0.0.1:3000/cats/${id}`)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then(function (json) {
                return dispatch(getCatSuccess(json));
            })
            .catch(function (error) {
                return dispatch(getCatError(error));
            });
    };
}