import styled, { keyframes } from 'styled-components'

export const Outer = styled.div`
  text-align: center;
`;

export const Header = styled.div`
  background-color: papayawhip;
  display: block;
  height: 150px;
  color: white;
  padding-left: 16px;
 
  
  > h2 {
    color: palevioletred;
  }
  `;

export const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

export const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
  `;