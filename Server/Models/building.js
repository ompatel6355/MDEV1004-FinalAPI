"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const buildingSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    dateBuilt: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String },
    architects: { type: [String] },
    cost: { type: String },
    website: { type: String },
    imageURL: { type: String }
});
const Building = (0, mongoose_1.model)('Building', buildingSchema);
exports.default = Building;
//# sourceMappingURL=building.js.map