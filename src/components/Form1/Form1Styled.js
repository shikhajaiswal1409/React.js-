import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
 height: 100vh;
 margin: 100px;

.form{
    width: 60%;
    height: 100%;
  box-shadow: 0 4px 10px rgba(232, 229, 229, 0.15);
  background-color: #f9f4f4;
    border-color: #c92424;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 800;

    .input{
        font-size: 24px;
    font-weight: 800;
    padding: 10px 20px;
    display: flex;
    align-items: center;

    }

    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 800;
        padding: 10px 20px;
        border-radius: 24px;
        background-color: #ffffff;


    }
}
`;