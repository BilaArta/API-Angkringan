import { Express, Request, Response } from "express";
// import * as ItemService from "./items.service";
// import { BaseItem, Item } from "./item.interface";
import { ProductModel } from "../models/product.model";


export default function (app:Express) {
    app.get("/", async (req: Request, res:Response) => {
        try {
            console.log('hello');
            
            const products =  await ProductModel.find({})
            return res.status(200).send(products)
        } catch (error) {
            console.log('hai');
            return res.status(400).send(error)
        }
    })

}
