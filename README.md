tasty-cookies
====================================================

**Language:** [Russian](https://github.com/Alex5646/cookie.js/blob/master/README.ru.md), English

### Table of contents

* [Quick start](#quick-start)
* [Browser Compatibility](#browser-compatibility)
* [Use in CommonJS/Nodey](#use-in-commonjsnode)
* [API Reference](#api-reference)
    * [Cookie.set(key, value, [options])][cookie-set]
    * [Cookie.get(keys...)][cookie-get]
    * [Cookie.remove(keys...)][cookie-remove]
    * [Cookie.keys()][cookie-keys]
    * [Cookie.all()][cookie-all]
    * [Cookie.clear()][cookie-clear]

### Quick start

* [Download the latest release](https://github.com/Alex5646/cookie.js/archive/master.zip)
* Install with [Bower](http://bower.io/): `bower install tasty-cookies`
* Install with [npm](https://www.npmjs.com/): `npm install tasty-cookies`

### Browser Compatibility

Full support (95.9% global browser share)

* Chrome 4+
* iOS Safari 4+
* UC Browser for Android 9.9+
* Firefox 3.5+
* Opera 10.5+
* Firefox for Android 32+
* Opera Mini 5+
* IE 8+
* Safari 4+

### Use in CommonJS/Node

In environments where there is no native window object, tasty-cookies will export 
a factory method that accepts a window instance. For example, using 
[jsdom](https://github.com/tmpvar/jsdom), you might do something like:

```js
var window = require('jsdom').jsdom().parentWindow;
var Cookie = require('tasty-cookies')(window);
```

API Reference
----------------------------------------------------

#### Methods

* [Cookie.set(key, value, [options])][cookie-set]
* [Cookie.get(keys...)][cookie-get]
* [Cookie.remove(keys...)][cookie-remove]
* [Cookie.keys()][cookie-keys]
* [Cookie.all()][cookie-all]
* [Cookie.clear()][cookie-clear]

[cookie-set]: #cookiesetkey-value-options
[cookie-get]: #cookiegetkeys
[cookie-remove]: #cookieremovekeys
[cookie-keys]: #cookiekeys
[cookie-all]: #cookieall
[cookie-clear]: #cookieclear

**Example:**

```js
Cookie.set({
        string: 'Hello, World!',
        array: [1, 2, 3]
    })
    .set('object', {one: 1, two: 2});

console.log(Cookie.get('string'));
// -> 'Hello, World!'

Cookie.remove('string');

console.log(Cookie.get('string'));
// -> undefined
console.log(Cookie.get('array'));
// -> [1, 2, 3]
console.log(Cookie.get('object'));
// -> {one: 1, two: 2}
```

### Cookie.set(key, value, [options])

Set cookies

[Source][cookie-set-src]

**Arguments:**

<table>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>key</td>
        <td>String, Object</td>
        <td>Cookie key</td>
    </tr>
    <tr>
        <td>[value]</td>
        <td>*</td>
        <td>Cookie value</td>
    </tr>
    <tr>
        <td>[options]</td>
        <td>Object</td>
        <td>
            Options for cookie<br><strong>Properties:</strong>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>[expires]</td>
                    <td>Number</td>
                    <td>Cookie expiration time</td>
                </tr>
                <tr>
                    <td>[path]</td>
                    <td>String</td>
                    <td>Path for cookie</td>
                </tr>
                <tr>
                    <td>[domain]</td>
                    <td>String</td>
                    <td>Domain for cookie</td>
                </tr>
                <tr>
                    <td>[secure]</td>
                    <td>Boolean</td>
                    <td>Transfer cookies only over a secure connection.</td>
                </tr>
            </tbody>
            </table>
        </td>
    </tr>
</tbody>
</table>


**Return:** Cookie

**Example:**

```js
Cookie.set('my_cookie', 5);
console.log(document.cookie)
// -> 'my_cookie=5'

// -- OR --

Cookie.set({
  one: 1,
  two: 2
});

console.log(document.cookie);
// -> 'one=1; two=2'
```

### Cookie.get(keys...)

Getting cookies

[Source][cookie-get-src]

**Arguments:**

| Name    | Type   | Description |
|---------|--------|-------------|
| keys... | String | Cookie keys |

**Return:** *

**Example:**

```js
Cookie.set('my_cookie', 5);
console.log(Cookie.get('my_cookie'));
// -> 5

Cookie.set('my_cookie', [1, 2, 3]);
console.log(Cookie.get('my_cookie'));
// -> [1, 2, 3]

Cookie.set({one: 1, two: 2});
console.log(Cookie.get('one', 'two'));
// -> {one: 1, two: 2}
```

### Cookie.remove(keys...)

Remove cookies

[Source][cookie-remove-src]

**Arguments:**

| Name    | Type   | Description |
|---------|--------|-------------|
| keys... | String | Cookie keys |

**Return:** Cookie


**Example:**

```js
Cookie.set('my_cookie', 5);
console.log(document.cookie)
// -> 'my_cookie=5'

Cookie.remove('my_cookie')
console.log(document.cookie)
// -> ''

Cookie.set({one: 1, two: 2});
Cookie.remove('one', 'two');
console.log(document.cookie)
// -> ''
```

### Cookie.keys()

Getting all keys cookies

[Source][cookie-keys-src]

**Return:** Array

**Example:**

```js
Cookie.set({
  one: 1,
  two: 2
});

console.log(Cookie.keys());
// -> ['one', 'two']
```

### Cookie.all()

Getting all cookies

[Source][cookie-all-src]

**Return:** Object

**Example:**

```js
Cookie.set({one: 1, two: 2});
console.log(Cookie.all());
// -> {one: 1, two: 2}
```

### Cookie.clear()

Clear all cookies

[Source][cookie-clear-src]

**Return:** Cookie

**Example:**

```js
Cookie
  .set({one: 1, two: 2})
  .clear();
  
console.log(document.cookie);
// -> ''
```

[cookie-set-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L55
[cookie-get-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L108
[cookie-remove-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L141
[cookie-keys-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L161
[cookie-all-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L177
[cookie-clear-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L192
