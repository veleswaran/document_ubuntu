import { ObjectId } from "mongodb";
import collection from "../models/usermodel.js";

export async function showUsers(){
    let coll = await collection();
    let data = await coll.find().toArray();
    return data;
}

export async function adduser(user) {
    let coll = await collection();
    await coll.insertOne(user);
}

export async function deleteUser(id){
    let userid = new ObjectId(id);
    let coll= await collection();
    await coll.deleteOne({_id:userid});
}