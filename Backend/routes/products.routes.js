import { Router } from "express";
import { getAllProducts } from "../Controllers/product.controller.js";

const router = Router();

router.get('/', getAllProducts);

// Add a test route
router.get('/test', (req, res) => {
    res.json({ message: "Router is working!" });
});

export default router;