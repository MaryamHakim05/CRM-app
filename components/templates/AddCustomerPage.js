import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import Form from "../modules/Form";

function AddCustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const router = useRouter();

  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };

  const saveHandler = async () => {
    try {
      const res = await axios.post("/api/customer", form);
      // console.log(res);
      if (res.data.status === "success") router.push("/");
    } catch (error) {
      // console.log(error.response.data.massage)
      if (error.response?.data?.massage === "Invalid data") {
        toast.error("Invalid data");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="customer-page">
      <h3>Add New Customer</h3>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button onClick={cancelHandler} className="first">cancel</button>
        <button onClick={saveHandler} className="second">save</button>
      </div>
    </div>
  );
}

export default AddCustomerPage;
