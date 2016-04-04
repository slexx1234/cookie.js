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

console.log(Cookie.get('string'));
// -> undefined
console.log(Cookie.get('array'));
// -> [1, 2, 3]
console.log(Cookie.get('object'));
// -> {one: 1, two: 2}
```

### &#8249;static&#8250; set(key, value, [options])

Set cookies

**Arguments:**

| Name      | Type           | Description                                                           |
|-----------|----------------|-----------------------------------------------------------------------|
| key       | String, Object | Cookie key                                                            |
| [value]   | *              | Cookie value                                                          | 
| [options] | Object         | Options for cookie                                                    |
|           |                | **Properties:**                                                       |
|           |                | Name      | Type    | Description                                     |
|           |                |-----------|---------|-------------------------------------------------|
|           |                | [expires] | Number  | Cookie expiration time                          |
|           |                | [path]    | String  | Path for cookie                                 |
|           |                | [domain]  | String  | Domain for cookie                               |
|           |                | [secure]  | Boolean | Transfer cookies only over a secure connection. |

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
