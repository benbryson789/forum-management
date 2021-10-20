import styled from 'styled-components'

import bgImage from '../img/bg.png'

// May need to adjust height here to work well with nav bar
export const StyledTetrisWrapper = styled.div`
width: 100%;
    height: calc(100vh - 111px);
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
  min-height:660px;
`

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 0;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`