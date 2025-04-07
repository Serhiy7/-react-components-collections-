import styled from '@emotion/styled';

export const FItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-family: sans-serif; /* если нужно */
`;

export const Status = styled.span`
  font-size: 24px; /* Emoji статус может быть крупнее */
  //   margin-right: 10px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;
