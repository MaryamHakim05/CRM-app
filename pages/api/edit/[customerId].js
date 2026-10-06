import Customer from "../../../models/Customer";
import connectDB from "../../../utils/ConnectDB";

export default async function handler(req , res) {
    try {
    await connectDB();
    console.log("connected DB");
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "failed", massage: "can not connect to DB" });
    return;
  }
  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body;
    try {
      const customer = await Customer.findById(id);
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();
      
      res.status(200).json({
        status: "success",
        message: "successfully updated",
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "problem happen in updating",
        error: error,
      });
    }
  }
}

