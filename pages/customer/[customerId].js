import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailsPage from "../../components/templates/DetailsPage";
import Loader from "../../components/modules/Loader";
import toast from "react-hot-toast";

function Index() {
  const [data, setData] = useState(null);
  const router = useRouter();
  
  const {
    query: { customerId },
    isReady,
  } = router;
  useEffect(() => {
    if(isReady){
         const getCustomer = async () => {
      try {
        const res = await axios.get(`/api/customer/${customerId}`);
        // console.log(res.data.data)
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
      getCustomer();

    }
  }, [customerId, isReady]);
  if (data) return <DetailsPage data={data}  />;
  if (!data) return <Loader />;
}

export default Index;
