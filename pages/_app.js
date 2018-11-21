import React, {Fragment} from 'react'
import App, { Container } from 'next/app'

import Head from '../components/Head'
import Nav from '../components/Nav'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss= false

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
        <Fragment>
            <Nav />
            <Container>
                <div className={`container`}>
                    <Component {...pageProps} />
                </div>
            </Container>
        </Fragment>
    )
  }
}