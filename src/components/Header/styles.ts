import styled from 'styled-components'
import {
  AppBar,
  Typography as MuiTypography,
  Toolbar as MuiToolbar,
} from '@material-ui/core'

const Header = styled(AppBar)`
  display: block;
`

const Toolbar = styled(MuiToolbar)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1rem;
`

const Typography = styled(MuiTypography)`
  flex: 1;
`

const Styled = { Header, Toolbar, Typography }

export default Styled
