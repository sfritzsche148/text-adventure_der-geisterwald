btn.addEventListener('click', function () {

    // Global variables
    var btn = document.getElementById('btn');
    var player;
    var choice1;
    var choice2;
    var choice3;
    var choice4;
    var choice5;
    var choice6;
    var choice7;
    var choice8;
    var choice9

    // Player Blueprint
    class Player  {
        constructor(name) {
            this.name = name;
        }
    }

    function CreatePlayer() {
        let playername = prompt('Herzlich Willkommen bei dem Text Adventure Der Geisterwald. Um zu starten gib bitte deinen Namen ein:');

        player = new Player(playername);

        confirm('Hallo ' + player.name + '. ');
    }
    CreatePlayer();

    // first dialogue with the hut owner -> HO
    function FirstDialogueHO() {
        choice1 = confirm('Du wachst in einer verfallen Hütte auf einem Bett auf. An einem Tisch sitzt ein älterer Mann.');
        choice1 = prompt('Der Mann scheint nicht zu bemerken dass du auf gewacht bist. Du kannst etwas zu ihm sagen. Mögliche Texte/Fragen: - Hallo; - Wo bin ich hier?')
        if (choice1 === 'Hallo') {
            choice2 = prompt('Hallo kleines Wesen. Du wurdest ausgewählt. Mögliche Fragen: - Für was ausgewählt?');
        }else if (choice1 === 'Wo bin ich hier?') {
            hoice2 = prompt('Hallo kleines Wesen. Das tut nichst zur Sache. Du wurdest ausgewählt. Mögliche Fragen: - Für was ausgewählt?')
        }

        if (choice2 === 'Für was ausgewählt?') {
            choice2 = confirm('Plötzlich löst sich der alte Mann in Luft auf und du bist alleine in der Hütte. ')
            choice3 =  prompt('Du versucht durch die Tür zu gehen, aber sie ist verschlossen. Mögliche Befehle: - Untersuchen');
        }   
    }
    FirstDialogueHO();

    // this function describe the examine Hut
    function ExamineHut() {
        switch(choice3) {
            case 'Untersuchen':
                choice4 = prompt('Du findest auf dem Holzboden einen Wurm und in der Ecke steht eine Angelrute. Du hast jetzt eine Angelrute und einen Wurm in deinem Inventar. Leider keinen Schlüssel. Um raus zu kommen musst du die Tür wohl auframen. Mögliche Befehle: - Auframen');
        }
    }
    ExamineHut();

    // open the hut door 
    function openDoor() {
        if (choice4 === 'Auframen') {
            for (var i = 0; i <= 3; i++) {
                if (i < 3) {
                    choice5 = confirm('Die Tür ist noch nicht offen, du must dich nochmal gegen die Tür stürzen.');
                }else if (i === 3) {
                    choice5 = confirm(player.name + ' du hast es geschaft. Die Tür ist endlich offen.');
                }
            }
        }
    }
    openDoor();

    // innfront of the hut
    function StoryInfrontOfHut() {
        choice6 = prompt('Du stehst jetzt vor der Tür. Direkt vor dir geht ein Feldweg entlang, einmal nach rechts und links und gerade aus. Welchen willst du gehen? Mögliche Befehle: - links; - rechts; - geradeaus');        

    }
    StoryInfrontOfHut();

    if (choice6 === 'links') {
        PathLeft();
    }else if (choice6 === 'rechts') {
        PathRight();
    }else if (choice6 === 'geradeaus') {
        PathStraight();
    }

    // Left Path Story
    function PathLeft() {
        choice7 = prompt('Du gehst nach links. Dabei läufst du einen Pfad mit einer rechts Kurve, auf der Außenseite des Pfades steht ein schön duftender Rosenbusch. Mögliche Befehle: - Untersuchen');
        if (choice7 === 'Untersuchen') {
            choice8 = prompt('Du nimmst eine Rose auf und gehst weiter bis du zu einem Teich kommst. Mögliche Befehle: - Angeln');
        }

        if (choice8 === 'Angeln') {
            PathLeftFishing();
        }

        // Fishing at the Lake
        function PathLeftFishing() {
            for (var i = 0; i <= 2; i++)  {
                if (i < 2) {
                    choice9 = confirm('Leider noch nichts gefangen.');
                }else if (i === 2) {
                    choice9 = confirm('Du hast endlich einen Fisch gefangen. Du folgst mit dem Fisch, deiner Angelrute und der Rose weiter dem Feldweg.');
                }
            }
        }
    }

    // Right Path Story
    function PathRight() {
        confirm('RechterPfad');
    }

    // Straight Path Story
    function PathStraight() {
        confirm('Weg geradeaus');
    }

    function Wood() {
        confirm('Nach einem langen Fuss Marsch siehst du ein großes steinernes Tor mit der Aufschrift "DER GEISTERWALD".');
    }
    Wood();
})