/*global angular*/

/*
 * An HTTP Plugin for PhoneGap.
 */

var exec = require('cordova/exec');

var httpsSpc = {
    post: function(url, params, headers, success, failure) {
        return exec(success, failure, "CordovaHttpsSpc", "post", [url, params, headers]);
    },
    put: function(url, params, headers, success, failure) {
        return exec(success, failure, "CordovaHttpsSpc", "put", [url, params, headers]);
    },
    get: function(url, params, headers, success, failure) {
        return exec(success, failure, "CordovaHttpsSpc", "get", [url, params, headers]);
    },
    head: function(url, params, headers, success, failure) {
        return exec(success, failure, "CordovaHttpsSpc", "head", [url, params, headers]);
    }
};

module.exports = httpsSpc;
window.cordovaHTTP = httpsSpc;
