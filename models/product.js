const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  imageURL: { type: String, required: false },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Product", productSchema);

/* CODE FOR MONGODB NATIVE DRIVER
const getDB = require("../utils/database").getDB;
const mdb = require("mongodb");

module.exports = class Product {
  constructor(title, imageURL, description, price, id, userID) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
    if (id) this._id = new mdb.ObjectID(id);
    this.userID = userID;
  }

  // function to save product
  save() {
    const db = getDB();
    if (this._id) {
      return db
        .collection("products")
        .updateOne({ _id: this._id }, { $set: this });
    }
    return db.collection("products").insertOne(this);
  }

  // fetch all products
  static fetchAll() {
    const db = getDB();
    return db
      .collection("products")
      .find() // find returns a cursor
      .toArray();
  }

  // get a product by id
  static getByID(prodID) {
    const db = getDB();
    return db
      .collection("products")
      .find({ _id: new mdb.ObjectID(prodID) })
      .next();
  }

  // delete by ID
  static deleteByID(id) {
    const db = getDB();
    return db.collection("products").deleteOne({ _id: new mdb.ObjectID(id) });

    // remove from cart
  }
};
*/
