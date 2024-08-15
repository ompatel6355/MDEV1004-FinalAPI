"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const building_1 = require("../Controllers/building");
router.get('/', (req, res, next) => { (0, building_1.DisplayBuildingList)(req, res, next); });
router.get('/:id', (req, res, next) => { (0, building_1.DisplayBuildingById)(req, res, next); });
router.post('/add', (req, res, next) => { (0, building_1.AddBuilding)(req, res, next); });
router.put('/update/:id', (req, res, next) => { (0, building_1.UpdateBuilding)(req, res, next); });
router.delete('/delete/:id', (req, res, next) => { (0, building_1.DeleteBuilding)(req, res, next); });
exports.default = router;
//# sourceMappingURL=index.js.map