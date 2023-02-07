import React from "react";
import { Helmet } from "react-helmet";
import { useStyles } from "./styles";

import { Header, Footer } from "@components";
//import { ClassNames } from "@emotion/react";

type Props = {
  hideHeader?: boolean;
  headTitle?: string;
  headDescription?: string;
  children?: React.ReactNode | React.ReactNode[];
};

/*
{!hideHeader && <Header />}
    {children}
    <Footer/>
*/

const MainLayout: React.FC<Props> = ({
  hideHeader = false,
  headTitle,
  headDescription,
  children,
}) => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>{headTitle}</title>
        <meta
          id="meta-description"
          name="description"
          content={headDescription}
        />
        <meta id="meta-title" name="title" content={headTitle} />
        <meta id="og-title" property="og:title" content={headTitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className={classes.parent}>
        <div className={classes.child}>
          <Header />
        </div>
        <div className={classes.main}>
          <div className={classes.child}>Sidebar</div>
          <div className={`${classes.child} ${classes.content}`}>Content</div>
          <div className={classes.child}>Sidebar derecha </div>
        </div>
        <div className={classes.child}>Mi footer</div>
      </div>
    </>
  );
};

export { MainLayout };
