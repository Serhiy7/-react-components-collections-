import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  margin: 20px auto;
  border-collapse: collapse;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: sans-serif;

  thead th {
    background-color: #00bcd4;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    padding: 10px;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px 12px;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f2f2f2;
  }

  tbody tr:hover {
    background-color: #e2e2e2;
  }
`;
