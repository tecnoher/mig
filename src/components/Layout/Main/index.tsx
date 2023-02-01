import React from "react"
import { Helmet } from 'react-helmet'
import { Header, Footer } from "@components"

type Props = {
  hideHeader?: boolean
  headTitle?: string
  headDescription?: string
  children?:
    | React.ReactNode
    | React.ReactNode[];
};

const MainLayout: React.FC<Props> = ({ hideHeader = false, headTitle, headDescription, children }) => (
  <>
    <Helmet>
      <title>{headTitle}</title>
      <meta id="meta-description" name="description" content={headDescription} />
      <meta id="meta-title" name="title" content={headTitle} />
      <meta id="og-title" property="og:title" content={headTitle} />
    </Helmet>
    {!hideHeader && <Header />}
    {children}
    <Footer/>
  </>
);

export { MainLayout };
