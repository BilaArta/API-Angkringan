"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: { type: [String], required: true },
    image: String,
    cost: Number,
    stock: Number,
});
ProductSchema.method('getProfit', function getProfit(price, cost) {
    return price * cost;
});
ProductSchema.method('getIngredients', function getIngredients() {
    return this.ingredients;
});
const ProductModel = (0, mongoose_1.model)('Product', ProductSchema);
exports.ProductModel = ProductModel;
