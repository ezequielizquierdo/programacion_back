// Modulo crypto
const crypto = require("crypto"); // modulo de node para encriptar

// Se creará una clase "usersManager" que permitirá guardar a los usuarios en un atributo estatico.
// El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con cryppto.
// Utilizar el módulo nativo crypto.
// El manager debe contar con los siguientes métodos.
// Nombre, Apellido, Nombre de usuario, Contrasena
// El método debe guardar un usuario en un atributo estático llamado "Usuarios", recordando que la contraseña debe estar hasheada por seguridad.

class UsersManager {
    static usuarios = [];
  
    static crearUsuario({ nombre, apellido, username, password }) {
      const hash = crypto.createHash("sha256");
      console.log("01 -> hash", hash);
  
      hash.update(password);
      const passwordEncrypt = hash.digest("hex");
      console.log("02 -> passwordEncrypt", passwordEncrypt);
  
      const usuario = {
        nombre,
        apellido,
        username,
        password: passwordEncrypt, // Corregido para usar la variable passwordEncrypt
      };
      UsersManager.usuarios.push(usuario);
      return "usuario creado";
    }
  
    static mostrarUsuarios() {
      console.log(UsersManager.usuarios);
    }
  
    static validarUsuario({ username, password }) {
      const usuario = UsersManager.usuarios.find(
        (usuario) => usuario.username === username
      );
      if (!usuario) {
        console.log("Usuario no encontrado");
        return;
      }
      const hash = crypto.createHash("sha256");
      hash.update(password);
      const encryptPassword = hash.digest("hex");
      if (usuario.password === encryptPassword) {
        console.log("Usuario valido");
      } else {
        console.log("Usuario invalido");
      }
    }
  }
  
  // Crear un usuario
  UsersManager.crearUsuario({
    nombre: "Juan",
    apellido: "Perez",
    username: "juanperez",
    password: "password123",
  });
  
  // Validar el usuario
  UsersManager.validarUsuario({ username: "juanperez", password: "password1233" });