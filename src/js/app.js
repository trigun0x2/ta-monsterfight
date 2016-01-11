var TA = window.TA;

class MonsterFight {
  constructor() {
    this.monsters = [
      {name: "Bob", health: 900},
      {name: "Ted", health: 200}
    ]
    this.keyPhrase;
    this.monsterHealth;

    // TA.twitch.chat.on('say', data => {
    //   // Add check to see if user is mod/owner
    //   if (data.message == "!monsterfight") {
    //     $("#monster").fadeIn();
    //     let monster = this.monsters[_.random(0,this.monsters.length - 1)];
    //     this.startSpamAttacks(monster);
    //   }
    // });
  }

  startSpamAttacks(monster) {
    this.monsterHealth = monster.health;
    this.getKeyPhrase(30000);
    TA.twitch.chat.on('say', (data) => {
      if (data.message == this.keyPhrase){
        this.monsterHealth -= 1;
      }
    })
  }

  getKeyPhrase() {
    $.get("http://metaphorpsum.com/sentences/1", (data) => {
      $("#key-phrase").text(data);
    });
  }
}

var monsterFight = new MonsterFight();
monsterFight.getKeyPhrase();
