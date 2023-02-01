import React from "react";
import { useStyles } from './styles'

/* interface HeaderProps {
} */

//const Header: React.FC<HeaderProps> = (props) => {
const Header: React.FC = (props) => {
  const classes = useStyles()

  return (
      <header className={classes.header}>
        Header
      </header>
  )
}

export { Header }