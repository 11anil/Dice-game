import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 20px;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
      color: ${(props) => props.theme.text};
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;

    img {
      max-width: 80%;
      height: auto;
    }

    .content {
      h1 {
        font-size: 64px;
      }
    }
  }

  @media (max-width: 480px) {
    .content {
      h1 {
        font-size: 48px;
      }
    }
  }
`;
