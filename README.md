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
    <tr>
    <tr>
      <td>value</td>
      <td>*</td>
      <td>Cookie value</td>
    <tr>
    <tr>
      <td>[options]</td>
      <td>Object</td>
      <td>
        Options for cookie
        
        **Properties:**
        
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
            <tr>
            <tr>
              <td>[path]</td>
              <td>String</td>
              <td>Path for cookie</td>
            <tr>
            <tr>
              <td>[domain]</td>
              <td>String</td>
              <td>Domain for cookie</td>
            <tr>
            <tr>
              <td>[secure]</td>
              <td>Boolean</td>
              <td>Transfer cookies only over a secure connection.</td>
            <tr>
          </tbody>
        <table>
      </td>
    <tr>
  </tbody>
<table>

**example:**

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



