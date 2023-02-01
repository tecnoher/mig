import React from "react";
import { useStyles } from './styles'

/* interface FooterProps {
} */

//const Footer: React.FC<FooterProps> = (props) => {
const Footer: React.FC = (props) => {
  const classes = useStyles()

  return (
      <footer className={classes.footer}>
        FOOTER
      </footer>
  )
}

export { Footer }