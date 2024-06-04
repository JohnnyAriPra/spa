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


  private rutas:Ruta[]=
  [
    {
      origen: "Pasaje",
      destino: "Machala",
      precio: 10,
      descripcion: "Viaje comodo desde Pasaje a la ciudad de Machala",
      tipo:"Interno"
    },
    {
      origen: "Guayaquil",
      destino: "Cuenca",
      precio: 40,
      descripcion: "Viaje comodo desde Guayaquil a la ciudad de Cuenca",
      tipo:"Interno"
    },
    {
      origen: "Manta",
      destino: "Salinas",
      precio: 30,
      descripcion: "Viaje comodo desde Manta a la ciudad de Salinas",
      tipo:"Interno"
    },
    {
      origen: "Esmeraldas",
      destino: "Manabi",
      precio: 30,
      descripcion: "Viaje comodo desde Esmeraldas a la ciudad de Manabi",
      tipo:"Interno"
    },
    {
      origen: "Loja",
      destino: "Napo",
      precio: 30,
      descripcion: "Viaje comodo desde Loja a la ciudad de Napo",
      tipo:"Interno"
    },
    {
      origen: "Zamora",
      destino: "Pinas",
      precio: 30,
      descripcion: "Viaje comodo desde Zamora a la ciudad de Pinas",
      tipo:"Interno"
    },
    {
      origen: "Machala",
      destino: "Pasaje",
      precio: 10,
      descripcion: "Viaje comodo desde Machala a la ciudad de Pasaje",
      tipo:"Interno"
    },
    {
      origen: "Morona",
      destino: "Quito",
      precio: 50,
      descripcion: "Viaje comodo desde Morona a la ciudad de Quito",
      tipo:"Interno"
    },
    {
      origen: "Quito",
      destino: "Machala",
      precio: 60,
      descripcion: "Viaje comodo desde Quito a la ciudad de Machala",
      tipo:"Interno"
    },
    {
      origen: "Machala",
      destino: "Peru",
      precio: 100,
      descripcion: "Viaje comodo desde Machala a la ciudad de Peru",
      tipo:"Externo"
    }
  ];




  getHeroes():Heroe[]{
    return this.heroes;
  }

  getVehiculos():Vehiculo[]{
    return this.vehiculos;
  }

  getRutas():Ruta[]{
    return this.rutas;
  }
  ordenar():Vehiculo[]{
  return this.vehiculos.sort((a, b) => b.anio - a.anio);
}



getRuta(idx: number){
  return this.rutas[idx];
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


  buscarRutas(termino:string):Ruta[]{
    let rutasArr:Ruta[] = [];
    termino = termino.toLowerCase();
    for(let ru of this.rutas){
      let origen = ru.origen.toLowerCase();
      let destino = ru.destino.toLowerCase();
      if(origen.indexOf(termino) >=0 || destino.indexOf(termino) >=0){
        rutasArr.push(ru)
      }
    }
    return rutasArr;

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


export interface Ruta{
  origen: string;
  destino: string;
  precio: number;
  descripcion: string;
  tipo: string;
};

