import axios from "axios";
import React, { useEffect, useState } from "react"
import Swal from "sweetalert2";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";

axios.defaults.baseURL = "http://localhost:1198/api/v1";

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const getServerMessage = async () => {
        try {
            const config = {
                url: "/a2rp",
                method: "GET"
            };
            setIsLoading(true);
            const response = await axios(config);
            const data = response.data;
            Swal.fire(data.message);
        } catch (error) {
            // console.error(error);
            Swal.fire(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // getServerMessage();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>a2rp - hello world</h1>
            <Button
                className={styles.button}
                variant="contained"
                size="small"
                onClick={getServerMessage}
                disabled={isLoading}
            >Click here to receive message from server</Button>
        </div>
    )
}

export default App

