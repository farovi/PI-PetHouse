const { validationResult } = require("express-validator");
const User = require("../../models/Cliente");

const loginconntroller = {
  index: (req, res) => {
    res.render("pages/login");
  },
  processRegister: (req, res) => {
    const resultValidations = validationResult(req);

    if (resultValidations.errors.length > 0) {
      return res.render("pages/login", {
        errors: resultValidations.mapped(),
        oldData: req.body,
      });
    }
    return res.send("pages/home");
  },
};

// const createUser = {
//   index: async (req, res) => {
//     const newUser = await User.create(req.body)
//       //verificando se conseguio cadastrar com sucesso
//       .then(() => {
//         return res.json({
//           erro: false,
//           mensage: "Usuario cadastrado com sucesso!",
//         });
//       })
//       .catch(() => {
//         return res.status(400).json({
//           erro: true,
//           mensage: "Usuario não cadastrado com sucesso!",
//         });
//       });
//   },
// };

module.exports = loginconntroller;
// module.exports = createUser;
