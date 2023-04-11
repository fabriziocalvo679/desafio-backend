class ProductManager {
  constructor() {
    this.products = [];
    this.contadorId = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error("Todos los campos son obligatorios");
    }

    // Validar que no se repita el campo “code”
    const codigoExistente  = this.products.some(product => product.code === code);
    if (codigoExistente) {
      throw new Error("Ya existe un producto con ese código");
    }

    // Crear el nuevo producto con el id autoincrementable
    const newProduct = {
      id: this.contadorId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };
    this.contadorId++;

    // Agregar el nuevo producto al arreglo de productos
    this.products.push(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId) {
    const product = this.products.find(product => product.id === productId);
    if (!product) {
      console.error("Not found");
    }
    return product;
  }
}

const Postres = new ProductManager();
Postres.addProduct("Carrot Cake", "torta a base de zanahoria ", 800, "ruta/imagen1.jpg", "P1", 8);
Postres.addProduct("Chocotorta", "torta clasica hecha con galletitas chocolinas", 700, "ruta/imagen2.jpg", "P2", 12);

const products = Postres.getProducts();
console.log(products);

const product = Postres.getProductById(2);
console.log(product);





