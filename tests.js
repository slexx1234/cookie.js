(function() {
    QUnit.test('Cookie.set()', function (assert) {
        Cookie.set('my_cookie', 5);
        assert.equal(document.cookie, 'my_cookie=5', 'Установка');

        Cookie.set({
            one: 1,
            two: 2
        });
        assert.equal(document.cookie, 'my_cookie=5; one=1; two=2', 'Установка нескольких');

        Cookie.clear();
    });

    QUnit.test('Cookie.get()', function (assert) {
        Cookie.set({
            one: 1,
            two: 2,
            my_cookie: 5
        });

        assert.equal(Cookie.get('my_cookie'), 5, 'Получение');
        assert.equal(Cookie.get('hello'), undefined, 'Получение не существующей');
        assert.deepEqual(Cookie.get('one', 'two'), {one:1, two:2}, 'Получение нескольких');

        Cookie.clear();
    });

    QUnit.test('Cookie.remove()', function (assert) {
        Cookie.set({
            one: 1,
            two: 2,
            my_cookie: 5
        });

        Cookie.remove('my_cookie');
        assert.equal(document.cookie, 'one=1; two=2', 'Удаление');

        Cookie.remove('one', 'two');
        assert.equal(document.cookie, '', 'Удаление нескольких');

        Cookie.clear();
    });

    QUnit.test('Cookie.keys()', function (assert) {
        Cookie.set({
            one: 1,
            two: 2
        });

        assert.deepEqual(Cookie.keys(), ['one', 'two'], 'Получение ключей');

        Cookie.clear();
    });

    QUnit.test('Cookie.all()', function (assert) {
        Cookie.set({
            one: 1,
            two: 2
        });

        assert.deepEqual(Cookie.all(), {one:1, two:2}, 'Получение всех');

        Cookie.clear();
    });

    QUnit.test('Cookie.clear()', function (assert) {
        Cookie.set({
            one: 1,
            two: 2
        });
        Cookie.clear();
        assert.equal(document.cookie, '', 'Удаление всех');
    });

    QUnit.test('Cookie.getLength()', function (assert) {
        Cookie.set({
            one: 1,
            two: 2
        });
        assert.equal(Cookie.getLength(), 2, 'Получение длинны кук');
        Cookie.clear();
    });

    QUnit.test('Cookie.noConflict()', function (assert) {
        var Cookie2 = Cookie.noConflict();
        assert.equal(typeof Cookie2, 'function', 'Новое имя');

        Cookie2.set('my_cookie', 5);
        assert.equal(document.cookie, 'my_cookie=5', 'Установка куки');
        Cookie2.clear();
    });
})();