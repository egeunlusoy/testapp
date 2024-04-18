import logo from './logo.svg';
import './App.css';
//import WebApp from '@twa-dev/sdk'
const { Bot } = require("grammy");

let WebApp = window.Telegram.WebApp;
WebApp.ready();

const bot = new Bot("6948802463:AAGsGKxqyB_JECw7nciuEQHCgOBA_KE7ob4"); 



function App() {

  // Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));
bot.command("start" , "Welcome to the Test MiniApp, a mini app to test features");

bot.start();
//const button =  WebApp.InlineKeyboardButton.text("Inline button");
 // WebApp.enableClosingConfirmation();
 // { button }
  
  return (
    <div className="App">
      <header className="App-header">
     
      <button onClick={() => WebApp.showAlert("Hello World! ")}>
            Show Alert
        </button>
              
      </header>
    </div>
  );
}

export default App;
