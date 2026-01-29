import styled from "styled-components";

export const Wrapper= styled.div`
display: flex;
justify-content: center;
align-items: center;
 border-radius: 8px;
  

  .card{
    width: 50%;
    height: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
    border-color: #c92424;
    border-radius: 20px;
    margin-bottom: 20px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container2{
   
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 20px;

  }

  .box{
margin: 20px;
padding-bottom: 20px;
  }

  .btn{
    border-radius: 20px;
    padding: 15px 20px;
    font-size: 18px;
    font-weight: 700;
    background-color: rgb(237, 150, 150)
  }
  `;