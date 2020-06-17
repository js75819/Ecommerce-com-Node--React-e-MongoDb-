const router = require("express").Router();

const PedidoController = require("../../../controllers/PedidoController");

const { LojaValidation } = require("../../../controllers/validacoes/lojaValidation");
const Validation = require("express-validation");
const { PedidoValidation } = require("../../../controllers/validacoes/pedidoValidation");
const auth = require("../../auth");

const pedidoController = new PedidoController();

// ADMIN
router.get("/admin", auth.required, LojaValidation.admin, Validation(PedidoValidation.indexAdmin), pedidoController.indexAdmin);
router.get("/admin/:id", auth.required, LojaValidation.admin,Validation(PedidoValidation.showAdmin), pedidoController.showAdmin);

router.delete("/admin/:id", auth.required, LojaValidation.admin,Validation(PedidoValidation.removeAdmin), pedidoController.removeAdmin);



// -- carrinho
router.get("/admin/:id/carrinho", auth.required, LojaValidation.admin, Validation(PedidoValidation.showCarrinhoPedidoAdmin), pedidoController.showCarrinhoPedidoAdmin);

// -- entrega

// -- pagamento


// CLIENTE
router.get("/", auth.required,  Validation(PedidoValidation.indexAdmin), pedidoController.index);
router.get("/:id", auth.required,  Validation(PedidoValidation.showAdmin), pedidoController.show);
router.post("/", auth.required,  Validation(PedidoValidation.showAdmin), pedidoController.store);
router.delete("/:id", auth.required,  Validation(PedidoValidation.removeAdmin), pedidoController.remove);

// -- carrinho
router.get("/:id/carrinho", auth.required,  Validation(PedidoValidation.showCarrinhoPedidoAdmin), pedidoController.showCarrinhoPedido);

// -- entrega

// -- pagamento
module.exports = router;