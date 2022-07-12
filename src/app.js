var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var userRoutes = require("./routes/users");
var app = express();
require("../config/database");
const bodyParser = require("body-parser");

//inicio banco de dados - processo de mvc - //
const clienteRoutes = require("./routes/clienteRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");
const cartaoCadastroRoutes = require("./routes/cartaoCadastroRoutes");
const produtosRoutes = require("./routes/produtosRoutes");
const pedidoRoutes = require("./routes/pedidoRoutes");
const produtoHasPedidoRoutes = require("./routes/produtoHasPedidoRoutes");
const produtoHasFornecedorRoutes = require("./routes/produtoHasFornecedorRoutes");
const enderecosRoutes = require("./routes/enderecosRoutes");
// fim banco de dados - processo de mvc - //

// view engine setup
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// inicio banco de dados - processo de mvc - //

app.use(clienteRoutes);
app.use(fornecedorRoutes);
app.use(cartaoCadastroRoutes);
app.use(produtosRoutes);
app.use(pedidoRoutes);
app.use(produtoHasPedidoRoutes);
app.use(produtoHasFornecedorRoutes);
app.use(enderecosRoutes);

// fim banco de dados - processo de mvc - //

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

app.use("/", userRoutes);
console.log("servidor rodando");
app.listen(3000);
