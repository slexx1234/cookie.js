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
})();