function Story() {
    confirm('Herzlich Willkommen bei dem Text Adventure dem Geisterwald');
    var story = prompt('Du befindest dich in einer verfallenen Hütte. Du siehst ein Fenster, ein Bett auf dem du sitzt und eine Tür. Was willst du tun? Mögliche Befehle: - Umschauen, - durch die Tür gehen, - Untersuchen');
    


    // inside hütte
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

    // infront of 
    story = prompt('Du stehst vor der Tür. Du siehst einen Feld weg der nach links und rechts geht. Direkt neben der Tür ist ein Rosenbusch. Mögliche Befehle: - Untersuchen, - Nach links gehen, - Nach rechts gehen');

    if (story === 'Untersuchen') {
        story = prompt('Der Rosenbusch trägt frische, gut duftende Rosen. Du plückst eine Rose von dem Busch. Du hast jetzt eine Rose in deinem Inventar. Mögliche Befehle: - Nach links gehen, - Nach rechts gehen');

        if (story === 'Nach links gehen') {
            story = prompt('Du siehst einen tiefen Fluss mit vielen Stromschnellen. Was willst du tun? Mögliche Befehle: - Wurm mit Angel kombinieren und Angeln,');
            if (story === 'Wurm mit Angel kombinieren und Angeln') {
                story = prompt('Du hast einen Fisch gefangen. Du bist aber so hungrig das du ihn ist, doch der Fisch ist vergiftet und das Gift tötet dich. Mögliche Befehle: - Zurück gehen');
    
                if (story === 'Zurück gehen') {
                    story = prompt('Du stehst vor der Tür. Du siehst einen Feld weg der nach links und rechts geht. Direkt neben der Tür ist ein Rosenbusch. Mögliche Befehle: - Nach rechts gehen');

                }
            }
        }

    }else if (story === 'Nach links gehen') {
        story = prompt('Du siehst einen tiefen Fluss mit vielen Stromschnellen. Was willst du tun? Mögliche Befehle: - Wurm mit Angel kombinieren und Angeln,');

        if (story === 'Wurm mit Angel kombinieren und Angeln') {
            story = prompt('Du hast einen Fisch gefangen. Du bist aber so hungrig das du ihn ist, doch der Fisch ist vergiftet und das Gift tötet dich. Mögliche Befehle: - Zurück gehen');

            if (story === 'Zurück gehen') {
                story = prompt('Du stehst vor der Tür. Du siehst einen Feld weg der nach links und rechts geht. Direkt neben der Tür ist ein Rosenbusch. Mögliche Befehle: - Untersuchen, - Nach rechts gehen');

                if (story === 'Untersuchen') {
                    story = prompt('Der Rosenbusch trägt frische, gut duftende Rosen. Du plückst eine Rose von dem Busch. Du hast jetzt eine Rose in deinem Inventar. Mögliche Befehle: - Nach rechts gehen');
                }
            }
        }

    } 


    story = prompt('Du siehst den Wald.');
}

Story();