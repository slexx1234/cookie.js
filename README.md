cookie.js
====================================================

### Table of contents

* Quick start
* Table of contents
* Use in jQuery
* Use in CommonJS/Node
* API Reference

### Quick start

* Install with [Bower](http://bower.io/): `bower install cookie.js`
* Install with [npm](https://www.npmjs.com/): `npm install cookie.js`

### Use in jQuery

jQuery support! If you have connected jQuery you can use an alias **$.cookie**

```js
$.cookie.set('my_cookie', 'Hello, World!');
$.cookie.get('my_cookie');
// -> 'Hello, World!'
```

### Use in CommonJS/Node

In environments where there is no native window object, Cookie.js will export 
a factory method that accepts a window instance. For example, using 
[jsdom](https://github.com/tmpvar/jsdom), you might do something like:

```js
var window = require('jsdom').jsdom().parentWindow;
var Cookie = require('cookie.js')(window);
```

API Reference
----------------------------------------------------

#### Methods

* Cookie.set(key, value, [options])
* Cookie.get(keys...)
* Cookie.remove(keys...)
* Cookie.keys()
* Cookie.clear()
* Cookie.all()

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

**Source:** [JavaScript][1], [TypeScript][2]

[1]: 
[2]: 

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

**Source:** [JavaScript][3], [TypeScript][4]

[3]: 
[4]: 

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

**Source:** [JavaScript][5], [TypeScript][6]

[5]: 
[6]: 

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

**Source:** [JavaScript][7], [TypeScript][8]

[7]: 
[8]: 

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

**Source:** [JavaScript][9], [TypeScript][10]

[9]: 
[10]: 

**Return:** Object

**Example:**

```js
Cookie.set({one: 1, two: 2});
console.log(Cookie.all());
// -> {one: 1, two: 2}
```

### Cookie.clear()

Clear all cookies

**Source:** [JavaScript][11], [TypeScript][12]

[11]: 
[12]: 

**Return:** Cookie

**Example:**

```js
Cookie
  .set({one: 1, two: 2})
  .clear();
  
console.log(document.cookie);
// -> ''
```

