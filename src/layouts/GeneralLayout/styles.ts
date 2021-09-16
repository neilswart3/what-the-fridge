import styled from 'styled-components'

const GeneralLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  background-color: #f0f0f0;
  max-height: 100vh;
  overflow: hidden;
`

const Main = styled.main`
  max-height: 100%;
  overflow-y: scroll;
`

const MainInner = styled.div`
  padding: 0.75rem;
`

const Styled = { GeneralLayout, Main, MainInner }

export default Styled
