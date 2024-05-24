import Profile from "./Profile";
//import express from 'express'
//import axios from "axios";

const { Bot, InlineKeyboard } = require("grammy");
//const app = express();
//const port = 3000;

/*  inline buttona basılınca web appi aç, diğer butonlar orda gözüksün                   */


function Home(){


    const bot = new Bot(process.env.REACT_APP_BOT_TOKEN);
   

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

    bot.start();
   /* bot.callbackQuery("profile", async (ctx) => {
        await ctx.answerCallbackQuery({
          url:  await axios.post('http://localhost:3000/profile'),
        // element: <Profile/>,
        }
        );
      });*/

    return(
        <>
        </>
    )
}

export default Home;