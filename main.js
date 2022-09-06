btn.addEventListener('click', function () {

    // Global variables
    let body = document.getElementById('body');
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
    let choice20;
    let choice21;
    let choice22;
    let choice23;
    let choice24;
    let choice25;
    let choice26;
    let choice27;
    let choice28;
    let choice29;
    let choice30;
    let choice31;
    let choice32;
    let choice33;
    let choice34;
    let choice35;

    // Player Blueprint
    class Player  {
        constructor(name, hp, inventory) {
            this.name = name;
            this.hp = hp;
            this.inventory = inventory;
        }
    }

    function CreatePlayer() {
        let playername = prompt('Herzlich Willkommen bei dem Text Adventure Der Geisterwald. Um zu starten gib bitte deinen Namen ein:');

        let playerinventory = ["Nichts", "Angelrute; ", "Wurm; ", "Fisch; ", "Rose; ", "Fackel; "];
        
        let playerhp = 100;

        player = new Player(playername, playerhp, playerinventory);

        confirm('Hallo ' + player.name + '. Inventar: ' + player.inventory[0]);
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

    // Choose Path
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
        function DialogueTroll() {
            if (choice17 === 'Mit Troll sprechen') {
                choice18 = prompt('"Hallo??", fragst du den Troll. Der Troll Antwortet mit heller Stimme "Endlich kommt jemand um uns zubefreien." Mögliche Befehle: - befreien?; Inventar: ' + player.inventory[1] + player.inventory[3] + player.inventory[4]);
            }

            if (choice18 === 'befreien') {
                choice19 = confirm('"Du bist gar nicht da um uns zubefreien", grummelte der Troll. "Das meinte der alte Mann", flüsterst du. Daraufhin sagt der Troll wir wurden von den Geistern überfallen und in Bäume verwandelt. Inventar: ' + player.inventory[1] + player.inventory[3] + player.inventory[4]);
                choice19 = prompt('Auf dem Boden findest du eine Platte mit einer Rose abgebildet. Instenktiv legst du die Rose auf die Platte. Plötzlich verschwindet der Baum und ein kleiner Troll steht vor dir und fragt dich ob du ihm helfen willst. Mögliche Befehle: - Ja; - Nein; Inventar: ' + player.inventory[1] + player.inventory[3]);
            }

            // choose to help the troll
            if (choice19 === 'Ja') {
                choice20 = confirm('Der Troll freut sich das du ihm hilfst. Er sagt dir das die Geister die Höhle der Trolle eingenommen haben und das man das Schwert aus einem Stein ziehen muss um die an die Krone des Herrschers zu gelangen. Inventar: ' + player.inventory[1] + player.inventory[3]);
            }else if (choice19 === 'Nein') {
                choice20 = confirm('Der Troll redet so lange auf dich ein, bis du ihm schließlich doch hilfst. Er sagt dir das die Geister die Höhle der Trolle eingenommen haben und das man das Schwert aus einem Stein ziehen muss um die an die Krone des Herrschers zu gelangen. Inventar: ' + player.inventory[1] + player.inventory[3]);
            }
        }
        DialogueTroll();

        // bridge repairs
        function BridgeRepairs() {
            choice20 = prompt('Nach einem langen Fuss Marsch kommt ihr an der Brücke an, doch sie ist zerstört. Unten im Fluss siehst du Holz schwimmen. Mögliche Befehle: - Holz angeln; - durch schwimmen; Inventar: ' + player.inventory[1] + player.inventory[3]);

            if (choice20 === 'Holz angeln') {
                choice21 = confirm('Während du das Holz aus dem Fluss angelst, holt der Troll Lianen um die Bretter mit einander zu verzuhren. Inventar: ' + player.inventory[1] + player.inventory[3]);
            }else if (choice20 === 'durch schwimmen') {
                choice21 = confirm('Der Troll meint das es keine gute Idee ist durch den Fluss zu schwimmen, weshalb du es nicht tust und anfängst das Holz aus dem Fluss zu angeln. Inventar: ' + player.inventory[1] + player.inventory[3]);
            }

            choice21 = prompt('Nach einigen Stunden Arbeit ist die Brücke repariert und ihr geht darüber. Auf der anderen Seite geht ihr ein Stück bis ihr in der Ferne die Höhle seht, aber sie wird von zwei Wachen bewacht. Der Troll sagt: "Ich hab einen Plan.". Mögliche Fragen: - Was für ein Plan?; Inventar: ' + player.inventory[1] + player.inventory[3]);
        }
        BridgeRepairs();

        // fight with guard
        function FightWithGuard() {
            if (choice21 === 'Was für ein Plan?') {
                choice22 = prompt('Doch der Troll verschwindet während du ihn fragst. Wenige Sekunden später kommt er mit zwei dicken Ästen wieder und sagt: "Wir schleichen uns von zwei Seiten an und jeder von uns überwältigt einen.". Langsam schleicht ihr euch an. Mögliche Befehle: - Angreifen; Inventar: ' + player.inventory[1] + player.inventory[3]);
            }

            if (choice22 === 'Angreifen') {
                for (let i = 0; i <= 2; i++) {
                    if (i < 2) {
                        choice23 = confirm('Du hast es leider noch nicht geschaft. NOCHMAL ZUSCHLAGEN!! Inventar: ' + player.inventory[1] + player.inventory[3]);
                    }else if (i === 2) {
                        choice23 = prompt('Du hast es geschaft. Doch hat dir die Wache Schaden zugefügt. HP: ' + (player.hp - 40) + ' Der Troll sagt dir das du mit dem Fisch dich heilen kannst. Mögliche Befehle: - Fisch essen; Inventar: ' + player.inventory[1] + player.inventory[3]);
                    }
                }
            }

        }
        FightWithGuard();

        // Restore HP
        function RestoreHP() {
            if (choice23 === 'Fisch essen') {
                choice24 = confirm('Deine HP Anzahl ist jetzt wieder bei ' + player.hp + '. Inventar: ' + player.inventory[1]);
            }
        }
        RestoreHP();
    }
    InTheForest();

    // In the cave
    function InTheCave() {
        choice24 = prompt('Jetzt ist der Eingang zur Höhle frei. Ihr geht rein, doch es ist stockdunkel. An der Seite siehst du eine Fackel. Mögliche Befehle: - Fackel nehmen; Inventar: ' + player.inventory[1]);

        switch(choice24) {
            case 'Fackel nehmen':
                choice25 = confirm('Du hast die Fackel aufgenommen. Inventar: ' + player.inventory[1] + player.inventory[5]); 
                break;
        }

        choice25 = confirm('Setzt siehst du einen langen schwarzen Gang vor dir. An den Seiten siehst du viele in den Stein gemeiselten Bilder. Der Troll sagt dir dass das Schwert, welches man aus dem Stein ziehen muss, am Ende der Höhle befindet. Das heißt das du auch an den erobereren vorbei musst, damit der Troll es rausziehen kann und die anderen Trolle zu befreien. Inventar: ' + player.inventory[1] + player.inventory[5]);
        
        if(choice26 = confirm('Um weiter zugehen drücke auf Ok. Inventar: ' + player.inventory[1] + player.inventory[5])) {
            choice27 = confirm('Du bist weitergegangen. Inventar: ' + player.inventory[1] + player.inventory[5]);
        }else {
            choice27 = confirm('Der Troll zwingt dich weiter zugehen. Der Troll geht vor und ihm hinterher. Inventar: ' + player.inventory[1] + player.inventory[5]);
        }

        choice27 = prompt('Nach ein paar Minuten Fussmarsch siehst du hinter einer Kurve die Wachen und ihren Anführer. Der Troll überlegt sich mit dir einen Plan. Mögliche Befehle: - Was ist dein Plan?; Inventar: ' + player.inventory[1] + player.inventory[5]);

        if (choice27 === 'Was ist dein Plan?') {
            choice28 = prompt('Der Troll erzählz dir von seinem Plan. Und zwar greifen wir die beiden äußeren mit unseren Ästen an, nehmen dann die Schwerter der beiden und überweltigen dann die restlichen. Mögliche Befehle: - Angreifen; Inventar: ' + player.inventory[1] + player.inventory[5]);
        }

        if (choice28 === 'Angreifen') {
            FightCaveGuard();
        }
        // Fight with the Cave Guards
        function FightCaveGuard() {
            for (let i = 0; i <= 2; i++) {
                if (i < 2) {
                    choice29 = confirm('Die erste Wache ist noch nicht zu boden gegangen. Noch mal schlagen. Inventar: ' + player.inventory[1] + player.inventory[5]);
                }else if (i === 2) {
                    choice29 = prompt('Die erste Wache ist zu boden gegangen. Mögliche Befehle: - Schwert nehmen; Inventar: ' + player.inventory[1] + player.inventory[5])
                }
            }

            if (choice29 === 'Schwert nehmen') {
                choice30 = prompt('Du hast das Schwert aufgenommen. Mögliche Befehle: - Angreifen; Inventar: ' + player.inventory[1] + player.inventory[5]);
            }

            if (choice30 === 'Angreifen') {
                for (let i = 0; i <= 2; i++) {
                    if (i < 2) {
                        choice31 = confirm('Die Wache ist noch nicht zuboden gegangen. Nochmal schlagen. Inventar: ' + player.inventory[1] + player.inventory[5]);
                    }else if (i === 2) {
                        choice31 = confirm('Du hast sie überweltigt.');
                    }
                }
            }
        }

        choice31 = prompt('Du hast es geschaft die Wachen zu überweltigen doch dabei ist dein Schwert zerbrochen. Mögliche Befehle: - Mit Königin sprechen; Inventar: ' + player.inventory[1] + player.inventory[5]);

        if (choice31 === 'Mit Königin sprechen') {
            choice32 = prompt('Du fängst gerade an mit der Königin zu sprechen als du den Troll hinter ihr erblickst und er sie überweltigt. Der Troll staunt: "Das war aber einfach." Mögliche Befehle: - Troll loben; Inventar: ' + player.inventory[1] + player.inventory[5]);
        }
        
        if (choice32 === 'Troll loben') {
            choice33 = prompt('Der Troll scheint glücklich zu sein, denn er erblickt das Schwert, was ihn dem Stein feststeckt. Mögliche Befehle: Schwert rausziehen; Inventar: ' + player.inventory[1] + player.inventory[5]);
        }

        if (choice33 === 'Schwert rausziehen') {
            for (var i = 0; i <= 3; i++) {
                if (i < 3) {
                    choice34 = confirm('Das Schwert ist noch nicht draußen. Inventar: ' + player.inventory[1] + player.inventory[5]);
                }else if (i === 3) {
                    choice34 = confirm('Das Schwert ist endlich draußen. Inventar: ' + player.inventory[1] + player.inventory[5]);
                }
            }
        }

        choice35 = confirm('Plötzlich verschwindet die Höhle. Du siehst wie die ganzen Bäume verschwinden und die ganzen Trolle. Plötzlich bemerkst du die Krone auf deinem Kopf. Du bist jetzt der König.')
        choice35 = prompt('ENDE!! Hat es dir gefallen?');

        body.innerHTML = choice35;
    }
    InTheCave();
})