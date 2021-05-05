import React, { useContext } from 'react';
import DemoContext from './context/DemoContext';
import BookShelf from './context/BookShelf';

const LogEntriesListView = () => {
    
    const demoKey = useContext(DemoContext)[0];
    const currentBook = BookShelf[demoKey];
    let entries = "not found";
    if(currentBook.entries){
        entries = "found";
    }
    
    return (
        <div>
            <hr/>
            Current Book: {currentBook.bookTitle}
            <hr/>
            Entries? {entries}
        </div>
    );
}

export default LogEntriesListView;