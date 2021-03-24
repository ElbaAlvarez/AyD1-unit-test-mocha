const assert = require('chai').assert;
const app = require('../201408549');

describe('201408549', function(){

    describe('cuadrado()', function(){
      it('Deberia de devolver un tipo entero', function(){
          let resultado = app.cuadrado(3)
          assert.typeOf(resultado, 'number');
        });
  
      it('Cuadrado deberia de devolver 25 como resultado', function(){
          let resultado = app.cuadrado(5);
          assert.equal(resultado, 25);
      });
  
    });

    describe('cubo()', function(){
        it('Deberia de devolver un tipo entero', function(){
            let resultado = app.cubo(3)
            assert.typeOf(resultado, 'number');
          });
    
        it('Cuadrado deberia de devolver 27 como resultado', function(){
            let resultado = app.cubo(3);
            assert.equal(resultado, 27);
        });
    
      });

      describe('area_circulo()', function(){
        it('Deberia de devolver un tipo entero', function(){
            let resultado = app.area_circulo(3)
            assert.typeOf(resultado, 'number');
          });
    
        it('Cuadrado deberia de devolver 28.26 como resultado', function(){
            let resultado = app.area_circulo(3);
            assert.equal(resultado, 28.26);
        });
    
      });

      describe('area_triangulo()', function(){
        it('Deberia de devolver un tipo entero', function(){
            let resultado = app.area_triangulo(4,3)
            assert.typeOf(resultado, 'number');
          });
    
        it('Cuadrado deberia de devolver 6 como resultado', function(){
            let resultado = app.area_triangulo(4,3);
            assert.equal(resultado, 6);
        });
    
      });

      describe('perimetro_circulo()', function(){
        it('Deberia de devolver un tipo entero', function(){
            let resultado = app.perimetro_circulo(4,3)
            assert.typeOf(resultado, 'number');
          });
    
        it('Cuadrado deberia de devolver 25.12 como resultado', function(){
            let resultado = app.perimetro_circulo(4);
            assert.equal(resultado, 25.12);
        });
    
      });

});
  