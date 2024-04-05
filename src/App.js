import logo from './logo.svg';
import './App.css';
//import WebApp from '@twa-dev/sdk'

let WebApp = window.Telegram.WebApp;
WebApp.ready();


function App() {
const button =  WebApp.InlineKeyboardButton.text("Inline button");
  WebApp.enableClosingConfirmation();

  return (
    <div className="App">
      <header className="App-header">
      { button }
      <button onClick={() => WebApp.showAlert("Hello World! ")}>
            Show Alert
        </button>
              
      </header>
    </div>
  );
}

export default App;
