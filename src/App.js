import './App.css';
import Logo from './Logo';
import SandboxEntryForm from './SandboxEntryForm';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <Logo />    
        </div>        
        <div>
            <SandboxEntryForm />
        </div>
        <div>
            <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
