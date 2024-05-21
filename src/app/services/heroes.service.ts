import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  constructor() { 
    console.log("Servicio listo para usar")
  }

  private heroes:Heroe[]=
    [
      {
        nombre: "Aquaman",
        bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
        img: "assets/img/aquaman.png",
        aparicion: "1941-11-01",
        casa:"DC"
      },
      {
        nombre: "Batman",
        bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
        img: "assets/img/batman.png",
        aparicion: "1939-05-01",
        casa:"DC"
      },
      {
        nombre: "Daredevil",
        bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
        img: "assets/img/daredevil.png",
        aparicion: "1964-01-01",
        casa: "Marvel"
      },
      {
        nombre: "Hulk",
        bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
        img: "assets/img/hulk.png",
        aparicion: "1962-05-01",
        casa:"Marvel"
      },
      {
        nombre: "Linterna Verde",
        bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
        img: "assets/img/linterna-verde.png",
        aparicion: "1940-06-01",
        casa: "DC"
      },
      {
        nombre: "Spider-Man",
        bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
        img: "assets/img/spiderman.png",
        aparicion: "1962-08-01",
        casa: "Marvel"
      },
      {
        nombre: "Wolverine",
        bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
        img: "assets/img/wolverine.png",
        aparicion: "1974-11-01",
        casa: "Marvel"
      }
    
  ];

  private vehiculos:Vehiculo[]=
  [
    {
      placa: "ABC123",
      marca: "MAZDA",
      matenimiento: "aceite motor",
      anio: 2010,
      color:"rojo"
    },
    {
      placa: "ABC456",
      marca: "KIA",
      matenimiento: "cambio llantas",
      anio: 2022,
      color:"negro"
    },
    {
      placa: "OAA123",
      marca: "CHEVROLET",
      matenimiento: "aceite caja de transmision",
      anio: 2015,
      color:"blanco"
    },
    {
      placa: "PAC778",
      marca: "KIA",
      matenimiento: "cambio de llantas",
      anio: 2021,
      color:"azul"
    },
    {
      placa: "TBG111",
      marca: "TOYOTA",
      matenimiento: "lavada",
      anio: 2023,
      color:"negro"
    },
    {
      placa: "OBC123",
      marca: "RENAULT",
      matenimiento: "abc de frenos",
      anio: 2010,
      color:"rojo"
    },
    {
      placa: "ABC123",
      marca: "MAZDA",
      matenimiento: "aceite caja",
      anio: 2010,
      color:"rojo"
    },
    {
      placa: "PBC555",
      marca: "TOYOTA",
      matenimiento: "reparación motor",
      anio: 2010,
      color:"blaco"
    },
    {
      placa: "ABC123",
      marca: "MAZDA",
      matenimiento: "cambio de llantas",
      anio: 2010,
      color:"rojo"
    },
    {
      placa: "PBC333",
      marca: "KIA",
      matenimiento: "limpieza de inyectores",
      anio: 2009,
      color:"naranja"
    }
  ];

  getHeroes():Heroe[]{
    return this.heroes;
  }

  getVehiculos():Vehiculo[]{
    return this.vehiculos;
  }

  ordenar():Vehiculo[]{
  return this.vehiculos.sort((a, b) => b.anio - a.anio);
}




  getHeroe(idx: number){
    return this.heroes[idx];
  }

  buscarHeroes(termino:string):Heroe[]{
    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();
    for(let heroe of this.heroes){
      let nombre = heroe.nombre.toLowerCase();
      if(nombre.indexOf(termino) >=0){
        heroesArr.push(heroe)
      }
    }
    return heroesArr;

  }

  buscarVehiculos(termino:string):Vehiculo[]{
    let VehiculosArr:Vehiculo[] = [];
    termino = termino.toLowerCase();
    for(let v of this.vehiculos){
      let matenimiento = v.matenimiento.toLowerCase();
      if(matenimiento.indexOf(termino) >=0){
        VehiculosArr.push(v)
      }
    }
    return VehiculosArr;

  }



}


export interface Vehiculo{
  placa: string,
  marca: string,
  matenimiento: string,
  anio: number,
  color: string;
}

export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
};

