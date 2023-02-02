import React from "react";
import { Helmet } from "react-helmet";
import { Header, Footer } from "@components";
import { useStyles } from "./styles";
import Box from "@material-ui/core/Box/Box";

type Props = {
  hideHeader?: boolean;
  headTitle?: string;
  headDescription?: string;
  children?: React.ReactNode | React.ReactNode[];
};

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
      </Helmet>
      <Box className={classes.parent}>
        {!hideHeader && <Header />}
        {children}
        <Footer />
      </Box>
    </>
  );
};

export { MainLayout };
