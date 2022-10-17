//este patron todos los metodos y propiedades asignadas al prototipo original no van a ser copiadas a todas las instancias estas seran compartidas,pero si en alguna instancia el prototipo es cambiado se cambiara en todos los demas instancias, esto usa menos ocupa menos espacio en memoria
class MiClase {
  constructor(p1, p2) {
    this.propiedad = p1
    this.propiedad2 = p2
  }
  metodo = () => {
    this.propiedad * this.propiedad2
  }
}
const instancia = new MiClase(4, 8)
console.log(instancia)
