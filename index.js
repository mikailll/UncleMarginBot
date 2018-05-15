var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("504922190:AAERmKY3zyz3eBjyWGz-vgkbPuJK2Gu3SP4", { polling: true });


telegram.on("text", (message) => {

    if(message.text.toLowerCase().indexOf("/help") === 0){
        telegram.sendMessage(message.chat.id, "Available Commands: \n" +
            "/haalmeop Not rigged! \n" +
            "/shisha Is it time? \n" +
            "/howtopayhiervoor Baba calculator! \n" +
            "/lounge Selects a lounge for you braindead kids. \n");
    }
        if(message.text.toLowerCase().indexOf("/haalmeop") === 0){
            var number = Math.floor((Math.random() * 100) + 1);
            console.log(number);
            if(number >= 25) {
                telegram.sendMessage(message.chat.id, "@Vitalynx komt je ophalen!");
            }else{
                telegram.sendMessage(message.chat.id, "@Vitalynx haalt je niet op!");
            }
        }

        if(message.text.toLowerCase().indexOf("/shisha") === 0){
        var number = Math.floor((Math.random() *100) + 1);
        console.log(number);
        if(number >=50 ){
            telegram.sendMessage(message.chat.id, "Paas die kanker shisha door!");
        }
        else{
            telegram.sendMessage(message.chat.id, "Het is nog geen tijd om door te pasen!");
        }
        }

    if(message.text.toLowerCase().indexOf("/howtopayhiervoor") === 0){
        var number = Math.floor((Math.random() *4) + 1);
        console.log(number);
        if(number == 1 ){
            telegram.sendMessage(message.chat.id, "Romano Betaalt!");
        }
        if(number == 2){
            telegram.sendMessage(message.chat.id, "Onur Betaalt!");
        }
        if(number == 3){
            telegram.sendMessage(message.chat.id, "Mikail Betaalt!");
        }
        if(number == 4){
            telegram.sendMessage(message.chat.id, "Selim Betaalt!");
        }
    }

    if(message.text.toLowerCase().indexOf("/lounge") === 0){
    var lounges = Array("Zirve", "Mio", "Meram", "Villa Blanca", "Manolya", "A La Cati", "Kosk", "Oba", "Agora", "Florya", "Beymen", "Boudouir", "1001 Nachten");
    var lounge = lounges[Math.floor(Math.random()*lounges.length)];

    telegram.sendMessage(message.chat.id, "We gaan naar: " + lounge);

    }

});