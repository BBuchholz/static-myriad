import './App.css';
import SplashScreen from './SplashScreen';
import SandboxEntryForm from './SandboxEntryForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <SplashScreen />    
        </div>        
        <div>
            <SandboxEntryForm />
        </div>
      </header>
    </div>
  );
}

export default App;
