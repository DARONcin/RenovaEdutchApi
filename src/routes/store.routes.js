import {Router} from "express";
import {methods as storeController} from "../controllers/store.controller";

const router=Router();

router.get("/", storeController.getProducts);
router.get("/:id_producto", storeController.getProduct);
router.delete("/:id_producto", storeController.deleteProduct);
router.put("/:id_producto", storeController.updateProduct);
router.post("/", storeController.addProduct);

export default router;