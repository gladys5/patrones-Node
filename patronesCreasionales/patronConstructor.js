//este patron  crea objetos en base a una clase  ante poniendo la palabra new creamos  nuevas instancias de los objetos (copiando) sus propiedades y metodos

class MiClase {
  constructor(p1) {
    this.propiedad = p1
    this.metodo = () => {}
  }
}
const instancia = new MiClase(4)
console.log(instancia)
