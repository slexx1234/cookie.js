/**
 * Class for cookie
 *
 * @example
 * Cookie
 *   .set({
 *     string: 'Hello Wold!',
 *     array: [1, 2, 3]
 *   })
 *   .set('object', {one: 1, two: 2});
 *
 * console.log(Cookie.get('string'));
 * // -> 'Hello Wold!'
 *
 * console.log(Cookie.get('string'));
 * // -> undefined
 * console.log(Cookie.get('array'));
 * // -> [1, 2, 3]
 * console.log(Cookie.get('object'));
 * // -> {one: 1, two: 2}
 */
var Cookie = (function () {
    function Cookie() {
    }
    /**
     * Set cookies
     *
     * @param {String|Object} key
     * @param {*} [value]
     * @param {Object} [options]
     * @param {Number} [options.expires] Cookie expiration time
     * @param {String} [options.path] Path for cookie
     * @param {String} [options.domain] Domain for cookie
     * @param {Boolean} [options.secure] Transfer cookies only over a secure connection.
     * @returns {Cookie}
     *
     * @example
     * Cookie.set('my_cookie', 5);
     * console.log(document.cookie)
     * // -> 'my_cookie=5'
     *
     * // -- OR --
     *
     * Cookie.set({
     *   one: 1,
     *   two: 2
     * });
     *
     * console.log(document.cookie);
     * // -> 'one=1; two=2'
     */
    Cookie.set = function (key, value, options) {
        if (options === void 0) { options = {}; }
        if (typeof key === 'object') {
            for (var name in key) {
                this.set(name, key[name]);
            }
            return Cookie;
        }
        var expires = options.expires;
        if (typeof expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
        }
        value = encodeURIComponent(JSON.stringify(value));
        document.cookie =
            key + '=' + value +
                (options.expires ? '; expires=' + options.expires.toUTCString() : '') +
                (options.path ? '; path=' + options.path : '') +
                (options.domain ? '; domain=' + options.domain : '') +
                (options.secure ? '; secure' : '');
        return this;
    };
    /**
     * Getting cookies
     *
     * @param {String} keys...
     * @example
     * Cookie.set('my_cookie', 5);
     * console.log(Cookie.get('my_cookie'));
     * // -> 5
     *
     * Cookie.set('my_cookie', [1, 2, 3]);
     * console.log(Cookie.get('my_cookie'));
     * // -> [1, 2, 3]
     *
     *
     * Cookie.set({one: 1, two: 2});
     * console.log(Cookie.get('one', 'two'));
     * // -> {one: 1, two: 2}
     */
    Cookie.get = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i - 0] = arguments[_i];
        }
        var result = {};
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            var matches = document.cookie.match(new RegExp('(?:^|; )' + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
            result[key] = matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
        }
        var resultKeys = Object.keys(result);
        return resultKeys.length == 1 ? result[resultKeys[0]] : result;
    };
    /**
     * Remove cookies
     *
     * @param {String} keys...
     * @returns {Cookie}
     *
     * @example
     * Cookie.set('my_cookie', 5);
     * console.log(document.cookie)
     * // -> 'my_cookie=5'
     *
     * Cookie.remove('my_cookie')
     * console.log(document.cookie)
     * // -> ''
     *
     * Cookie.set({one: 1, two: 2});
     * Cookie.remove('one', 'two');
     * console.log(document.cookie)
     * // -> ''
     */
    Cookie.remove = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i - 0] = arguments[_i];
        }
        for (var _a = 0, keys_2 = keys; _a < keys_2.length; _a++) {
            var key = keys_2[_a];
            this.set(key, '', { expires: -1 });
        }
        return Cookie;
    };
    /**
     * Getting all keys cookies
     *
     * @returns {Array}
     * @example
     * Cookie.set({
     *   one: 1,
     *   two: 2
     * });
     *
     * console.log(Cookie.keys());
     * // -> ['one', 'two']
     */
    Cookie.keys = function () {
        var keys = [];
        for (var _i = 0, _a = document.cookie.split('; '); _i < _a.length; _i++) {
            var cookie = _a[_i];
            keys.push(cookie.split('=')[0]);
        }
        return keys;
    };
    /**
     * Getting all cookies
     *
     * @returns {Object}
     * @example
     * Cookie.set({one: 1, two: 2});
     * console.log(Cookie.all());
     * // -> {one: 1, two: 2}
     */
    Cookie.all = function () {
        return this.get.apply(this, this.keys());
    };
    /**
     * Clear all cookies
     *
     * @returns {Cookie}
     * @example
     * Cookie
     *   .set({one: 1, two: 2})
     *   .clear();
     *
     * console.log(document.cookie);
     *
     * // -> ''
     */
    Cookie.clear = function () {
        return this.remove.apply(this, this.keys());
    };
    return Cookie;
}());

//# sourceMappingURL=cookie.js.map
