import './App.css';
import Profile from './pages/Profile.js';
import Home from './pages/Home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import WebApp from '@twa-dev/sdk'
const { Bot, InlineKeyboard } = require("grammy");

let WebApp = window.Telegram.WebApp;
WebApp.ready();



/** RUN " npm run deploy " to publish to gh-pages  **/ 

function App() {

  const bot = new Bot(process.env.REACT_APP_BOT_TOKEN);
   
  bot.start();

    bot.command("start" ,(ctx) => 
    {
      ctx.reply("Welcome to the Test MiniApp, a mini app to test featuress" , 
      {
        reply_markup: new InlineKeyboard()
                    .text("Search Jobs","searchJobs")
                    .text("My Jobs","myJobs").row()
                    .text("My Profile","profile")
                    .text("Inline Button 4")
    
        })
    
    });

   

/*
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

//<Route path="/" element={<Home />} >
  return (
    <BrowserRouter>
      <Routes>
         
          <Route path="/profile" element={<Profile />} />    
        
      </Routes>
    </BrowserRouter>
  );

}

export default App;
