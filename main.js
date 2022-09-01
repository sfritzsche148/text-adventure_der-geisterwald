btn.addEventListener('click', function () {

    // Global variables
    // TODO alles in let umschreiben
    let btn = document.getElementById('btn');
    let player;
    let choice1;
    let choice2;
    let choice3;
    let choice4;
    let choice5;
    let choice6;
    let choice7;
    let choice8;
    let choice9;
    let choice10;
    let choice11;
    let choice12;
    let choice13;
    let choice14;
    let choice15;
    let choice16;
    let choice17;
    let choice18;
    let choice19;
    

    // Player Blueprint
    class Player  {
        constructor(name, hp, inventory) {
            this.name = name;
            this.hp = hp = 100;
            this.inventory = inventory;
        }
    }

    function CreatePlayer() {
        let playername = prompt('Herzlich Willkommen bei dem Text Adventure Der Geisterwald. Um zu starten gib bitte deinen Namen ein:');

        playerinventory = ["Nichts", "Angelrute; ", "Wurm; ", "Fisch; ", "Rose; "];

        player = new Player(playername, 100, playerinventory);

        confirm('Hallo ' + player.name + '. Inventar: ' + player.inventory[0] );
    }
    CreatePlayer();


    // first dialogue with the hut owner -> HO
    function FirstDialogueHO() {
        choice1 = confirm('Du wachst in einer verfallen Hütte auf einem Bett auf. An einem Tisch sitzt ein älterer Mann. Inventar: ' + player.inventory[0]);
        choice1 = prompt('Der Mann scheint nicht zu bemerken dass du auf gewacht bist. Du kannst etwas zu ihm sagen. Mögliche Texte/Fragen/Befehle: - Hallo; - Wo bin ich hier?; Inventar: ' + player.inventory[0]);
        
        if (choice1 === 'Hallo') {
            choice2 = prompt('Hallo kleines Wesen. Du wurdest ausgewählt. Mögliche Fragen: - Für was ausgewählt?; Inventar: ' + player.inventory[0]);
        }else if (choice1 === 'Wo bin ich hier?') {
            choice2 = prompt('Hallo kleines Wesen. Das tut nichst zur Sache. Du wurdest ausgewählt. Mögliche Fragen: - Für was ausgewählt?, Inventar: ' + player.inventory[0]);
        }

        if (choice2 === 'Für was ausgewählt?') {
            choice2 = confirm('Plötzlich löst sich der alte Mann in Luft auf und du bist alleine in der Hütte. Inventar: ' + player.inventory[0]);
            choice3 =  prompt('Du versucht durch die Tür zu gehen, aber sie ist verschlossen. Mögliche Befehle: - Untersuchen; Inventar: ' + player.inventory[0]);
        }   
    }
    FirstDialogueHO();

    // this function describe the examine Hut
    function ExamineHut() {
        switch(choice3) {
            case 'Untersuchen':
                choice4 = prompt('Du findest auf dem Holzboden einen Wurm und in der Ecke steht eine Angelrute. Du hast jetzt eine Angelrute und einen Wurm in deinem Inventar. Leider keinen Schlüssel. Um raus zu kommen musst du die Tür wohl auframen. Mögliche Befehle: - Auframen; Inventar: ' + player.inventory[1] + player.inventory[2]);
        }
    }
    ExamineHut();

    // open the hut door 
    function openDoor() {

        if (choice4 === 'Auframen') {
            for (var i = 0; i <= 3; i++) {
                if (i < 3) {
                    choice5 = confirm('Die Tür ist noch nicht offen, du must dich nochmal gegen die Tür stürzen. Inventar: ' + player.inventory[1] + player.inventory[2]);
                }else if (i === 3) {
                    choice5 = confirm(player.name + ' du hast es geschaft. Die Tür ist endlich offen. Inventar: ' + player.inventory[1] + player.inventory[2]);
                }
            }
        }
    }
    openDoor();

    // innfront of the hut
    function StoryInfrontOfHut() {
        choice6 = prompt('Du stehst jetzt vor der Tür. Direkt vor dir geht ein Feldweg entlang, einmal nach rechts und links und gerade aus. Welchen willst du gehen? Mögliche Befehle: - links; - rechts; - geradeaus; Inventar: ' + player.inventory[1]+ player.inventory[2]);        

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
        choice7 = prompt('Du gehst nach links. Dabei läufst du einen Pfad mit einer rechts Kurve, auf der Außenseite des Pfades steht ein schön duftender Rosenbusch. Mögliche Befehle: - Untersuchen; Inventar: ' + player.inventory[1] + player.inventory[2]);
        if (choice7 === 'Untersuchen') {
            choice8 = prompt('Du nimmst eine Rose auf und gehst weiter bis du zu einem Teich kommst. Mögliche Befehle: - Angeln; Inventar: ' + player.inventory[1] + player.inventory[2] + player.inventory[4]);
        }

        if (choice8 === 'Angeln') {
            PathLeftFishing();
        }

        // Fishing at the Lake
        function PathLeftFishing() {
            for (let i = 0; i <= 2; i++)  {
                if (i < 2) {
                    choice9 = confirm('Leider noch nichts gefangen. Inventar: ' + player.inventory[1] + playerinventory[4]);
                }else if (i === 2) {
                    choice9 = confirm('Du hast endlich einen Fisch gefangen. Du folgst mit dem Fisch, deiner Angelrute und der Rose weiter dem Feldweg. Inventar: ' + player.inventory[1] + player.inventory[3] + player.inventory[4]);
                }
            }
        }
    }

    // Right Path Story
    function PathRight() {
        choice10 = prompt('Du bist nach rechts gegangen. Vor dir erscheint ein großer See. Mögliche Befehle: - Angeln; Inventar: ' + player.inventory[1] + player.inventory[2]);

        if (choice10 === 'Angeln') {
            PathRightFishing();
        }

        function PathRightFishing() {
            for (let i = 0; i <= 2; i++) {
                if (i < 2) {
                    choice11 = confirm('Du hast leider noch nichts gefangen. Inventar: ' + player.inventory[1]);
                }else if (i === 2) {
                    choice11 = confirm('Du hast endlich einen Fisch gefangen. Du folgst weiter dem Feldweg. Inventar: ' + player.inventory[1] + player.inventory[3]);
                }
            }
        }
        choice12 = prompt('Du erblickst einen schön duftendenden Rosenbusch. Mögliche Befehle: - Untersuchen; Inventar: ' + player.inventory[1] + player.inventory[3]);

        if (choice12 === 'Untersuchen') {
            choice13 = confirm('Du nimmst eine Rose auf und gehst den Feldweg weiter. Inventar: ' + player.inventory[1] + player.inventory[3] + player.inventory[4]);
        }
    }

    // Straight Path Story
    function PathStraight() {
        choice14 = prompt('Du bist geradeaus gegangen. Dabei läufst du einen Pfad miteiner rechts Kurve, auf der Außenseite des Pfades steht ein schön duftender Rosenbusch. Mögliche Befehle: - Untersuchen; Inventar: ' + player.inventory[1] + player.inventory[2]);
        
        if (choice14 === 'Untersuchen') {
            choice15 = prompt('Du nimmst eine Rose auf und gehst weiter bis du zu einem Teich kommst. Mögliche Befehle: - Angeln; Inventar: ' + player.inventory[1] + player.inventory[2] + player.inventory[4]);
        }

        if (choice15 === 'Angeln') {
            PathStraightFishing();
        }

        function PathStraightFishing() {
            for (var i = 0; i <= 2; i++) {
                if (i < 2) {
                    choice16 = confirm('Du hast leider noch nichts gefangen. Inventar: ' + player.inventory[1] + player.inventory[4]);
                }else if (i === 2) {
                    choice16 = confirm('Du hast endlich einen Fisch gefangen. Du folgst weiter dem Feldweg. Inventar: ' + player.inventory[1] + player.inventory[3] + player.inventory[4]);
                }
            }
        }

    }

    // Story in the forest
    function InTheForest() {
        choice16 =  confirm('Nach einem langen Fuss Marsch siehst du ein großes steinernes Tor mit der Aufschrift "DER GEISTERWALD". Inventar: ' + player.inventory[1] + player.inventory[3] + player.inventory[4]);
        choice16 =  prompt('Du stöhst ausversehen gegen einen Baum. Daraufhin vernimmst du ein "EY PASS DOCH AUF!!". Mögliche Befehle: - Untersuchen; ' + player.inventory[1] + player.inventory[3] + player.inventory[4]);

        if (choice16 === 'Untersuchen') {
            choice17 = prompt('Du gehst um den Baum herum und findest eine kleine Luke durch die du gehst. Auf der anderen Seite findest du einen Troll gefangen im Baum. Mögliche Befehle: - Mit Troll sprechen; Inventar: ' + player.inventory[1] + player.inventory[3] + player.inventory[4]);
        }

        // Dialogue with troll
        if (choice17 === 'Mit Troll sprechen') {
            choice18 = prompt('"Hallo??", fragst du den Troll. Der Troll Antwortet mit heller Stimme "Endlich kommt jemand um uns zubefreien." Mögliche Befehle: - befereien?; Inventar: ' + player.inventory[1] + player.inventory[3] + player.inventory[4]);
        }

        if (choice18 === 'befreien') {
            choice19 = confirm('"Du bist gar nicht da um uns zubefreien", grummelte der Troll. "Das meinte der alte Mann", flüsterst du. Daraufhin sagt der Troll wir wurden von den Geistern überfallen und in Bäume verwandelt. Inventar: ' + player.inventory[1] + player.inventory[3] + player.inventory[4]);
            choice19 = prompt('Auf dem Boden findest du eine Platte mit einer Rose abgebildet. Instenktiv legst du die Rose auf die Platte. Plötzlich verschwindet der Baum und ein kleiner Troll steht vor dir und fragt dich ob du ihm helfen willst. Mögliche Befehle: - Ja; - Nein; Inventar: ' + player.inventory[1] + player.inventory[3]);
        }

        // choose to help the troll
        if (choice19 === 'Ja') {

        }else if (choice19 === 'Nein') {

        }
        // TODO bridge repairs
        // TODO fight with security
        // TODO restore hp
    }
    InTheForest();
})