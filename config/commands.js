var Games = require('../app/controllers/games.js');

module.exports = function(app) {
    var games = new Games();

    // Public commands
    app.cmd('start', '', games.start);
    app.cmd('stop', 'o', games.stop);
    app.cmd('join', '', games.join);
    app.cmd('j', '', games.join);
    app.cmd('quit', '', games.quit);
    app.cmd('players', '', games.list);
    app.cmd('list', '', games.list);
    app.cmd('points', '', games.points);
    app.cmd('status', '', games.status);
    app.cmd('pause', '', games.pause);
    app.cmd('resume', '', games.resume);
    app.cmd('vowel', '', games.vowel);
    app.cmd('v', '', games.vowel);
    app.cmd('consonant', '', games.consonant);
    app.cmd('a', '', games.consonant);


    // Private commands
    app.msg('play', '', games.play);
    app.msg('p', '', games.play);
};
