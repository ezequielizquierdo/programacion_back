class ProductManager { // Se crea la clase ProductManager que gestionará un conjunto de productos
  constructor() { // Se crea el constructor
    this.products = []; // Se crea el elemento products que es un array vacío
    this.currentId = 1; // Se crea una variable con el valor de 1
  }

  addProduct(product) { // Se crea la función addProduct que recibe un producto
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) { // Se valida que todos los campos sean requeridos
      console.error("All fields are required"); 
      return; // Si no se cumple la condición se retorna
    }

    
    if (this.products.some((p) => p.code === product.code)) { // Se valida que el código del producto sea único
      console.error("Product code must be unique"); // Si no se cumple la condición se imprime un mensaje
      return; // El uso del return significa que la función termina en ese punto y no se ejecuta el código que sigue a continuación en la función actual.
    }

    product.id = this.currentId++; // Se añade un id al producto que es igual a la variable currentId y se incrementa en 1.
    this.products.push(product); // Se añade el producto al array products 
  }

  getProducts() { // Se crea la función getProducts que retorna el array products
    return this.products; // Se retorna el array products 
  }

  getProductById(id) { // Se crea la función getProductById que recibe un id y retorna el producto que tenga ese id en el array products.
    const product = this.products.find((p) => p.id === id); // Se busca el producto en el array products que tenga el id igual al id recibido por parámetro en la función.
    if (!product) { // Si no se encuentra el producto se imprime un mensaje y se retorna null.
      console.error("Not found");
      return null;
    }
    return product; // Se retorna el producto encontrado.
  }
}


const manager = new ProductManager(); // Se crea una instancia de la clase ProductManager
manager.addProduct({ // Se añade un producto
  title: "Product 1",
  description: "Description 1",
  price: 100,
  thumbnail: "image1.jpg",
  code: "P001",
  stock: 10,
});

manager.addProduct({ // Se añade un producto
  title: "Product 2",
  description: "Description 2",
  price: 200,
  thumbnail: "image2.jpg",
  code: "P002",
  stock: 20,
});


console.log("TODOS LOS PRODUCTOS: ", manager.getProducts());
console.log("PRODUCTO EN EL INDICE 1: ", manager.getProductById(1));
console.log("PRODUCTO EN EL INDICE 3: ", manager.getProductById(3)); // Should print "Not found"
console.log("MANAGER: ", manager);
