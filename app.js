const {Client} = require("discord.js");//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
const client = new Client({intents:515});//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
const { REST } = require("@discordjs/rest");//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
const { Routes } = require("discord-api-types/v10");//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
const fs = require("fs");//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
const token = "OTQzOTMyMTE1NzQ0MDg0MDE5.Yg6PSQ.VrlaZpfg-KemVYkA4vVxV1dqimo";//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
const mta = require('gamedig');//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
client.on("ready",async () => {
    console.log("Bot is online!");//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
  //Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
    //Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
    setInterval(() => {
        mta.query({
            type:"mtasa",
            host:"213.238.166.99",
            port:"22003"
        }).then(s => {
            client.user.setActivity(`${s.raw?.numplayers} kişi CamRoyale`,{type:"PLAYING"});//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
        })//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
    },5000)//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
    //Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
    const rest = new REST({ version: "10" }).setToken(token);//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
    try {
      await rest.put(Routes.applicationCommands(client.user.id), {
        body: commands,
      });
    } catch (error) {
      console.error(error);//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
    }
});


global.client = client;//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
client.commands = (global.commands = []);//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
fs.readdir("./komutlar/", (err, files) => {
    if (err) throw err;//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
        let props = require(`./komutlar/${file}`);//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
        client.commands.push({
             name: props.name.toLowerCase(),
             description: props.description,
             options: props.options,
             type: props.type,  
        })
        console.log(`👌 Slash Komut Yüklendi: ${props.name}`);//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
    });//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
});//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
        const event = require(`./events/${file}`);//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
        let eventName = file.split(".")[0];//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
        //Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
        console.log(`👌 Event yüklendi: ${eventName}`);//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
        client.on(eventName, (...args) => {
           event(client, ...args);//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
        });//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
    });//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
});//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com
client.login(token);//Gweep Creative#0001 - discord.gg/rabel - gweepcreative.com