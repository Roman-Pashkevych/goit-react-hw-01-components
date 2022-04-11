import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  margin: auto;
  width: 500px;
  text-align: center;
  background-color: white;
  padding: 10px 0 0 0;
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  color: #808080;
  margin: 10px 0 10px 0;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #000;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
  padding: 10px 30px 10px 30px;
`;

export const SpanLabel = styled.span`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const SpanPercentage = styled.span`
  font-weight: 400;
  font-size: 22px;
`;
