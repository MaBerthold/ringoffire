import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges{
  cardAction = [
    { title: 'Witz', description: 'Du kannst jemanden aussuchen, der einen Witz erzählen soll.'},
    { title: 'Sport für alle', description: 'Alle machen 5 Kniebeuge.'},
    { title: 'Kompliment', description: 'Sage etwas nettes zu jemandem aus der Gruppe.'},
    { title: 'Sport für alle außer Dich', description: 'Alle außer Du drehen sich 3 mal im Kreis.'},
    { title: 'Nachi für...!!!', description: 'Suche jemanden aus, der eine Kleinigkeit naschen darf.'},
    { title: 'Trink Diener', description: 'Bringe jemandem etwas zu trinken.'},
    { title: 'Pfui !!', description: 'Geh bitte Deine Hände Waschen.'},
    { title: 'Gesund', description: 'Iss ein Stück Obst oder Gemüse'},
    { title: 'Hände Hoch !!', description: 'Alle müssen schnell ihre Hände hoch nehmen. Der letzte Spieler macht 2 Hock-Streck-Sprünge.'},
    { title: 'Farbspiel', description: 'Suche eine Farbe aus. Jeder Spieler, der so eine Farbe an hat, trinkt ein kleines Glas Wasser.'},
    { title: 'Aufräumen', description: 'Räume eine Sache aus dem Kinderzimmer auf.'},
    { title: 'Redepause', description: 'Du darfst eine Minute lang nicht sprechen. Benutzt einen Timer.'},
    { title: 'Sturm', description: 'Legt Euch alle schnell auf den Boden. Der letzte Spieler trinkt ein kleines Glas Wasser.'},
    { title: 'Partner', description: 'Suche dir einen Partner aus. Bei der nächsten Runde Sport, die Dein Partner machen muss, machst Du mit.'},
  ];

  title: string = '';
  description: string = '';
  @Input() card: string;

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber -1].title;
      this.description = this.cardAction[cardNumber -1].description;
    } 
  }
}
