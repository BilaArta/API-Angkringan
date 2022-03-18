import { Schema, Model, model, Document } from "mongoose";

interface Transaction {
    createdAt: Date,
    status?: boolean,
    
}