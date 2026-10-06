import Customer from "../../../models/Customer";
import connectDB from "../../../utils/ConnectDB";

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
  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      const result = await Customer.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
        return res.status(404).json({
          status: "failed",
          message: "Customer did not find",
        });
      }
      res.status(200).json({
        status: "success",
        message: "successfully deleted",
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "problem happen in deleting",
        error: error,
      });
    }
  }
}
