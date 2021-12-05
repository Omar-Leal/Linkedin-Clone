import styled from "styled-components"

export const Container = styled.div`
  

`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: auto;
  max-width: 112.8rem;
  padding: 1.2rem 0 1.6rem;
  position: relative;
  & > a {
    width: 13.5rem;
    @media ( max-width: 768px ) {
      padding: 0 .5rem;
    }
  }

 
`;

export const Join = styled.div`
  border-radius: .4rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  margin-right: 1.2rem;
  padding: 1rem 1.2rem;
  text-decoration: none;
 
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

export const SignIn = styled.a`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 2.4rem;
  border: 1px solid black;
  color: #0a66c2;
  font-size: 1.6rem;
  font-weight: 600;
  height: 4rem;
  line-height: 4rem;
  padding: 1rem 2.4rem;
  text-align: center;
  transition-duration: 167ms;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

export const Section = styled.section`
  align-content: start;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 112.8rem;
  min-height: 70rem;
  padding-bottom: 13.8rem;
  padding-top: 4rem;
  padding: 6rem 0;
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

export const Hero = styled.div`
  width: 100%;
  h1 {
    color: #2977c9;
    font-size: 5.6rem;
    font-weight: 600;
    line-height: 7rem;
    padding-bottom: 0;
    width: 55%;
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 2;
      text-align: center;
      width: 100%;
    }
  }
  img {
    width: 70rem;
    height: 67rem;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 23rem;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

export const Form = styled.div`
  margin-top: 10rem;
  width: 40.8rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const Google = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 2.8rem;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  font-size: 2rem;
  height: 5.6rem;
  justify-content: center;
  transition-duration: 167ms;
  vertical-align: middle;
  width: 100%;
  z-index: 0;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;