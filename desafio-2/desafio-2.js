const fs = require("fs");
class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  save(obj) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.nombreArchivo, (err, data) => {
        if (err) {
          reject(err);
        } else {
          let array = JSON.parse(data);
          let id = array.length + 1;
          obj.id = id;
          array.push(obj);
          fs.writeFile(this.nombreArchivo, JSON.stringify(array), (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(id);
            }
          });
        }
      });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.nombreArchivo, (err, data) => {
        if (err) {
          reject(err);
        } else {
          let array = JSON.parse(data);
          let obj = array.find((obj) => obj.id == id);
          resolve(obj);
        }
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.nombreArchivo, (err, data) => {
        if (err) {
          reject(err);
        } else {
          let array = JSON.parse(data);
          resolve(array);
        }
      });
    });
  }

  deleteById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.nombreArchivo, (err, data) => {
        if (err) {
          reject(err);
        } else {
          let array = JSON.parse(data);
          let obj = array.find((obj) => obj.id == id);
          let index = array.indexOf(obj);
          if (array.length == 0) {
            reject("No hay productos");
          }  else {
            array.splice(index, 1).forEach((obj) => {
              obj.id = obj.id - 1;
            });
            fs.writeFile(this.nombreArchivo, JSON.stringify(array), (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          }
        }
      });
    });
  }

  deleteAll() {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.nombreArchivo, JSON.stringify([]), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

const contenedor = new Contenedor("desafio-2/productos.txt");

contenedor
  .save({
    title: "Escuadra",
    price: 123.45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  }
  )
  .then((id) => {
    console.log(`Ejecutando accion save() con id: ${id}`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Save Finished");
  });

contenedor
  .getById(2)
  .then((obj) => {
    console.log(obj);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("GetById Finished");
  });

contenedor
  .getAll()
  .then((array) => {
    console.log(array);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("getAll Finished");
  });

contenedor
  .deleteById(2)
  .then(() => {
    console.log("Eliminado");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('DeleteById Finished');
  });

contenedor
  .deleteAll()
  .then(() => {
    console.log("All products deleted");
  })
  .catch((err) => {
    console.log(err);
  }).finally(() => {
    console.log("DeleteAll Finished");
  }
);
