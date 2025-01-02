import client from "../config.js";

export default function collection(){
    let db= client.db('product');
    let collections= db.collection('users');
    return collections;
}