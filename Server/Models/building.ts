import { Schema, model } from 'mongoose';

// Building Interface - defines the structure of a building document
interface IBuilding {
    name: string;
    type: string;
    dateBuilt: string;
    city: string;
    country: string;
    description: string;
    architects: string[];
    cost: string;
    website: string;
    imageURL: string;
}

const buildingSchema = new Schema<IBuilding>({
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

const Building = model<IBuilding>('Building', buildingSchema);

export default Building;
