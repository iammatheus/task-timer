import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['blue-300']};
      }

      &.active {
        color: ${(props) => props.theme['blue-300']};
      }
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme['blue-300']};
    font-size: 3rem;
    line-height: 1;
  }
  > span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-100']};
    font-weight: bold;
  }
`
