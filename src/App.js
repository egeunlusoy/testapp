import './App.css';
import Profile from './pages/Profile.js';
import Home from './pages/Home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import WebApp from '@twa-dev/sdk'
const { Bot, InlineKeyboard } = require("grammy");

let WebApp = window.Telegram.WebApp;
WebApp.ready();

//const bot = new Bot("6948802463:AAGsGKxqyB_JECw7nciuEQHCgOBA_KE7ob4");

/** RUN " npm run deploy " to publish to gh-pages  **/ 

function App() {
/*
bot.command("start" ,(ctx) => 
{
  ctx.reply("Welcome to the Test MiniApp, a mini app to test features" , 
  {
    reply_markup: new InlineKeyboard()
                .text("My Profile","profile")
                .text("Inline Button 2").row()
                .text("Inline Button 3")
                .text("Inline Button 4")

    })

});

bot.callbackQuery("profile", async (ctx) => {
  await ctx.answerCallbackQuery({
    
   element: <Profile/>,
  }
  );
});*/


/*
feature.command("start", logHandle("command-start"), (ctx) => {
  return ctx.reply(ctx.t("welcome"), {
    reply_markup: new InlineKeyboard().webApp(
      ctx.t("open-app"),
      config.WEB_APP_URL,
    ),
    link_preview_options: {
      is_disabled: true,
    },
  });
});*/

//bot.start();

 // WebApp.enableClosingConfirmation();

  
 /* return (
    <div className="App">
      <header className="App-header">
     
      <button onClick={() => WebApp.showAlert("Hello World! ")}>
            Show Alert
        </button>
              
      </header>
    </div>
  );*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/profile" element={<Profile />} />    
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
