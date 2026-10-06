import connectDB from "../../../utils/ConnectDB";
import Customer from "../../../models/Customer";

export default async function handler(req, res) {
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
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    if (!data.name || !data.lastName || !data.email)
      return res
        .status(400)
        .json({ status: "failed", massage: "Invalid data" });

    try {
      const customer = await Customer.create(data);
      res.status(201).json({
        status: "success",
        massage: "customer created",
        data: customer,
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "failed", massage: "error in create customer" });
    }
  } 
}
