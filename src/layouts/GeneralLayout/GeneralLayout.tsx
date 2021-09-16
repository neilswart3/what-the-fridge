import React from 'react'
import { Header } from 'src/components'
import Footer from 'src/components/Footer'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const GeneralLayout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <Styled.GeneralLayout>
      <Header />
      <Styled.Main>
        <Styled.MainInner>{children}</Styled.MainInner>
      </Styled.Main>
      <Footer />
    </Styled.GeneralLayout>
  )
}

export default GeneralLayout
