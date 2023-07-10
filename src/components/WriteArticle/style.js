import styled from "styled-components";
import { globalContainer } from "../../root/global";

export const OuterContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
  padding-bottom: 200px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;

export const Editor = styled.div`
  .codex-editor__redactor {
    padding-bottom: 50px !important;
  }
  .ce-block__content,
  .ce-toolbar__content {
    max-width: 1000px; /* example value, adjust for your own use case */
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: #00ba34;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.08),
    0px 2px 1px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const Input = styled.input`
  margin-block: 20px 30px;
  width: 100%;
  max-width: 1000px;
  border: none;
  border-bottom: 1px solid var(--gray);
  padding: 8px 0;
  outline: none;
  font-size: 16px;
  line-height: 1.2px;
  color: var(--dark-color);
`;
