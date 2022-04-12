import styled from '@emotion/styled';

export const Profile = styled.div`
  margin: auto;
  width: 500px;
`;

export const Description = styled.div`
  background-color: white;
  margin: auto;
  text-align: center;
  padding-bottom: 10px;
  border-top-left-radius: 2%;
  border-top-right-radius: 2%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
`;

export const P = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: gray;
`;

export const Img = styled.img`
  border-radius: 100%;
  background-color: #808000;
  width: 40%;
  padding: 10px;
  margin-top: 20px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: #dcdcdc;
  padding: 25px;
  margin: 0;
  /* border: 1px solid black; */
  border-bottom-left-radius: 2%;
  border-bottom-right-radius: 2%;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SpanLabel = styled.span`
  color: gray;
  margin-bottom: 5px;
`;

export const SpanQuantity = styled.span`
  font-weight: 800;
  font-size: 22px;
`;
