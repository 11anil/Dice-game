import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  color: ${(props) => props.theme.text};
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 80px;
      line-height: 80px;
    }
    p {
      font-size: 20px;
    }
  }
`;
