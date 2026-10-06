import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditPage from "../../components/templates/EditPage";
import Loader from "../../components/modules/Loader";

function Index() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;
  useEffect(() => {
    if (isReady) {
      const getCustomer = async () => {
        try {
          const res = await axios.get(`/api/customer/${customerId}`)
          setData(res.data.data)
        } catch (error) {
          console.log(error)
        }
      };
      getCustomer();
    }
  }, [isReady , customerId]);
  if (!data) return <Loader />
  if (data) return <EditPage customer={data} id={data._id} />;
}

export default Index;
