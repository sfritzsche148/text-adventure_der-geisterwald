function Story() {
    confirm('Herzlich Willkommen bei dem Text Adventure dem Geisterwald');
    var story = prompt('Du befindest dich in einer verfallenen Hütte. Du siehst ein Fenster, ein Bett auf dem du sitzt und eine Tür. Was willst du tun? Mögliche Befehle: - Umschauen, - durch die Tür gehen, - Untersuchen');
    


    // IN der Hütte
    if (story === 'Umschauen') {
        story =  prompt('Links von dir ist ein Fenster, direkt daneben steht das Bett auf dem du sitzt, vor dir ist die Tür und rechts daneben ist eine Angelrute. Du hast jetzt eine Angelrute in deinem Inventar. Mögliche Befehle:  - durch die Tür gehen, Untersuchen');

        if (story === "Untersuchen") {
            story =  prompt('Auf dem knarzenden Holzboden kricht ein kleiner Wurm. Du hast ein Wurm in deinem Inventar. Mögliche Befehle: - durch die Tür gehen');
        }
    



    }else if (story === 'Untersuchen') {
        story =  prompt('Auf dem knarzenden Holzboden kricht ein kleiner Wurm. Du hast ein Wurm in deinem Inventar. Mögliche Befehle: - Umschauen, - durch die Tür gehen');
         

        if (story === 'Umschauen') {
            story = prompt('Links von dir ist ein Fenster, direkt daneben steht das Bett auf dem du sitzt, vor dir ist die Tür und rechts daneben ist eine Angelrute. Du hast jetzt eine Angelrute in deinem Inventar. Mögliche Befehle: - durch die Tür gehen');
        }

    }

    // Vor der Hütte
    story = prompt('Du stehst vor der Tür. Du siehst einen Feld weg der nach links und rechts geht. Direkt neben der Tür ist ein Rosenbusch. Mögliche Befehle: - Untersuchen, - Nach links gehen, - Nach rechts gehen');

    if (story === 'Untersuchen') {
        story = prompt('Der Rosenbusch trägt frische, gut duftende Rosen. Du plückst eine Rose von dem Busch. Du hast jetzt eine Rose in deinem Inventar. Mögliche Befehle: - Nach links gehen, - Nach rechts gehen');

        if (story === 'Nach links gehen') {
            story = prompt('Du siehst einen tiefen Fluss mit vielen Stromschnellen. Was willst du tun? Mögliche Befehle: - Wurm mit Angel kombinieren und Angeln,');
            if (story === 'Wurm mit Angel kombinieren und Angeln') {
                story = prompt('Du hast einen Fisch gefangen. Du bist aber so hungrig das du ihn ist, doch der Fisch ist vergiftet und das Gift tötet dich. Mögliche Befehle: - Vom letzten Checkpoint starten');
    
                if (story === 'Vom letzten Checkpoint starten') {
                    story = prompt('Du stehst vor der Tür. Du siehst einen Feld weg der nach links und rechts geht. Direkt neben der Tür ist ein Rosenbusch. Mögliche Befehle: - Nach rechts gehen');

                }
            }
        }

    }else if (story === 'Nach links gehen') {
        story = prompt('Du siehst einen tiefen Fluss mit vielen Stromschnellen. Was willst du tun? Mögliche Befehle: - Wurm mit Angel kombinieren und Angeln,');

        if (story === 'Wurm mit Angel kombinieren und Angeln') {
            story = prompt('Du hast einen Fisch gefangen. Du bist aber so hungrig das du ihn ist, doch der Fisch ist vergiftet und das Gift tötet dich. Mögliche Befehle: - Vom letzten Checkpoint starten');

            if (story === 'Vom letzten Checkpoint starten') {
                story = prompt('Du stehst vor der Tür. Du siehst einen Feld weg der nach links und rechts geht. Direkt neben der Tür ist ein Rosenbusch. Mögliche Befehle: - Untersuchen, - Nach rechts gehen');

                if (story === 'Untersuchen') {
                    story = prompt('Der Rosenbusch trägt frische, gut duftende Rosen. Du plückst eine Rose von dem Busch. Du hast jetzt eine Rose in deinem Inventar. Mögliche Befehle: - Nach rechts gehen');
                }
            }
        }

    }

    // Vor dem Wlad
    story = confirm('In der ferne siehst du ein großes Tor aus Steinen die mit grünen Rankpflanzen verwachsen sind. Als du  ankommst kannst du auf einem alten Holz Schild “DER GEISTERWALD Betreten strengsten Verboten!!!” entziffern. Trotzdem gehst du durch. Als du durch gegangen bist verschließt sich das Tor, sodass du nicht mehr herauskommst.');
    
    // Im Wald
    story = confirm('Vor dir stehen viele große Bäume auf dem matschigen Waldboden. Du stolperst ausversehen gegen einen der Bäume.');
    story = confirm('Du hörst nur ein dumpfes “EY, pass doch auf”.')
    story = prompt('Du schaust verwundert nach oben. Mögliche Befehle: - Untersuchen');

    // Baum Untersuchen
    story = confirm('Du gehst um den Baum rum und findest hinten einen kleinen Eingang. Von der Neugirde gepackt gehst du durch das kleine Loch und siehst einen kleinen Troll drin gefangen.');
    story = confirm('Leise flüsterst du zu ihm “Was machst du hier?”. Der Troll antwortet “Wir wurden von dem König der Geister in Bäume verwandelt und er hat unsere Höhle eingenommen."');
    story = prompt('Du schaust dich in dem Baum um und findest am Boden eine Steinplatte mit einer Rose drauf. Mögliche Befehle: - Rose auf die Platte legen');
    
    // Troll befreit
    story = confirm('Plötzlich verschwindet der Baum und deine Rose. Du siehst nur noch den Troll der dir unglaublich dankbar ist.');
    story = prompt('Der Troll bietet dich ihm zu helfen die Eindringlinge zu stürzen und die Höhle zu befreien um auch die anderen Trolle wieder zu befreien. Mögliche Befehle: - Ja, - Nein')

    if (story === 'Nein') {
        story = confirm('Der Troll fleht dich an ihm zu helfen bis du einwiligst und ihm hilfst.');
    }

    story = confirm('Der Troll ist überglücklich und sagt “Zur Höhle müssen wir hier lang gehen.”. Du folgst ihm.');

    // Vor der Brücke
    
}

Story();