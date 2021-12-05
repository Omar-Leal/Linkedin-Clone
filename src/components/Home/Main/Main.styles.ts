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

export const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 .8rem;
  overflow: visible;
  

`;

export const SharedActor = styled.div`
   padding-right: 4rem;
   flex-wrap: nowrap;
   padding: 1.2rem 1.6rem 0;
   margin-bottom: .8rem;
   align-items: center;
   display: flex;
   position: relative;
   a {
     margin-right: 1.2rem;
     flex-grow: 1;
     overflow: hidden;
     display: flex;
     text-decoration: none;

     svg {
       width: 4.8rem;
       height: 4.8rem;
     }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: .8rem;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 1.4rem;
          font-weight: 700;
          color: rgba(0,0,0, 1)
        
        }
        &:nth-child( n + 1 ) {
          font-size: 1.2rem;
          color: rgba(0,0,0, 0.6)
        }
      }
    }
   }

   button {
     position: absolute;
     right: 1.2rem;
     top: 0;
     background: transparent;
     border: none;
     outline: none;
   }

`;

export const Description = styled.p`
 padding: 0 1.6rem;
 overflow: hidden;
 color: rgba(0,0,0, 0.9);
 font-size: 1.4rem;
 text-align: left;

`;

export const SharedImg = styled.div`
 margin-top: .8rem;
 width: 100%;
 display: block;
 position: relative;
 background-color: #f9fafb;
 img {
   object-fit: contain;
   width: 100%;
   height: 100%;
 }


`;

export const Reactions = styled.ul`
 line-height: 1.3;
 //display: flex;
 align-items: center;
 overflow: auto;
 margin: 0;
 padding: .4rem .8rem;
 border-bottom: .1rem solid #e9e5df;
 list-style: none;
 display: grid;
 grid-auto-flow: column;
 justify-content: initial;
 min-height: 4rem;
 button {
   align-items: center;
   background-color: transparent;
   border: none;
   display: inline-flex;
   font-size: 1.2rem;
   margin-right: .5rem;
   outline: none;
   padding: .8rem;
  span { 
    margin-left: .8rem;
  }
  
   

 }
`;
