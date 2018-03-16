/**
 * Created by nadiia on 3/16/18.
 */

import {
    api
} from './config';

export function apiCall({method, path, params}): Promise {

    const url = `${api.endpoint}${path}`;
    const config = {};
    config.method = method;
    config.headers = {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    };

    if (params !== undefined) {
        config.body = JSON.stringify(params);
    }

    return fetch(url, config)
        .then((response) => {
            return response.text();
        })
        .then((text: string) => {
            return new Promise((resolve) => {
                resolve(JSON.parse(text));
            });
        })
        .catch((e) => {
            throw e;
        });
}