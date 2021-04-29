import Wxrd from './Wxrd';

test('should set default alias and uuid from constructor', () => {

    let testWxrd = new Wxrd("an alias");

    expect(testWxrd.getDefaultAliasValue()).toBe("an alias");
    expect(testWxrd.getUuid()).toBeDefined();
});
