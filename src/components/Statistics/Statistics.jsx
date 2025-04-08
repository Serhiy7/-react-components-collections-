import {
  StatisticsWrapper,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatisticsWrapper className="statistics">
      <Title className="title">{title}</Title>

      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatItem className="item" key={id}>
            <Label className="label">{label}</Label>
            <Percentage className="percentage">{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
}

export default Statistics;
