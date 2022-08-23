function Story() {
    confirm('Herzlich Willkommen bei dem Text Adventure dem Geisterwald');
    var story = prompt('Du befindest dich in einer verfallenen Hütte. Du siehst ein Fenster, ein Bett auf dem du sitzt und eine Tür. Was willst du tun? Mögliche Befehle: - Umschauen, - durch die Tür gehen, - Untersuchen');
    



    if (story === 'Umschauen') {
        story =  prompt('Links von dir ist ein Fenster, direkt daneben steht das Bett auf dem du sitzt, vor dir ist die Tür und rechts daneben ist eine Angelrute. Möchtest du die Angelrute aufnehmen? Mögliche Befehle: - Ja, - Nein, - durch die Tür gehen, Untersuchen');

        if (story === "Ja") {
            story = prompt('Du hast die Angelrute aufgenommen. Sie ist nun in deinem Inventar. Mögliche Befehle: - durch die Tür gehen, Untersuchen');
            
            if (story === 'Untersuchen') {
                story =  prompt('Auf dem knarzenden Holzboden kricht ein kleiner Wurm willst du ihn aufnehmen? Mögliche Befehle: - Ja, - Nein');
            
            if (story === "Ja") {
                story = prompt('Du hast ihn aufgenommen. Er ist jetzt in deinem Inventar. Mögliche Befehle: - durch die Tür gehen');
            } else if (story === 'Nein') {
                story = prompt('Du hast ihn liegen lassen. Mögliche Befehle: - durch die Tür gehen')
            }
            }

        }else if (story === 'Nein') {
            story = prompt('Du hast die Angelrute liegen lassen. Mögliche Befehle: - durch die Tür gehen, - Untersuchen')
            if (story === 'Untersuchen') {
                story =  prompt('Auf dem knarzenden Holzboden kricht ein kleiner Wurm willst du ihn aufnehmen? Mögliche Befehle: - Ja, - Nein');
            
            if (story === "Ja") {
                story = prompt('Du hast ihn aufgenommen. Er ist jetzt in deinem Inventar. Mögliche Befehle: - durch die Tür gehen');
            } else if (story === 'Nein') {
                story = prompt('Du hast ihn liegen lassen. Mögliche Befehle: - durch die Tür gehen')
            }
            }

        }else if (story === 'Untersuchen') {
            story =  prompt('Auf dem knarzenden Holzboden kricht ein kleiner Wurm willst du ihn aufnehmen? Mögliche Befehle: - Ja, - Nein');

            if (story === "Ja") {
                story = prompt('Du hast ihn aufgenommen. Er ist jetzt in deinem Inventar. Mögliche Befehle: - durch die Tür gehen');
            } else if (story === 'Nein') {
                story = prompt('Du hast ihn liegen lassen. Mögliche Befehle: - durch die Tür gehen')
            }
        }



    } else if (story === 'Untersuchen') {
        story =  prompt('Auf dem knarzenden Holzboden kricht ein kleiner Wurm willst du ihn aufnehmen? Mögliche Befehle: - Ja, - Nein');
         
        if (story === "Ja") {
            story = prompt('Du hast ihn aufgenommen. Er ist jetzt in deinem Inventar. Mögliche Befehle: - durch die Tür gehen, - Umschauen');
        } else if (story === 'Nein') {
            story = prompt('Du hast ihn liegen lassen. Mögliche Befehle: - durch die Tür gehen, - Umschauen')
        }

        if (story === "Umschauen") {
            story = prompt('Links von dir ist ein Fenster, direkt daneben steht das Bett auf dem du sitzt, vor dir ist die Tür und rechts daneben ist eine Angelrute. Möchtest du die Angelrute aufnehmen? Mögliche Befehle: - Ja, - Nein, - durch die Tür gehen');

            if (story === "Ja") {
                story = prompt('Du hast die Angelrute aufgenommen. Sie ist nun in deinem Inventar. Mögliche Befehle: - durch die Tür gehen');
            } else if (story === 'Nein') {
                story = prompt('Du hast die Angelrute liegen lassen. Mögliche Befehle: - durch die Tür gehen')
            }
        }

    }

    story = prompt('Du stehst vor der Tür')
}

Story();