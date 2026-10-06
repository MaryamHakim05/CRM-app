import { useState } from "react"
import Form from "../modules/Form"
import moment from "moment"
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";

function EditPage({customer , id}) {
  const date = customer.date ? moment(customer.date).utc().format("YYYY-MM-DD") : "";
  const router = useRouter();
  const [form , setForm] = useState({
     name: customer.name,
    lastName: customer.lastName,
    email: customer.email,
    phone: customer.phone || "",
    address: customer.address || "",
    postalCode: customer.postalCode || "",
    date: date,
    products: customer.products || [] 
  })
    // console.log(customer)

    const cancelHandler = () => {
      router.push("/");
    }
    const saveHandler = async () => {
      const res = await axios.patch(`/api/edit/${id}` , form);
      if(res?.data.status === "success") router.push("/");
      else return toast.error("An error happen")
    }

  return (
    <div className="customer-page">
      <h3>Edit Customer</h3>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button onClick={cancelHandler} className="first">cancel</button>
        <button onClick={saveHandler} className="second">save</button>
      </div>
      
    </div>
  )
}

export default EditPage
