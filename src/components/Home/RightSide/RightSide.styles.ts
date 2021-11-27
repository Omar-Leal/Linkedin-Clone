import styled from "styled-components";

export const RightContainer = styled.div`
  grid-area: rightside;
`;

export const FollowCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  margin-bottom: 8px;
  overflow: hidden;
  padding: 12px;
  position: relative;
  text-align: center;
`;

export const Title = styled.div`
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  display: inline-flex;
  font-size: 16px;
  justify-content: space-between;
  width: 100%;
`;

export const FeedList = styled.ul`
  margin-top: 16px;
  li {
    align-items: center;
    display: flex;
    font-size: 14px;
    margin: 12px 0;
    position: relative;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

export const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 48px;
  margin-right: 8px;
  width: 48px;
`;

export const Recommendation = styled.a`
  align-items: center;
  color: #0a66c2;
  display: flex;
  font-size: 14px;
`;

export const BannerCard = styled(FollowCard)`
  img {
    height: 100%;
    width: 100%;
  }
`;