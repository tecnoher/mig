import React, { FC, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const ScrollToTop: FC<RouteComponentProps> = ({ history, location }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => {
      unlisten()
    }
  }, [history])

  return <>{location}</>
}

const ScrollToTopWithRouter = withRouter(ScrollToTop)

export { ScrollToTopWithRouter as ScrollToTop }
