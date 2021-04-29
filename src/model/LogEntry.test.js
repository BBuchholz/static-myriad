import LogEntry from './LogEntry';
import Wxrd from './Wxrd';

test('should set default alias and uuid from constructor', () => {

    let title = "Record Entry: 2021-04-29";
    let testWxrd = new Wxrd(title);
    let testEntry = new LogEntry(testWxrd);

    expect(testEntry.getDefaultAliasValue()).toBe(title);
    expect(testWxrd.getUuid()).toBeDefined();
});
