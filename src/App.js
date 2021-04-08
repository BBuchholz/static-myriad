import './App.css';
import Logo from './Logo';
import EntryForm from './EntryForm';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <Logo />    
        </div>        
        <div>
            <EntryForm />
        </div>
        <div>
            <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
