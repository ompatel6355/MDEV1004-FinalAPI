import express from 'express';
const router = express.Router();

import { DisplayBuildingList, DisplayBuildingById, AddBuilding, UpdateBuilding, DeleteBuilding } from '../Controllers/building';

/* List of Routes (endpoints) */

/* GET Building List. */
router.get('/', (req, res, next) => { DisplayBuildingList(req, res, next); });

/* GET Building by ID. */
router.get('/:id', (req, res, next) => { DisplayBuildingById(req, res, next); });

/* Add Building */
router.post('/add', (req, res, next) => { AddBuilding(req, res, next); });

/* Update Building */
router.put('/update/:id', (req, res, next) => { UpdateBuilding(req, res, next); });

/* Delete Building */
router.delete('/delete/:id', (req, res, next) => { DeleteBuilding(req, res, next); });

export default router;
