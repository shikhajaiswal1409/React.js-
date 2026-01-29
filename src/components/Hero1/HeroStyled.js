import styled from "styled-components";
import header from "../../assets/header.png";

export const Div = styled.div`
display: flex;
justify-content: space-evenly;
${'' /* height: 100vh; */}
width: 100vw;
align-items: center;
margin-top: 50px;
overflow: hidden;
background-image: url(${header});



.trusted{
    display: flex;
}

.trusted img{
    margin-right: 20px
}

.couples{
    font-weight: 600;
    font-size: 20px
}

.track{
    font-weight: 700;
    font-size: 58px;
    margin-top: 20px
}

.accurate{
    font-weight: 500;
    font-size: 24px;
    margin-top: 20px
}

.accurate span{
    font-weight: 700;
    font-size: 24px;
}

.btn1{
    background-color: #1F94AA;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    border-radius: 26px;
    border-color: #ffffff;
    padding: 11px 30px;
    margin-top: 20px

}

.conatiner2{
    position: relative;
}

.img2{
    position: absolute;
    top: 29%;
    left: 78%;
}
.img3{
    position: absolute;
    top: 17%;
    right: 37%;
}
`;