casper.test.begin('Testeo de la pagina Principal', 5, function suite(test) {
    casper.start("http://localhost:3000/", function() {
        test.assertTitle("ABM SuperHeroes", "El homepage tiene el nombre correcto");
        test.assertExists('#tablaLista', "la tabla principal existe");
        test.assertExists('#btnAlta', "El Boton de alta existe");
      /*  this.fill('form[action="/search"]', {
            q: "casperjs"
        }, true);*/
    });

  /*  casper.then(function() {
        test.assertTitle("casperjs - Recherche Google", "google title is ok");
        test.assertUrlMatch(/q=casperjs/, "search term has been submitted");
        test.assertEval(function() {
            return __utils__.findAll("h3.r").length >= 10;
        }, "google search for \"casperjs\" retrieves 10 or more results");
    });*/

    casper.run(function() {
        test.done();
    });
});