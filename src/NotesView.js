import React from 'react';
import Logo from './Logo';
import NotesUrlProjectEntry from './NotesUrlProjectEntry';

class NotesView extends React.Component {
    
    render() {
        return(

            <div>
                <Logo />
                <div>
                    Current Tasks
                    <ul>
                        <li>
                            <NotesUrlProjectEntry 
                                url="https://docs.google.com/document/d/1fyKeasedp29uMHCEsaVNCLMff63d2iYdbM-64RKnOHo/edit?usp=sharing" 
                                text="Click This Link For Current Work"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NotesView;