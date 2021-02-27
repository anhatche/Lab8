const volume = require('../assets/scripts/main');

describe('my volume', () => {
    test('95 is level 3', () => {
        expect(volume(95)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });
    test('50 is level 2', () => {
        expect(volume(50)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });
    test('10 is level 1', () => {
        expect(volume(10)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });
    test('0 is level 0', () => {
        expect(volume(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
});