btn.addEventListener('click', function () {

    var btn = document.getElementById('btn');
    

    // Player Blueprint
    class Player  {
        constructor(name) {
            this.name = name;
        }
    }

    function CreatePlayer() {
        let playername = prompt('Herzlich Willkommen bei dem Text Adventure Der Geisterwald. Um zu starten gib bitte deinen Namen ein:');

        var player = new Player(playername);

        confirm('Hallo' + player.name + '. ');
    }
    CreatePlayer();

    // first dialogue with the hut owner -> HO
    function FirstDialogueHO() {
        var choice1 = prompt('Choice1');

        
    }
    FirstDialogueHO();

    // innfront of the hut
    function StoryInfrontOfHut() {
        var choice2 = prompt('choice2');

    }
    StoryInfrontOfHut();

})