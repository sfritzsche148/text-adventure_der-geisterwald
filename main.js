document.getElementById("btn").onclick = function() {
    btn.addEventListener('click', () => {
        var story = document.getElementById("text");
        var inp = document.getElementById("inp").value;
        var btn = document.getElementById("btn");

        btn.innerHTML = 'Einreichen'

        // In der Hütte
        if (inp === 'Umschauen') {
            story.innerHTML = 'Links von dir ist ein Fenster, direkt daneben steht das Bett auf dem du sitzt, vor dir ist die Tür und rechts daneben ist eine Angelrute. Du hast jetzt eine Angelrute in deinem Inventar. Mögliche Befehle:  - durch die Tür gehen, Untersuchen';

            
        }else if (inp === 'Untersuchen') {
            story.innerHTML = 'Auf dem knarzenden Holzboden kricht ein kleiner Wurm. Du hast ein Wurm in deinem Inventar. Mögliche Befehle: - Umschauen, - durch die Tür gehen';
        

        // Vor der Hütte
        }else if (inp === 'durch die Tür gehen') {
            story.innerHTML = 'Du stehst vor der Tür. Du siehst einen Feld weg der nach links und rechts geht. Direkt neben der Tür ist ein Rosenbusch. Mögliche Befehle: - Busch Untersuchen, - Nach links gehen, - Nach rechts gehen';
        }

        if (inp === 'Nach links gehen') {
            story.innerHTML = 'Du siehst einen tiefen Fluss mit vielen Stromschnellen. Was willst du tun? Mögliche Befehle: - Angeln';
            
        }else if (inp === 'Busch Untersuchen') {
            story.innerHTML = 'Der Rosenbusch trägt frische, gut duftende Rosen. Du plückst eine Rose von dem Busch. Du hast jetzt eine Rose in deinem Inventar. Mögliche Befehle: - Nach links gehen, - Nach rechts gehen';
        
        }else if (inp === 'Nach rechts gehen') {
            story.innerHTML = 'In der ferne siehst du ein großes Tor aus Steinen die mit grünen Rankpflanzen verwachsen sind. Als du  ankommst kannst du auf einem alten Holz Schild “DER GEISTERWALD Betreten strengsten Verboten!!!” entziffern. Trotzdem gehst du durch. Als du durch gegangen bist verschließt sich das Tor, sodass du nicht mehr herauskommst. Vor dir stehen viele große Bäume auf dem matschigen Waldboden. Du stolperst ausversehen gegen einen der Bäume. Du hörst nur ein dumpfes “EY, pass doch auf”. Du schaust verwundert nach oben. Mögliche Befehle: - Baum Untersuchen';

        }

        // Nach links Story
        if (inp === 'Angeln') {
            story.innerHTML = 'Du hast einen Fisch gefangen. Du bist aber so hungrig das du ihn ist, doch der Fisch ist vergiftet und das Gift tötet dich. Mögliche Befehle: - Vom letzten Checkpoint starten';
        }

        if (inp === 'Vom letzten Checkpoint starten') {
            story.innerHTML = 'Du stehst vor der Tür. Du siehst einen Feld weg der nach links und rechts geht. Direkt neben der Tür ist ein Rosenbusch. Mögliche Befehle: - Busch Untersuchen, -  Nach rechts gehen';
        }

        // Im Wald Baum Untersuchen
        if (inp === 'Baum Untersuchen') {
            story.innerHTML = 'Du gehst um den Baum rum und findest hinten einen kleinen Eingang. Von der Neugirde gepackt gehst du durch das kleine Loch und siehst einen kleinen Troll drin gefangen. Leise flüsterst du zu ihm “Was machst du hier?”. Der Troll antwortet “Wir wurden von dem König der Geister in Bäume verwandelt und er hat unsere Höhle eingenommen.”Du schaust dich in dem Baum um und findest am Boden eine Steinplatte mit einer Rose drauf. Mögliche Befehle: - Rose auf die Platte legen';
        }

        //Rose auf Platte -> Schlüssel
        if (inp === 'Rose auf die Platte legen') {
            story.innerHTML = 'Plötzlich verschwindet der Baum und deine Rose. Du siehst nur noch den Troll der dir unglaublich dankbar ist. Der Troll bietet dich ihm zu helfen die Eindringlinge zu stürzen und die Höhle zu befreien um auch die anderen Trolle wieder zu befreien. Mögliche Befehle: - Ja, - Nein';
        }

        if (inp === 'Ja') {
            story.innerHTML = 'Der Troll ist überglücklich und sagt “Zur Höhle müssen wir hier lang gehen.”. Du folgst ihm. Ihr seid bei einer zerstörten Brücke angekomen“Oh nein sie haben die Brücke zerstört.”, sagte der Troll. Im Fluss siehst du viel Holz rum schwimmen. Mögliche Befehle: - Angel benutzen, - durch schwimmen';
        }else if (inp === 'Nein') {
            story.innerHTML = 'Der Troll fleht dich an ihm zu helfen bis du einwiligst und ihm hilfst. Ihr seid bei einer zerstörten Brücke angekomen“Oh nein sie haben die Brücke zerstört.”, sagte der Troll. Im Fluss siehst du viel Holz rum schwimmen. Mögliche Befehle: - Angel benutzen, - durch schwimmen';
        }

        // Brücke reparieren
        if (inp === 'Angel benutzen') {
            story.innerHTML = 'Während du mit der Angel ein paar Holzbalken geangelt hast kommt der Troll mit langen Gräsern im Arm, um die Bretter mit einander zu verzuren. Mögliche Befehle: - bauen';
        }else if (inp === 'durch schwimmen') {
            story.innerHTML = 'Darauf hin meint der Troll das es viel zu gefährlich sei durch den Fluss zu schwimmen und du dich deshalb für die Brücke entscheidest. Mögliche Befehle: - bauen';
        }

        if (inp === 'bauen') {
            story.innerHTML = 'Nach einigen Stunden Angeln und Bretter verzuren ist es soweit die Brücke ist fertig. kämpfen';
        }        

        // TODO Anschleichen

        // Kampf mit den Wachen
        if (inp ==='kämpfen') { 
            
        }

        // TODO Höhle beschreiben
        
        // TODO Fackeln abschlagen
});
} 