import express, { Request, Response } from "express";
// import * as ItemService from "./items.service";
// import { BaseItem, Item } from "./item.interface";
import { ProductModel } from "../models/product.model";


export const productRouter = express.Router();

productRouter.get("/", async (req: Request, res:Response) => {
    try {
        const products =  await ProductModel.find({})
        return res.status(200).send(products)
    } catch (error) {
        return res.status(400).send(error)
    }
})