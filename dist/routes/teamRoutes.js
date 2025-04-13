"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamController_1 = require("../controllers/teamController");
const router = (0, express_1.Router)();
router.get("/", teamController_1.getAllTeams);
router.get("/:id", teamController_1.getTeamById);
router.post("/", teamController_1.createTeam);
router.patch("/:id/shirt-color", teamController_1.updateTeamShirtColor);
router.delete("/:id", teamController_1.deleteTeam);
exports.default = router;
//# sourceMappingURL=teamRoutes.js.map