import express from "express";
import ProtectRoute from "../middleware/ProtectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/", ProtectRoute, getUsersForSidebar)


export default router;