//este patron define un objeto que contiene propiedades y metodos y perpite manipularlas y acceder a ellos

const modulo = {
  prop: "mi prop",
  config: {
    lenguaje: "es",
    cache: true,
  },
  setConfig: (conf) => {
    modulo.config = conf
  },
  isCacheEnabled: () => {
    console.log(modulo.config.cache ? "si" : "no")
  },
}
console.log()
const saludar = function () {
  let saludo = "hola",
    adios = "hasta luego"
  const veAsaludar = function () {
    let dia = new Date()
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    options.timeZone = "UTC"
    options.timeZoneName = "short"
    if (dia.toLocaleDateString().includes("/")) {
      saludo = "Buenos Dias  "
    } else {
      saludo = "holi"
    }
    return saludo
  }
  const saludador = function (nombre) {
    console.log(
      `${
        veAsaludar() + nombre
      }!Bienvenid@ estamos a ${new Date().toLocaleDateString()}`
    )
  }
  return {
    saludador,
  }
}
let comunicandome = saludar()
console.log(comunicandome.saludador("Gladys"))
