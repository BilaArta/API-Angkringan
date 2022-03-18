import { Schema, Model, model, Document } from "mongoose";


// 1. Create an interface representing a document in MongoDB.
interface Product {
    name : string;
    price : number;
    ingredients : string[];
    image?: string;
    cost?: number;
    stock?: number;
}

export interface ProductIngredient extends Document {
    name : string;
    ingredients : string[];
}

export interface productMethods extends Model<Product> {
    getProfit(price: number, cost: number): number;
    getIngredients(): string[];
}

// 2. Create a Schema corresponding to the document interface.
const ProductSchema = new Schema<Product>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: { type: [String], required: true },
    image: String,
    cost: Number,
    stock : Number,
  });

ProductSchema.method('getProfit', function getProfit(price, cost) {
    return price * cost;
})

ProductSchema.method('getIngredients', function getIngredients() {
    return this.ingredients;
})

const ProductModel = model<Product>('Product', ProductSchema);
export {ProductModel}