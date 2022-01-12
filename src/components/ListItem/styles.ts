import styled from "styled-components";

type ContainerProps = {
    done:boolean
}


export const Container = styled.div(( {done}:ContainerProps ) => (
    `
    display: flex;
    background-color: #262626;
    padding: 10px;
    border-radius: 5px 40px 5px 40px;
    margin-bottom: 10px;
    align_items: center;

    input {
        width: 40px;
        height: 20px;
        margin-right: 5px;
        cursor: pointer;
    }

    label {
        color: ${done ? '#C1C' : '#CCC'}; ;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
));