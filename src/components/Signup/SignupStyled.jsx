import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

.box{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
padding: 40px;
margin: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.container1, .container2{
    display: flex;
    justify-content: center;
    align-items: center;


}

.input{
    border: 1px solid black;
    margin-left: 20px;
    padding: 11px 30px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 20px;

}
.label{
    font-size: 20px;
    margin-left: -10%;
}
.btn{
    padding: 11px 30px;
    border: 1px solid black;
    border-radius: 20px;
    font-weight: 700;
    font-size: 15px;

}





`;