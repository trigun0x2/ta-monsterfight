var TA = window.TA;

class MonsterFight {
  constructor() {
    this.monsters = [
      {name: "Bob", health: 10},
      {name: "Ted", health: 10}
    ]
    this.keyPhrase;
    this.monsterHealth;

    TA.init(() => {
      TA.api.get('/user').then((user) => {
        console.log(user);
      });
    });

    TA.twitch.chat.on('say', data => {
      // Add check to see if user is mod/owner
      if (data.message == "!monsterfight") {
        $("#monster").fadeIn();
        this.startFight();
      } else {
        this.spamAttack(data.message);
      }
    });
  }

  spamAttack(message) {
    console.log(this.keyPhrase);
    if (message == this.keyPhrase){
      if (this.monsterHealth <= 1){
        this.monsterDead(monster);
      }else{
        this.monsterHealth -= 1;
        console.log(`DMG: ${this.monsterHealth} left`);
        if (this.monsterHealth%5 == 0){
          this.newKeyPhrase();
        }
      }
    }
  }

  monsterDead(monster) {
    TA.twitch.chat.off();
    TA.twitch.chat.say(`${monster.name} was defeated!`);
    $("#key-phrase").text(`YOU DID IT TWITCH CHAT! ${monster.name} was REKT!`);
  }

  startFight() {
    TA.twitch.chat.off();
    $.get("http://metaphorpsum.com/sentences/1")
      .done((data) => {
        $("#key-phrase").text(data);
        this.monsterHealth = this.monsters[0];
        this.keyPhrase = data;
      });
  }

  newKeyPhrase() {
    $.get("http://metaphorpsum.com/sentences/1")
      .done((data) => {
        $("#key-phrase").text(data);
        this.keyPhrase = data;
      });
  }
}

var monsterdebugger = function(){
  this.fight = () => {
    
  }
}
var monsterFight = new MonsterFight();
