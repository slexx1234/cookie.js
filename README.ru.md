tasty-cookies
====================================================

**Язык:** Русский, [Английский](https://github.com/Alex5646/cookie.js/blob/master/README.md)

### Содержание

* [Быстрый старт](#%D0%91%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%82)
* [Совместимость с браузерами](#%D0%A1%D0%BE%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C-%D1%81-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B0%D0%BC%D0%B8)
* [Использование в CommonJS/Node](#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-commonjsnode)
* [Справочное руководство по API](#%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-api)
    * [Cookie.set(key, value, [options])][cookie-set]
    * [Cookie.get(keys...)][cookie-get]
    * [Cookie.remove(keys...)][cookie-remove]
    * [Cookie.keys()][cookie-keys]
    * [Cookie.all()][cookie-all]
    * [Cookie.clear()][cookie-clear]
    * [Cookie.getLength()][cookie-getlength]
    * [Cookie.noConflict()][cookie-noconflict]

### Быстрый старт

* [Загрузить последнюю версию](https://github.com/Alex5646/cookie.js/archive/master.zip)
* Установить через [Bower](http://bower.io/): `bower install tasty-cookies`
* Установить через [npm](https://www.npmjs.com/): `npm install tasty-cookies`

### Совместимость с браузерами

Полная поддержка (Общая доля 95,9%)

* Chrome 4+
* iOS Safari 4+
* UC Browser for Android 9.9+
* Firefox 3.5+
* Opera 10.5+
* Firefox for Android 32+
* Opera Mini 5+
* IE 8+
* Safari 4+

### Использование в CommonJS/Node

В среде, где нет родного объекта window, tasty-cookies будет экспортировать
фабричный метод, который принимает экземпляр окна. Например, с использованием
[jsdom](https://github.com/tmpvar/jsdom), вы могли бы сделать что-то вроде:

```js
var window = require('jsdom').jsdom().parentWindow;
var Cookie = require('tasty-cookies')(window);
```

Справочное руководство по API
----------------------------------------------------

### Методы

* [Cookie.set(key, value, [options])][cookie-set]
* [Cookie.get(keys...)][cookie-get]
* [Cookie.remove(keys...)][cookie-remove]
* [Cookie.keys()][cookie-keys]
* [Cookie.all()][cookie-all]
* [Cookie.clear()][cookie-clear]
* [Cookie.getLength()][cookie-getlength]
* [Cookie.noConflict()][cookie-noconflict]

[cookie-set]: #cookiesetkey-value-options
[cookie-get]: #cookiegetkeys
[cookie-remove]: #cookieremovekeys
[cookie-keys]: #cookiekeys
[cookie-all]: #cookieall
[cookie-clear]: #cookieclear
[cookie-getlength]: #cookiegetlength
[cookie-noconflict]: #cookienoconflict

**Пример:**

```js
Cookie.set({
        string: 'Привет, мир!',
        array: [1, 2, 3]
    })
    .set('object', {one: 1, two: 2});

console.log(Cookie.get('string'));
// -> 'Привет, мир!'

Cookie.remove('string');

console.log(Cookie.get('string'));
// -> undefined
console.log(Cookie.get('array'));
// -> [1, 2, 3]
console.log(Cookie.get('object'));
// -> {one: 1, two: 2}
```

### Cookie.set(key, value, [options])

Добавление cookies

[Исходный код][cookie-set-src]

**Аргументы:**

<table>
<thead>
    <tr>
        <th>Имя</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>key</td>
        <td>String, Object</td>
        <td>Ключ cookie</td>
    </tr>
    <tr>
        <td>[value]</td>
        <td>*</td>
        <td>Значение cookie</td>
    </tr>
    <tr>
        <td>[options]</td>
        <td>Object</td>
        <td>
            Настройки для cookie<br><strong>Свойства:</strong>
            <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Тип</th>
                    <th>Описание</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>[expires]</td>
                    <td>Number</td>
                    <td>Время истечения cookie (в днях)</td>
                </tr>
                <tr>
                    <td>[path]</td>
                    <td>String</td>
                    <td>Путь для cookie</td>
                </tr>
                <tr>
                    <td>[domain]</td>
                    <td>String</td>
                    <td>Адресс домена cookie</td>
                </tr>
                <tr>
                    <td>[secure]</td>
                    <td>Boolean</td>
                    <td>Передача cookie только через защищенное соединение.</td>
                </tr>
            </tbody>
            </table>
        </td>
    </tr>
</tbody>
</table>


**Возвращает:** Cookie

**Пример:**

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

Получение cookie

[Исходный код][cookie-get-src]

**Аргументы:**

| Имя     | Тип    | Описание     |
|---------|--------|--------------|
| keys... | String | Ключи cookie |

**Возвращает:** *

**Пример:**

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

Удаление cookies

[Исходный код][cookie-remove-src]

**Аргументы:**

| Имя     | Тип    | Описание     |
|---------|--------|--------------|
| keys... | String | Ключи cookie |

**Возвращает:** Cookie


**Пример:**

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

Получение всех ключей cookies

[Исходный код][cookie-keys-src]

**Возвращает:** Array

**Пример:**

```js
Cookie.set({
  one: 1,
  two: 2
});

console.log(Cookie.keys());
// -> ['one', 'two']
```

### Cookie.all()

Получение всех cookies

[Исходный код][cookie-all-src]

**Возвращает:** Object

**Пример:**

```js
Cookie.set({one: 1, two: 2});
console.log(Cookie.all());
// -> {one: 1, two: 2}
```

### Cookie.clear()

Удаление всех cookies

[Исходный код][cookie-clear-src]

**Возвращает:** Cookie

**Пример:**

```js
Cookie
  .set({one: 1, two: 2})
  .clear();
  
console.log(document.cookie);
// -> ''
```

### Cookie.getLength()

Получение колличества всего печенья

[Исходный код][cookie-getlength-src]

**Пример:**

```js
Cookie.set({one: 1, two: 2});

console.log(Cookie.getLength());
// -> 2
```

**Возвращает:** Number

### Cookie.noConflict()

Освобождение имени Cookie

[Исходный код][cookie-noconflict-src]

**Возвращает:** Cookie

**Пример:**

```js
var Cookie2 = Cookie.noConflict();

console.log(typeof Cookie2);
// -> 'function'

Cookie2.set('my_cookie', 5);

console.log(Cookie2.get('my_cookie'));
// -> 5
```

[cookie-set-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L54
[cookie-get-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L107
[cookie-remove-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L138
[cookie-keys-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L158
[cookie-all-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L174
[cookie-clear-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L189
[cookie-getlength-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L202
[cookie-noconflict-src]: https://github.com/Alex5646/cookie.js/blob/master/cookie.ts#L220
