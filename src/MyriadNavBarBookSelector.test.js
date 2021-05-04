import { generateOptionsFromBookshelf } from './MyriadNavBarBookSelector';

test('should generate selection options from BookShelf context', () => {
    
    let output = generateOptionsFromBookshelf();

    let expectedOutput = [
        <option value="demo">demo book 1</option>, 
        <option value="demo2">demo book 2</option>, 
        <option value="demo3">demo book 3</option>
    ];

    expect(output.toString()).toBe(expectedOutput.toString());
});
