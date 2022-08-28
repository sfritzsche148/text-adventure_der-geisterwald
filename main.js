btn.addEventListener('click', function () {

    var btn = document.getElementById('btn');
    

    class Player  {
        constructor(name) {
            this.name = name;
        }
    }


    function Begin() {
        story = prompt('Herzlich Willkommen bei DER GEISTERWALD');
    }
    Begin();

    function CreatePlayer() {
        let playername = prompt('Name:');

        var player = new Player(playername);

        confirm(player.name);
    }
    CreatePlayer();

    // first dialogue with the hut owner -> HO
    function FirstDialogueHO() {
        var choice1 = prompt('');

        
    }
    FirstDialogueHO();

    // innfront of the hut
    function StoryInfrontOfHut() {
        var choice2 = prompt('Add');

    }
    StoryInfrontOfHut();

})