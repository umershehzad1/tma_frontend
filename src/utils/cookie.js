// cookie.js

import Cookies from 'js-cookie';

export const setCookie = (key, value, options = {}) => {
    Cookies.set(key, value, {expires : 1});
};

export const getCookie = (key) => {
    console.log("Cookie key",  key);
    console.log("Cookie key value",  Cookies.get(key));
    return Cookies.get(key);
};

export const deleteCookie = (key) => {
    Cookies.remove(key);
};
