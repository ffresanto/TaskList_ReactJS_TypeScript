import styled from "styled-components";

export const Container = styled.div`

    border: 1px solid #555;
    border-radius: 5px 40px 5px 40px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    &:hover {
    border: 1px solid #C1C;
  }

    .image {
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
    }

    input{
        border: 0px;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }

`;