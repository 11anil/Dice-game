import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 18px;
    }
    img {
      width: 150px;
    }
  }
`;
