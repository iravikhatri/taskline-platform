import styled, { css } from 'styled-components'


export const Box = styled.div`
  height: auto;
  width: auto;

  ${props => props.height && css`
    height : ${props.height};
  `}

  ${props => props.width && css`
    width : ${props.width};
  `}

  ${props => props.padding && css`
    padding : ${props.padding};
  `}

  ${props => props.margin && css`
    margin : ${props.margin};
  `}
`

export const Flex = styled.div`
  display: flex;

  ${props => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}

  ${props => props.alignItems && css`
    align-items : ${props.alignItems};
  `}

  ${props => props.height && css`
    height : ${props.height};
  `}

  ${props => props.width && css`
    width : ${props.width};
  `}

  ${props => props.padding && css`
    padding : ${props.padding};
  `}

  ${props => props.margin && css`
    margin : ${props.margin};
  `}
`

export const Heading = styled.h1`
  font-size: 18px;

  ${props => props.textAlign && css`
    text-align : ${props.textAlign};
  `}

  ${props => props.padding && css`
    padding : ${props.padding};
  `}

  ${props => props.margin && css`
    margin : ${props.margin};
  `}
`

export const Text = styled.p`
  font-size: 14px;

  ${props => props.textAlign && css`
    text-align : ${props.textAlign};
  `}

  ${props => props.padding && css`
    padding : ${props.padding};
  `}

  ${props => props.margin && css`
    margin : ${props.margin};
  `}
`

export const Tag = styled.span`
  display: inline-block;
  padding: 3px 12px;
  border-radius: 12px;
  font-weight: 600;

  ${props => props.color && css`
    color : ${props.color};
    background-color : ${`${props.color}22`};
  `}
`