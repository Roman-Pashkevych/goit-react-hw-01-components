import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 30px auto;
  width: 500px;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #00ced1;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 10px 0 10px 0;
  :not(:last-child) {
    border-right: 1px solid #f8f8ff;
  }
`;

export const Tbody = styled.tbody`
  text-align: center;
`;

export const Td = styled.td`
  color: gray;
  padding: 10px 0 10px 0;
  :not(:last-child) {
    border-right: 1px solid lightgray;
  }
`;

export const Tr = styled.tr`
  background-color: white;
  :nth-of-type(2n) {
    background-color: #f3f3f3;
  }
`;
