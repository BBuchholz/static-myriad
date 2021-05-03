import Tagging from './Tagging';

test('should allow tagging and untagging', () => {

    let testTagging = new Tagging();
    
    expect(testTagging.isTagged()).toBe(false);

    testTagging.tag()
    expect(testTagging.isTagged()).toBe(true);

    testTagging.untag();

    expect(testTagging.isTagged()).toBe(false);
});
