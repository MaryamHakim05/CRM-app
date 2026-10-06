import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function Card({ customer }) {
    const router = useRouter();
  const deleteHandler = async () => {
    try {
      await axios.delete(`/api/delete/${customer._id}`);
      router.reload();
      toast.success("successfully deleted")
    } catch (error) {
        // console.log(error.response.data)
      toast.error("An error happen");
    }
  };
  return (
    <div className="customer-card">
      <div className="customer-card__details">
        <p>
          {customer.name} {customer.lastName}
        </p>
        <p>{customer.email}</p>
      </div>
      <div className="customer-card__buttons">
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${customer._id}`}>Edit</Link>
        <Link href={`/customer/${customer._id}`}>Details</Link>
      </div>
    </div>
  );
}

export default Card;
