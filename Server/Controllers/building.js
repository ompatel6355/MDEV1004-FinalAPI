"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBuilding = exports.UpdateBuilding = exports.AddBuilding = exports.DisplayBuildingById = exports.DisplayBuildingList = void 0;
const building_1 = __importDefault(require("../Models/building"));
const Util_1 = require("../Util");
function DisplayBuildingList(req, res, next) {
    building_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Building List Retrieved and Displayed", data: data });
    })
        .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, msg: "Failed to retrieve building list", data: err });
    });
}
exports.DisplayBuildingList = DisplayBuildingList;
function DisplayBuildingById(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrieve a building", data: "" });
    }
    else {
        building_1.default.findById({ _id: id })
            .then((data) => {
            if (data) {
                res.status(200).json({ success: true, msg: "One Building Retrieved and Displayed", data: data });
            }
            else {
                res.status(404).json({ success: false, msg: "Building not found", data: "" });
            }
        })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "Failed to retrieve building", data: err });
        });
    }
}
exports.DisplayBuildingById = DisplayBuildingById;
function AddBuilding(req, res, next) {
    let architects = (req.body.architects) ? (0, Util_1.SanitizeArray)(req.body.architects) : (0, Util_1.SanitizeArray)("");
    let building = new building_1.default({
        name: req.body.name,
        type: req.body.type,
        dateBuilt: req.body.dateBuilt,
        city: req.body.city,
        country: req.body.country,
        description: req.body.description,
        architects: architects,
        cost: req.body.cost,
        website: req.body.website,
        imageURL: req.body.imageURL
    });
    building_1.default.create(building)
        .then(() => {
        res.status(200).json({ success: true, msg: "Building added", data: building });
    })
        .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, msg: "Failed to add building", data: err });
    });
}
exports.AddBuilding = AddBuilding;
function UpdateBuilding(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to update a building", data: "" });
    }
    else {
        let architects = (req.body.architects) ? (0, Util_1.SanitizeArray)(req.body.architects) : (0, Util_1.SanitizeArray)("");
        let buildingToUpdate = {
            _id: id,
            name: req.body.name,
            type: req.body.type,
            dateBuilt: req.body.dateBuilt,
            city: req.body.city,
            country: req.body.country,
            description: req.body.description,
            architects: architects,
            cost: req.body.cost,
            website: req.body.website,
            imageURL: req.body.imageURL
        };
        building_1.default.updateOne({ _id: id }, buildingToUpdate)
            .then(() => {
            res.status(200).json({ success: true, msg: "Building updated", data: buildingToUpdate });
        })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "Failed to update building", data: err });
        });
    }
}
exports.UpdateBuilding = UpdateBuilding;
function DeleteBuilding(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to delete a building", data: "" });
    }
    else {
        building_1.default.deleteOne({ _id: id })
            .then(() => {
            res.status(200).json({ success: true, msg: "Building deleted", data: id });
        })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "Failed to delete building", data: err });
        });
    }
}
exports.DeleteBuilding = DeleteBuilding;
//# sourceMappingURL=building.js.map