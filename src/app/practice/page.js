import React from 'react'
import * as prismic from '@prismicio/client';
import { createClient } from '@prismicio/client';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script';

async function page() {

    const com = await fetchData()


    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        id: com?.id,
        title: com?.title,
        body: com?.body
    }

    return (
        <div>
            <Head>
                <Script dangerouslySetInnerHTML={{ __html: schema }} type='application/ld+json'/>
            </Head>
            <h1>Hello world</h1>
        </div>
    )
}

async function fetchData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const repo = await res.json();
        return repo
    } catch (error) {
        console.log(error)
    }
}
export default page
