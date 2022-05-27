export class Film {
  id: number;
  name: string;
  description: string;
  price: number;
  artiste: string;
  location: boolean;

  constructor(
    // valeur par defaut
    name: string = "entrer un nom...",
    description: string = "description rapide ...",
    price: number = 10,
    artiste: string = "nom de l'artiste",
    location: boolean = false,
  )
  {
    this.name = name;
    this.description = description;
    this.price = price;
    this.artiste = artiste;
    this.location = location;
  }
}
