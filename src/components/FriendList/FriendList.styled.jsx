import styled from '@emotion/styled';

export const FriendListUl = styled.ul`
  margin: auto;
  width: 500px;
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  background-color: white;
  padding: 20px 10px 20px 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Status = styled.span`
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${props => {
    return props.children ? `green` : `red`;
  }};
`;

export const Avatar = styled.img`
  margin: 0 30px 0 30px;
  background-color: #f0f8ff;
  padding: 10px;
  display: block;
  border-radius: 20%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 22px;
`;
