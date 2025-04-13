"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerController_1 = require("../controllers/playerController");
const router = (0, express_1.Router)();
router.get("/", playerController_1.getAllPlayers);
router.get("/search", playerController_1.searchPlayers);
router.get("/team/:teamId", playerController_1.getPlayersByTeam);
router.get("/:id", playerController_1.getPlayerById);
router.post("/", playerController_1.createPlayer);
router.delete("/:id", playerController_1.deletePlayer);
router.patch("/:id/transfer", playerController_1.transferPlayer);
router.patch("/:id/salary", playerController_1.updatePlayerSalary);
exports.default = router;
//# sourceMappingURL=playerRoutes.js.map