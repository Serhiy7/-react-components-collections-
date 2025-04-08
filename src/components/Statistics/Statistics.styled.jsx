import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  width: 400px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  color: #666666;
  padding: 20px 0;
  margin: 0;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  flex: 1;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  &:nth-of-type(1) {
    background-color: #4fc4f7;
  }

  &:nth-of-type(2) {
    background-color: #a43cf3;
  }

  &:nth-of-type(3) {
    background-color: #e54c66;
  }

  &:nth-of-type(4) {
    background-color: #20b8c5;
  }
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const FriendList = styled.ul`
  padding: 0;
`;
