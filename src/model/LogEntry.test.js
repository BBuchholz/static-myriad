import LogEntry from './LogEntry';

test('should set default alias, uuid, and content from constructor', () => {

    let titlePrefix = "Log Entry: ";
    let body = "This is a test entry";
    let testEntry = new LogEntry(body);

    expect(testEntry.getDefaultAliasValue()).toContain(titlePrefix);
    expect(testEntry.getUuid()).toBeDefined();
    expect(testEntry.getBody()).toBe(body);
    
});
