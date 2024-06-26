const { People, Carrer } = require("../../db.js");
const jwt = require("jsonwebtoken");

exports.postSignInController = async (req, res) => {
  console.log("Estoy en el signincontroller");

  try {
    const { fullName, email, password, typeAdmin, yearsOfCarrer, idCarrer } = req.body;

    // Verifica si se proporcionaron los datos
    if (!fullName || !email || !password || !yearsOfCarrer || !idCarrer ) {
      return res.status(400).json({
        error: "Todos los campos son requeridos.",
      });
    }

    const carrer = await Carrer.findByPk(idCarrer);
    if (!carrer) {
      return res.status(404).json({ error: "Carrer or Company not found." });
    }

    console.log("Paso la verificación de usuario, email y contraseña");
    const existingUser = await People.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "El correo electrónico ya está registrado." });
    }

    console.log("El correo electrónico no está registrado, procediendo con la creación del usuario");

    const adminStatus = typeAdmin !== undefined ? typeAdmin : false;

    // Crear el nuevo usuario en la base de datos
    const newUser = await People.create({
      fullName,
      email,
      password, // Almacena la contraseña sin hashear (¡No recomendado para producción!)
      typeAdmin: adminStatus,
      yearsOfCarrer,
    });
    await newUser.addCarrer(carrer);
    
    console.log("Creó el usuario en la DB");
    
    // Genera un token JWT con la información del usuario
    const token = jwt.sign(
      {
        idPeople: newUser.idPeople,
        email: newUser.email,
        typeAdmin: newUser.typeAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log("creo el token");

    // Devolver una respuesta exitosa sin token
    res.status(201).json({ message: "Usuario creado exitosamente", token });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
