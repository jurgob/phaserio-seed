

var Phaser = require('Phaser')
  , _ = require('lodash')
  , properties = require('./properties')
  , states =
    { boot: require('./states/boot.js')
    , preloader: require('./states/preloader.js')
    , menu: require('./states/menu.js')
    , game: require('./states/game.js')
    , insertname: require('./states/insertname.js')
    }
  

var ratio = 1;
if (window.innerWidth < properties.size.x)
    ratio = properties.size.x/window.innerWidth;
var newHeight = window.innerHeight*ratio;

game = new Phaser.Game(properties.size.x, newHeight < properties.size.y ? newHeight : properties.size.y , Phaser.AUTO, 'game');

// Automatically register each state.
_.each(states, function(state, key) {
  game.state.add(key, state(game));
});

game.state.start('boot');
