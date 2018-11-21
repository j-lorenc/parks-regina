import React from 'react'
import {Head} from 'next/document'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

export const NextHead = ({description, url, title, ogImage, children}) => (
  <Head>
    <meta charSet="UTF-8" />

    <meta
      name="description"
      content={description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    
    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={title || ''} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta name="twitter:site" content={url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
        
    
    <style>{`
        html, body{
            min-height: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            width:100%;
        }

        #__next{
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .container {
            display:flex;
            flex: 1;
        }




    `}</style>
    {children}
  </Head >
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default NextHead;
