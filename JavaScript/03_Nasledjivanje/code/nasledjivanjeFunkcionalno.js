(function() {
  //spec je vidljivo jedino iz funkcije, mogu da mu pristupaju metode definisane u funkciji
  var osoba = function(spec) {
    var that = {};

    that.predstaviSe = function() { //privilegovana metode, moze da pristupi atributima iz spec
      return "Ja se zovem " + spec.ime + " " + spec.prezime;
    };

    return that;
  };

  var markoMarkovic = osoba({
    ime: "Marko",
    prezime: "Markovic"
  });

  console.log(markoMarkovic.predstaviSe());

var student = (function(){
 var brojac = 1;
 return function(spec) {
  var that = osoba(spec); //konstruktor pretka
  var studira = true; // privatni atribut, zbog closure je        // vidljiv samo u funkciji
  that.smer = spec.smer;// javni atribut that objekta koji 
          //ce biti vracen iz funkcije
  that.super_predstaviSe = that.predstaviSe;// super 
        //metoda koje cemo koristiti
  brojac += 1;//statičko polje
  var brojIndeksa = brojac;// broj indeksa je 
            //autoinkrement
  that.getIndeks = function () {//javna metoda
      return brojIndeksa;
  };
 return that;
 }
}());
  
  student.brojac = 0;

  var peraPeric = student({
    ime: "Pera",
    prezime: "Peric",
    smer: "Racunarstvo i automatika",
    ocene: [{
      predmet: "Web programiranje",
      ocena: 9
    }, {
      predmet: "Operativni sistemi",
      ocena:
      10
    }]
  });

  peraPeric.upisiOcenu({
    predmet: "Baze podataka",
    ocena: 8
  });

  var markoMitric = student({
    ime: "Marko",
    prezime: "Mitric",
    smer: "Racunarstvo i automatika",
    ocene: [{
      predmet: "Web programiranje",
      ocena: 8
    }, {
      predmet: "Operativni sistemi",
      ocena: 8
    }]
  });


  // peraPeric.ocene[2].ocena=10;// Ocene su privatni atribut, mogu da mu pristupe samo privilegovane metode

  console.log(peraPeric.predstaviSe());
  console.log(peraPeric.getCV());
  console.log(markoMitric.getCV());

}());
