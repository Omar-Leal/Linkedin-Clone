import styled from "styled-components";

export const MainContainer = styled.div`
  grid-area: main;
`;

export const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: .8rem;
  background-color: white;
  border-radius: .5rem;
  box-shadow: 0 0 0 .1rem rgb(0 0 0 / 15%), 0 0 0 .1rem rgb(0 0 0 / 20%);
`;

export const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 .8rem;
  background: white;
  & div {
    button {
      outline: none;
      color: rgb(0, 0, 0, 0.6);
      font-size: 1.4rem;
      line-height: 1.5;
      min-height: 4.8rem;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: .8rem 1.6rem 0 1.6rem;
      svg {
        width: 4.8rem;
        border-radius: 50%;
        margin-right: .8rem;
      }
      button {
        margin: .4rem 0;
        flex-grow: 1;
        border-radius: 3.5rem;
        padding-left: 1.6rem;
        border: .1rem solid rgba(0,0,0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: .4rem;
      button {
        svg {
          margin: 0 .4rem 0 -.2rem;
        }
        span {
          color: rgba(0,0,0, 0.6);
          font-weight: 600;
          line-height: 2.8rem;
          height: 2.8rem;
        }
      }
    }
  }
`;



