import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  max-width: 500px;
  margin: auto;
background-color: #f0f0f0;
border: 2px solid #cadfdfff;
border-radius: 16px;



  .container1,
  .container2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 12px;
    padding: 16px 20px;
    color: #2da3daff;
  }

  .container1 {
    cursor: pointer;
  }

  .container2 {
    margin-top: -10px;
  }

  h1 {
    font-size: 18px;
    margin: 0;
  }

  .img {
    width: 24px;
    height: 24px;
  }

  .img img {
    width: 100%;
    height: 100%;
  }
`;
