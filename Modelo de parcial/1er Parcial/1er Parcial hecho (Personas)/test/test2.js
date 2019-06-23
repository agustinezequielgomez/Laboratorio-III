/*==============================================================================*/
/* Casper generated Mon Oct 08 2018 20:31:35 GMT-0300 (Argentina Standard Time) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1536, height: 754};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('http://localhost:3000/');
   casper.waitForSelector("input[type=button][value='Agregar']",
       function success() {
           test.assertExists("input[type=button][value='Agregar']");
           this.click("input[type=button][value='Agregar']");
       },
       function fail() {
           test.assertExists("input[type=button][value='Agregar']");
   });
   casper.waitForSelector("input[name='id']",
       function success() {
           this.sendKeys("input[name='id']", "000");
       },
       function fail() {
           test.assertExists("input[name='id']");
   });
   casper.waitForSelector("input[name='nombre']",
       function success() {
           test.assertExists("input[name='nombre']");
           this.click("input[name='nombre']");
       },
       function fail() {
           test.assertExists("input[name='nombre']");
   });
   casper.waitForSelector("input[name='nombre']",
       function success() {
           this.sendKeys("input[name='nombre']", "testnombre");
       },
       function fail() {
           test.assertExists("input[name='nombre']");
   });
   casper.waitForSelector("input[name='apellido']",
       function success() {
           test.assertExists("input[name='apellido']");
           this.click("input[name='apellido']");
       },
       function fail() {
           test.assertExists("input[name='apellido']");
   });
   casper.waitForSelector("input[name='apellido']",
       function success() {
           this.sendKeys("input[name='apellido']", "testapellido");
       },
       function fail() {
           test.assertExists("input[name='apellido']");
   });
   casper.waitForSelector("input[name='alias']",
       function success() {
           test.assertExists("input[name='alias']");
           this.click("input[name='alias']");
       },
       function fail() {
           test.assertExists("input[name='alias']");
   });
   casper.waitForSelector("input[name='alias']",
       function success() {
           this.sendKeys("input[name='alias']", "testalias");
       },
       function fail() {
           test.assertExists("input[name='alias']");
   });
   casper.waitForSelector("input[name='edad']",
       function success() {
           test.assertExists("input[name='edad']");
           this.click("input[name='edad']");
       },
       function fail() {
           test.assertExists("input[name='edad']");
   });
   casper.waitForSelector("input[name='edad']",
       function success() {
           this.sendKeys("input[name='edad']", "99");
       },
       function fail() {
           test.assertExists("input[name='edad']");
   });
   casper.waitForSelector("input[type=submit][value='Dar de Alta']",
       function success() {
           test.assertExists("input[type=submit][value='Dar de Alta']");
           this.click("input[type=submit][value='Dar de Alta']");
       },
       function fail() {
           test.assertExists("input[type=submit][value='Dar de Alta']");
   });
  /* casper.then(function(){
        this.click('#btnAgregar');
   });*/
   casper.then(function(){
        casper.wait(10000, function(){
            var tr_array = document.querySelectorAll("#bodyTabla");
            this.echo("cantidad de elementos encontrados: " + tr_array.children.length);
            this.echo(last_tr.children[0].textContent);
            var last_tr = tr_array[tr_array.length -1];
             this.echo(last_tr.children[0].textContent);
            this.assert(last_tr.children[0].textContent == "0");
        })
   });

 /*  casper.waitForSelector("thead",
        function success() {
            var tr_array = document.querySelectorAll("tbody tr");
            var last_tr = tr_array[tr_array.length -1];
             this.echo(last_tr.children[0].textContent);
            this.assert(last_tr.children[0].textContent == "0");
        },
        function fail() {
         this.echo("todo mal");
    });*/
  

   casper.run(function() {test.done();});
});