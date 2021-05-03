import Wxrd from './Wxrd';

test('should set default alias and uuid from constructor', () => {

    let testWxrd = new Wxrd("an alias");

    expect(testWxrd.getDefaultAliasValue()).toBe("an alias");
    expect(testWxrd.getUuid()).toBeDefined();
});

test('should allow tagging from a tag string', () =>{

    let testWxrd = new Wxrd("Some quote from some guy");
    
    expect(testWxrd.getTagString()).toBe("");

    let newTagString = "quotes, author: some guy";
    testWxrd.setTagsFromTagString(newTagString);
    
    expect(testWxrd.getTagString()).toBe(newTagString);
    
});

test('should properly split a tag string into tags', () =>{

    let testWxrd = new Wxrd("Some test");

    let tagList = testWxrd.toTagList("test, test1, test2");

    expect(tagList).toContain("test");
});
