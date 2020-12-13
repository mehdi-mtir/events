export class Event {
  id : number;
  titre : string;
  lieu : string;
  date_debut : Date;
  date_fin : Date;

  constructor(id : number, titre : string, lieu : string, date_debut : Date, date_fin : Date){
    this.id = id;
    this.titre = titre;
    this.lieu = lieu;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
  }
}
