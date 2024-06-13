'use client';

import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client, chain } from "../util/constants";
import styles from './Login.module.css';
import Counter from "./counter";

const Login: React.FC = () => {
    const account = useActiveAccount();
    return (
        <div className={styles.container}>
            <div className={styles.connectButtonWrapper}>
              {account ? (
                <div style ={{ textAlign: "center"}}>
               <ConnectButton client={client} chain={chain} />
            <Counter />
               </div>
              ) : (
                <div style = {{ textAlign: "center" }}>
                <ConnectButton client={client} chain={chain} />
                </div>
              ) }
              

            </div>
        </div>
    );
};

export default Login;