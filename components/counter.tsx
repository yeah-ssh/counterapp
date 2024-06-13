import { TransactionButton, useReadContract } from "thirdweb/react";
import { CONTRACT } from '../util/constants';
import { prepareContractCall } from "thirdweb";

const Counter: React.FC = () =>{
    const { data: count, isLoading: loadingCount, refetch} = useReadContract({
        contract: CONTRACT,
        method: "getCount"
    });

return (
    <div style ={{
        marginTop: "30px"
    }}>
        <h1>Counter</h1>
        {loadingCount ? (
            <h2>...</h2>
        ) : (
            <h2>{count?.toString()}</h2>
        )}
        <div style={{
            display:"flex",
            justifyContent:"center",
            gap:"10px",
            marginTop: "10px"

        }}>
          <TransactionButton
          transaction={()=> prepareContractCall({
            contract:CONTRACT,
            method:"decrement"

          })}
          onTransactionSent={()=>console.log("decrementing.....")}
          onTransactionConfirmed={() => refetch()}
          >-</TransactionButton>
          <TransactionButton
           transaction={()=> prepareContractCall({
            contract:CONTRACT,
            method:"increment"
          })}
          onTransactionSent={()=>console.log("incrementing.....")}
          onTransactionConfirmed={() => refetch()}
          >+</TransactionButton>
        </div>
    </div>
)};

export default Counter;