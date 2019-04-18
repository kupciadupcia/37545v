const ascii = require('ascii-art');

// Command Handler - You can use your own
module.exports.run = async (bot, message, args) => {

    // First, we need to generate the font
    ascii.font(args.join(' '), 'Doom', function(rendered) {

        // The `rendered` variable now contains out output
        // Although, there is usually a few spaces at the end
        rendered = rendered.trimRight(); 
        
        if (rendered.length > 2000) return message.channel.send('Sorry, that message is too long!');

        message.delete({timeout: 10}); 

        message.channel.send(rendered, {
            code: 'md'

            

        });

    }); 
}
module.exports.help = {
    name: "ascii"
}