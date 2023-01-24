import React, { createContext, Dispatch, FC, SetStateAction } from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core'

type ContextType = {
  backdropIsOpen?: boolean
  setBackdropIsOpen: Dispatch<SetStateAction<boolean>>
}

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const BackdropContext = createContext<ContextType>({ setBackdropIsOpen: () => false })

const BackdropProvider: FC<ContainerProps> = (props: ContainerProps) => {
  const [backdropIsOpen, setBackdropIsOpen] = React.useState(false)

  return (
    <BackdropContext.Provider value={{ backdropIsOpen, setBackdropIsOpen }}>
      <Backdrop
        open={backdropIsOpen}
        onClick={() => setBackdropIsOpen(false)}
        style={{ zIndex: 9999, color: '#FFF' }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {props.children}
    </BackdropContext.Provider>
  )
}

export { BackdropProvider, BackdropContext }
