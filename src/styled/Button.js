import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.buttonText};
  padding: 10px 18px;
  background: ${(props) => props.theme.buttonBg};
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: ${(props) => props.theme.bg};
    border: 1px solid ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
    transition: 0.3s background ease-in;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    font-size: 14px;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: ${(props) => props.theme.outlineButtonBg};
  border: 1px solid ${(props) => props.theme.outlineButtonBorder};
  color: ${(props) => props.theme.outlineButtonText};
  &:hover {
    background-color: ${(props) => props.theme.buttonBg};
    border: 1px solid transparent;
    color: ${(props) => props.theme.buttonText};
  }
`;
