/**
 * Класс для работы с cookies
 *
 * @class Cookie
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
     * Установка cookie
     *
     * @method Cookie#set
     * @param {String|Object} key Ключ, можно передать объект в качесте этого параметра.
     * @param {*} [value] Значение
     * @param {Object} [options] Настройки
     * @param {Number} [options.expires] Время истечения cookie
     * @param {String} [options.path] Путь для cookie
     * @param {String} [options.domain] Домен для cookie
     * @param {Boolean} [options.secure] Если true, то пересылать cookie только по защищенному соединению
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
     * Получение cookie
     *
     * @method Cookie#get
     * @param {String} keys... Ключ
     * @example
     * Cookie.set('my_cookie', 5);
     * console.log(Cookie.get('my_cookie'));
     * // -> 5
     *
     * Cookie.set('my_cookie', [1, 2, 3]);
     * console.log(Cookie.get('my_cookie'));
     * // -> [1, 2, 3]
     */
    Cookie.get = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i - 0] = arguments[_i];
        }
        var result = [];
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            var matches = document.cookie.match(new RegExp('(?:^|; )' + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
            result.push(matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined);
        }
        return result.length == 1 ? result[0] : result;
    };
    /**
     * Удаление cookie
     *
     * @method Cookie#remove
     * @param {String} keys... Ключ
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
     * Получение всех ключей
     *
     * @method Cookie#keys
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
     * Получение всех cookie
     *
     * @method Cookie#all
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
     * Удаление всех cookie
     *
     * @method Cookie#clear
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
