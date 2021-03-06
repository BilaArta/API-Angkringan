/** 
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import {json} from "body-parser";
import { itemsRouter } from "./items/items.router";
import connectDB from "./connectDB";
  
 dotenv.config();

/**
 * App Variables
 */

 if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

/**
 *  App Configuration
 */

 app.use(helmet());
 app.use(cors());
 app.use(json);
 app.use("/api/menu/items", itemsRouter);
 
 /**
  * Server Activation
  */
 
 app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
   });
   
const dbURI = process.env.dbURI || 'mongodb://localhost:27017/test'; 

connectDB({dbURI});


