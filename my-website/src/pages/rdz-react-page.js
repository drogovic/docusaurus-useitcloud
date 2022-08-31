import React from 'react';
import Layout from '@theme/Layout';


export default function MyReactPage() {
  return (
    <Layout>
    	<div
    		style={{
    			display: 'flex',
    			flexDirection: 'column',
    			justifyContent: 'center',
    			alignItems: 'center',
    			fontSize: '20px',
    			padding: '2rem'
    		}}>
    		<h1> My react page</h1>
    		<p>This is react page rdz</p>
    		</div>
    </Layout>
  );
}

