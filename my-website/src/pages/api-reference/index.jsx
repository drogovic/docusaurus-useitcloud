import React, { useState } from 'react';
import Layout from '@theme/Layout';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import config from "../../../web-config.json";
import styles from "./api-reference.module.css";

const ApiReferencePage = () => {
    const [swaggerIdx, setSwaggerIdx] = useState(0);

    return (
        <Layout>
            <div className={`container ${styles.container}`}>
                <div className={styles.breakline} />
                <div className='row'>
                    <div className='col'>
                        {swaggerIdx >= 0 ? (
                            <SwaggerUI url={config.apis[swaggerIdx]} />
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default ApiReferencePage;