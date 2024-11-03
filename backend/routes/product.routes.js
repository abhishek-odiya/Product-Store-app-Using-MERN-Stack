import express from "express";

import { deleteProduct, createProduct, updateProduct, getProduct } from "../Controllers/product.controllers.js"

const router = express.Router();

router.get("/", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


export default router;