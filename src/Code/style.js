import styled from "styled-components";

export const LogOutButton = styled.div `
    width: fit-content;
    display: flex;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    color: red;
    position: absolute;
    left: 10px;
    top: -60px;
    .footer-icon{
        margin-right: 10px;
    }
    &:hover{
        color: #45A5FF;
        background-color: #EDF6FF;
        transition-duration: 1s;
    }
`;

export const CodeWrapper=styled.div`
    width: fit-content;
    display: flex;
    margin: auto;
    background-color: white;
    padding: 50px;
    border-radius: 30px;
    h2{
        text-align: center;
        color: black;
    }
    input{
        width: 300px;
        height: 40px;
        padding-left: 15px;
        margin: 7px 0;
        border-radius: 15px;
        background-color: #E6E6E6;
        border: none;
        outline: none;
    }
    .input{
        width: fit-content;
        padding: 0 20px;
        font-weight: bold;
        background-color: blue;
        color: white;
        margin-left: 80px;
        cursor: pointer;
    }
`;