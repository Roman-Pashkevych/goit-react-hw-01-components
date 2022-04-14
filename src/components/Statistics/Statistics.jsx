import PropTypes from 'prop-types';
import {
  SectionStatistics,
  Ul,
  Li,
  SpanLabel,
  SpanPercentage,
  H2,
} from './Statistics.styled';

export default function Statistics({ stats, title }) {
  return (
    <SectionStatistics>
      {title && <H2>{title}</H2>}

      <Ul>
        {stats.map(({ id, label, percentage }) => (
          <Li key={id}>
            <SpanLabel>{label}</SpanLabel>
            <SpanPercentage>{percentage}%</SpanPercentage>
          </Li>
        ))}
      </Ul>
    </SectionStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
