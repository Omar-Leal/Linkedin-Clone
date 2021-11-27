import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  height: 5.3rem;
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: inherit;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1128px;

`;

export const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 28rem;
    input {
      background-color: #eef3f8;
      border-color: #dce6f1;
      border-radius: 2px;
      border: none;
      box-shadow: none;
      color: rgba(0, 0, 0, 0.9);
      font-size: 14px;
      font-weight: 400;
      height: 34px;
      line-height: 1.75;
      outline: none;
      padding: 0 .8rem 0 4rem;
      vertical-align: text-top;
      width: 21.8rem;
    }
  }
`;

export const SearchIconWrapp = styled.div`
  align-items: center;
  border-radius: 0 .2rem .2rem 0;
  display: flex;
  justify-content: center;
  left: .2rem;
  margin: 0;
  pointer-events: none;
  position: absolute;
  top: 1rem;
  width: 4rem;
  z-index: 1;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    background: white;
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
    
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  //height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

export const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;