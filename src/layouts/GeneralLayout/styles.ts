import styled from 'styled-components'

const GeneralLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  background-color: #f0f0f0;
`

const Main = styled.main`
  padding: 0.5rem;
`

const Styled = { GeneralLayout, Main }

export default Styled
