import Wxrd from './Wxrd';

test('should set default alias from constructor', () => {

    let testWxrd = new Wxrd("an alias");

    expect(testWxrd.getDefaultAliasValue()).toBe("an alias");

});
