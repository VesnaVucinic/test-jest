// const { TestWatcher } = require("@jest/core")
const calcHelpers = require('./calcHelpers');
describe ('calculator helpers', () => {
    test('testing test', () => {
        expect(2+5).toEqual(7);
    })
});

describe('multiply by 3', () => {
    let multiplyBy3 = calcHelpers.multiplyBy3;
    test('it exists', () => {
        expect(multiplyBy3).toBeDefined();
    })

    test('it takes an argument and returns it times 3', () => {
        expect(multiplyBy3(5)).toEqual(15);
    })
});

describe('add these tests', () => {
    let addThese = calcHelpers.addThese;
    test('it exists', () => {
        expect(addThese).toBeDefined();
    })

    test('it takes two arguments and adds them', () => {
        expect(addThese(3,5)).toEqual(8)
    })
})