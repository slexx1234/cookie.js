(function() {
    QUnit.module('Cookie');

    QUnit.test('set', function (assert) {
        Cookie.set('my_cookie', 5);
        assert.equal(document.cookie, 'my_cookie=5', 'Установка');

        Cookie.set({
            one: 1,
            two: 2
        });
        assert.equal(document.cookie, 'my_cookie=5; one=1; two=2', 'Установка нескольких');
    });

    QUnit.test('get', function (assert) {
        assert.equal(Cookie.get('my_cookie'), 5, 'Получение');
        assert.equal(Cookie.get('hello'), undefined, 'Получение не существующей');
        assert.deepEqual(Cookie.get('one', 'two'), {one:1, two:2}, 'Получение нескольких');
    });

    QUnit.test('remove', function (assert) {
        Cookie.remove('my_cookie');
        assert.equal(document.cookie, 'one=1; two=2', 'Удаление');

        Cookie.remove('one', 'two');
        assert.equal(document.cookie, '', 'Удаление нескольких');
    });

    QUnit.test('keys', function (assert) {
        Cookie.set({
            one: 1,
            two: 2
        });

        assert.deepEqual(Cookie.keys(), ['one', 'two'], 'Получение ключей');
    });

    QUnit.test('all', function (assert) {
        assert.deepEqual(Cookie.all(), {one:1, two:2}, 'Получение всех');
    });

    QUnit.test('clear', function (assert) {
        Cookie.clear();

        assert.equal(document.cookie, '', 'Удаление всех');
    });
})();