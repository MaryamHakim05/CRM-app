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
  if (req.method === "GET") {
    const id = req.query.customerId;

    try {
      const customer = await Customer.findById(id);
      
      res.status(200).json({
        status: "success",
        message: "successfully found",
        data: customer
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "problem happen in finding customer",
        error: error,
      });
    }
  }
}

