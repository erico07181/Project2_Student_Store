import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from { axios }

import "./PurchaseDetail.css"
import { Receipt } from "../Receipt";

export default function PurchaseDetail({ URL }){
    const [currPurchase, setCurrPurchase] = useState()
    const { purchaseID } = useParams()


    useEffect(async() => {
        try {
            const res = await axios.get(`${URL}/purchases/${purchaseID}`)
            setCurrPurchase(res.data.purchase)
        }
        catch(err){
            console.log("API call err")
        }
    }, [purchaseID])


    return (
        <div className="purchase-detail">
            {currentPurchase &&  <Receipt receipt={currPurchase.receipt} title={`Order #${currPurchase.id}`}/>}
        </div>
    )
}