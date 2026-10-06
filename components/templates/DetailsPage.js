import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

function DetailsPage({ data }) {
    const router = useRouter();
    const deleteHandler = async () => {
        const res = await axios.delete(`/api/delete/${data._id}`)
        if(res.data.status === "success") router.push("/")
    }
  return (
    <div className="customer-details">
      <h3>Customer&apos;s Details</h3>
      <div className="customer-details__content">
        <div>
          <span>Name: </span>
          <p>{data.name}</p>
        </div>
        <div>
          <span>Last Name: </span>
          <p>{data.lastName}</p>
        </div>
        <div>
          <span>Email: </span>
          <p>{data.email}</p>
        </div>
        <div>
          <span>Phone: </span>
          <p>{data.Phone}</p>
        </div>
        <div>
          <span>Address: </span>
          <p>{data.address}</p>
        </div>
        <div>
          <span>Date: </span>
          <p>{data.date ? moment(data.date).utc().format("YYYY-MM-DD") : ""}</p>
        </div>
        <div>
          <span>Postal code: </span>
          <p>{data.postalCode}</p>
        </div>
      </div>
        <h3>Products</h3>

      <div className="customer-details__products">
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        {
            data.products.map(product => <>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.qty}</p>
            </>)
        }
      </div>
      <div className="customer-details-buttons">
        <p >Edit or Delete?</p>
        {/* <div> */}
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${data._id}`}>Edit</Link>
        {/* </div> */}
      </div>
    </div>
  );
}

export default DetailsPage;
