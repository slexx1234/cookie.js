cookie.js
====================================================

Class for cookie
----------------------------------------------------

** Example: **

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

### <static> set(key, value, [options])

** Arguments: **

| Name    | Type           | Description        |
|---------|----------------|--------------------|
| key     | String, Object | Cookie key         |
| value   | *              | Cookie value       |
| options | Object         | Options for cookie |
