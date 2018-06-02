const test = require('tap').test;
const generateRandomString = require('../index')

test('smoke test', function (t) {
    const string = generateRandomString()
    t.fs(typeof string, 'string');
    t.end()
})
