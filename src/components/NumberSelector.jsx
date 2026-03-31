import styled from "styled-components";
const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.text};
  }
  .error {
    color: red;
  }

  @media (max-width: 768px) {
    align-items: center;
    .flex {
      gap: 12px;
    }
    p {
      font-size: 18px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid ${(props) => props.theme.boxBorder};
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) =>
    props.isSelected ? props.theme.boxSelectedBg : props.theme.boxBg};
  color: ${(props) =>
    !props.isSelected ? props.theme.boxText : props.theme.boxSelectedText};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) =>
    props.isSelected ? props.theme.boxSelectedBg : props.theme.boxBorder};
  }

  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
  }
`;
