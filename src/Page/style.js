import styled from "styled-components";

const Container = styled.div`
  padding: 0 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
`;

const Btn = styled.button`
  background-color: #2e856f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    background-color: #006a4e;
  }
`;

const TextInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  resize: vertical;
`;

const ContainerHash = styled.div`
  display: flex;
  width: 100%;
  padding: 50px 30px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  background-color: #cccccc;
  border-radius: 5px;
  cursor: pointer;
  /* display: none; */

  &:hover {
    background-color: #4f4f4f;
    color: white;
  }
`;

export { Container, Wrapper, Btn, TextInput, ContainerHash };
