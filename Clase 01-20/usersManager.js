const fs = require("fs").promises; // Importamos el módulo fs.promises
const path = require('path'); // Importamos el módulo path

class UsersManager {
  // El constructor de esta clase debe recibir como parámetro la ruta del archivo donde se almacenarán los datos de los usuarios. Este archivo será un archivo JSON que contendrá una lista de usuarios.
  constructor(filePath) {
    this.filePath = filePath;
  }

  // Método para inicializar el archivo si no existe
  async initializeFile() {
    try {
      await fs.access(this.filePath);
    } catch (error) {
      // Si el archivo no existe, lo creamos con un array vacío
      await fs.writeFile(this.filePath, JSON.stringify([]));
    }
  }

  // Método para agregar un nuevo usuario
  async addUser(user) {
    try {
      await this.initializeFile(); // Inicializar el archivo si no existe

      // Leer el archivo y parsear el contenido a un array de usuarios
      const data = await fs.readFile(this.filePath, "utf8");
      let users = JSON.parse(data);

      // Verificar si ya existe un usuario con el mismo nombre
      const existingUser = users.find(u => u.name === user.name);
      if (existingUser) {
        console.error(`Error: Ya existe un usuario con el nombre ${user.name}`);
        return;
      }

      // Encontrar el mayor id actual y asignar el próximo id incremental
      const maxId = users.reduce((max, u) => (u.id > max ? u.id : max), 0);
      user.id = maxId + 1;

      // Añadir el nuevo usuario al array
      users.push(user);

      // Escribir el array actualizado en el archivo
      await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));

      console.log(`Usuario ${user.name} agregado exitosamente.`);
    } catch (error) {
      console.error("Error al agregar el usuario:", error);
    }
  }

  // Método para obtener la lista de usuarios
  async getUsers() {
    try {
      await this.initializeFile(); // Inicializar el archivo si no existe

      const data = await fs.readFile(this.filePath, "utf-8"); // Leemos el archivo
      const users = JSON.parse(data); // Parseamos el contenido a un array de usuarios
      console.log("data en getUsers", data);
      console.log("users en getUsers", users);
      return users; // Devolvemos el array de usuarios
    } catch (error) {
      // Manejamos el error
      console.error("Error leyendo el archivo de usuarios:", error); // Log del error
      return []; // Devolvemos un array vacío
    }
  }

  // Método para eliminar un usuario por ID
  async deleteUser(userId) {
    try {
      await this.initializeFile(); // Inicializar el archivo si no existe

      const data = await fs.readFile(this.filePath, 'utf8');
      const users = JSON.parse(data);
      console.log("data en deleteUser", data);
      console.log("users en deleteUser", users);
      const updatedUsers = users.filter(user => user.id !== userId);
      await fs.writeFile(this.filePath, JSON.stringify(updatedUsers, null, 2));
      console.log(`Usuario con ID ${userId} eliminado.`);
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  }

  // Método para eliminar todo el contenido del archivo
  async clearUsers() {
    try {
      await fs.writeFile(this.filePath, JSON.stringify([]));
      console.log("Usuarios eliminados.");
    } catch (error) {
      console.error("Error al eliminar el contenido del archivo:", error);
    }
  }
}

// Ejemplo de uso
const usersManager = new UsersManager(path.join(__dirname, 'users.json'));

// Ejemplo de uso addUser
async function addMultipleUsers() {
  await usersManager.addUser({ name: 'John Doe' });
  await usersManager.addUser({ name: 'Ezequiel Izquierdo' });
  await usersManager.addUser({ name: 'Jane Doe' });
}

addMultipleUsers().then(() => {
  // Ejemplo de uso getUsers
  usersManager.getUsers().then(users => console.log(users));
});

// Ejemplo de uso deleteUser
// usersManager.deleteUser(1);

// Ejemplo de uso clearUsers
// usersManager.clearUsers();