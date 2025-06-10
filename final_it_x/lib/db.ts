import mongoose, {Mongoose} from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI IS NOT DEFINED");
}

declare global {
    // eslint-disable-next-line no-var
    var mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null } | undefined;
  }

let cached = global.mongoose;

if (!cached){
    cached = global.mongoose = { conn : null, promise: null}
}
