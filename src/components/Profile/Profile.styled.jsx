import styled from '@emotion/styled';

export const Prof = styled.div`
  /* Размер и расположение */
  width: 250px;
  margin: 20px auto;
  /* Фон, скругления, тень */
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* Центрируем текст */
  text-align: center;
  /* Шрифт */
  font-family: sans-serif;
  /* Чтобы нижняя граница stats прилегала */
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 30px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto 20px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #2e2e2e;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #888888;
  margin: 8px 0;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #888888;
  margin: 0;
`;

export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #f7f9fc;
  border-top: 1px solid #e4e9f0;
`;

export const StatsItem = styled.li`
  flex: 1;
  padding: 15px 0;
  border-right: 1px solid #e4e9f0;

  /* если это последний элемент, убираем правую границу */
  &:last-of-type {
    border-right: none;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  color: #888888;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #2e2e2e;
`;
