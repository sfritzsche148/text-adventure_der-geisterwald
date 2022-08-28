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
})