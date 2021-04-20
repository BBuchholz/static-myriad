import React from 'react';
import Logo from './Logo';
import Footer from './Footer';

class SplashScreen extends React.Component {
    
    render() {
        return(

            <div>
                <Logo />
                <Footer />
            </div>
        );
    }
}

export default SplashScreen;