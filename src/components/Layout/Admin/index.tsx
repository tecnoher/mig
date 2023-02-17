import React from "react";
import { Helmet } from "react-helmet";
import { Header, Footer } from "@components";
import { useStyles } from "./styles";
import { Box, Container } from "@mui/material";

type Props = {
  hideHeader?: boolean;
  headTitle?: string;
  headDescription?: string;
  children?: React.ReactNode | React.ReactNode[];
};

const AdminLayout: React.FC<Props> = ({
  hideHeader = false,
  headTitle,
  headDescription,
  children,
}) => {
  const classes = useStyles();
  const links: string[] = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];
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
        <Box className={classes.child}>
          <Box className={classes.mainContainer}>
            <Box className={classes.leftPanel}>
              <img src="/cards/1.png" alt="" className={classes.img} />
              <h4 className={classes.leftPanelH4}>Lorem ipsum</h4>
              <h4 className={classes.leftPanelH4}>Lorem ipsum</h4>
              {links.map((item, index) => {
                return (
                  <h4 key={index} className={classes.navLinks}>
                    {item}
                  </h4>
                );
              })}
            </Box>
            <Box className={classes.rightPanel}>{children}</Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export { AdminLayout };
