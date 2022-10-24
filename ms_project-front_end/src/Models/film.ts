
export class Film{
      id!: number;
      nomFilm:string;
      description:string;
      duree:number;
      dateSortie: Date;
      acteurs:string;
      categorieFilm: string;
      //realisateurs: Realisateur[] = [];

      constructor(nomFilm:string,
        description:string,
        duree:number,
        dateSortie: Date,
        acteurs:string,
        categorieFilm: string,
        //realisateurs: Realisateur
        ) {
        this.nomFilm = nomFilm;
        this.description = description;
        this.duree = duree;
        this.dateSortie = new Date;
        this.acteurs = acteurs;
        this.categorieFilm = categorieFilm;
      }

}
