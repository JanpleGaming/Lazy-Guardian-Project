module.exports = client => {
    console.log(`${client.user.tag} is now online!`);
    
        client.user.setPresence({
            status: 'dnd',
            activity: {
                name: `${client.guilds.cache.size.toLocaleString()} servers | ${client.users.cache.size} users | ${process.env.PREFIX}help`,
                type: 'WATCHING',
            }
        });
}