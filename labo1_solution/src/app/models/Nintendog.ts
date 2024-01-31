export class Nintendog{
    // Propriété(s) explicite(s)
    age : number = 3;
  
    // Constructeur (avec deux propriétés implicites)
    constructor(
      public name : string, 
      public imgUrl : string
    ){}
  
    // Méthode(s)
    dogInfo(){
      return this.name + " est un Nintendog de " + this.age + " an(s)."
    }
  }