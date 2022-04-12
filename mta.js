const { MessageEmbed,Client,CommandInteraction } = require("discord.js");
const mta = require('gamedig');
module.exports = {
    name:"mta",
    description: 'MTA Sunucu bilgileri',
    type:1,
    options:[
        {
            name:"ip",
            description:"MTA Sunucu IP",
            type:3,
            required:true
        },
        {
            name:"port",
            description:"MTA Sunucu Port",
            type:4,
            required:true
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        let ip = interaction.options.getString("ip");
        let port = interaction.options.getInteger("port");
        mta.query({
            type:"mtasa",
            host:`${ip}`,
            port:`${port}`
        }).then((sa) => {
            const sada = {
                "false":"yok",
                "true":"var"
        }
            const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("MTA Sunucu Bilgileri")
            .addField("Sunucu Adı",`${sa.name}`,false)
            .addField("Sunucu Durumu","Aktif",true)
            .addField("Harita",sa.map,true)
            .addField("Oyun Modu",sa.raw?.gametype,true)
            .addField("Oyun Veriyon",sa.raw?.version,true)
            .addField("Oyuncu Sayısı",`**${sa.raw?.numplayers}**/${sa.maxplayers}`,true)
            .addField("Ping",`${sa.ping}ms`,true)
            .addField("Şifre",`${sada[sa.password]}`,true)
            interaction.reply({embeds:[embed]});

        }).catch(err => {
            
            interaction.reply({embeds:[new MessageEmbed().setDescription("⛔ Aradığınız sunucu bulunamadı. Lütfen girdiğiniz bilgileri kontrol ediniz").setColor("RED")]});
            console.log(err)
        });

    


      
}
};