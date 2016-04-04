cookie.js
====================================================

Class for cookie
----------------------------------------------------

**Example:**

```js
Cookie
    .set({
        string: 'Hello Wold!',
        array: [1, 2, 3]
    })
    .set('object', {one: 1, two: 2});

console.log(Cookie.get('string'));
// -> 'Hello Wold!'

Cookie.remove('string');

console.log(Cookie.get('string'));
// -> undefined
console.log(Cookie.get('array'));
// -> [1, 2, 3]
console.log(Cookie.get('object'));
// -> {one: 1, two: 2}
```

### &#8249;static&#8250; set(key, value, [options])

Set cookies

**Source:** [JavaScript][1], [TypeScript][2]

[1]: https://github.com/Alex5646/cookie.js/blob/master/cookie.js#L53
[2]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L51

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

### &#8249;static&#8250; get(keys...)

Getting cookies

**Source:** [JavaScript][3], [TypeScript][4]

[3]: https://github.com/Alex5646/cookie.js/blob/master/cookie.js#L92
[4]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L105

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

### &#8249;static&#8250; remove(keys...)

Remove cookies

**Source:** [JavaScript][5], [TypeScript][6]

[5]: https://github.com/Alex5646/cookie.js/blob/master/cookie.js#L123
[6]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L138

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

### &#8249;static&#8250; keys()

Getting all keys cookies

**Source:** [JavaScript][7], [TypeScript][8]

[7]: https://github.com/Alex5646/cookie.js/blob/master/cookie.js#L146
[8]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L158

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

### &#8249;static&#8250; all()

Getting all cookies

**Source:** [JavaScript][9], [TypeScript][10]

[9]: https://github.com/Alex5646/cookie.js/blob/master/cookie.js#L162
[10]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L174

**Return:** Object

**Example:**

```js
Cookie.set({one: 1, two: 2});
console.log(Cookie.all());
// -> {one: 1, two: 2}
```

### &#8249;static&#8250; clear()

Clear all cookies

**Source:** [JavaScript][11], [TypeScript][12]

[11]: https://github.com/Alex5646/cookie.js/blob/master/cookie.js#L176
[12]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L189

**Return:** Cookie

**Example:**

```js
Cookie
  .set({one: 1, two: 2})
  .clear();
  
console.log(document.cookie);
// -> ''
```

