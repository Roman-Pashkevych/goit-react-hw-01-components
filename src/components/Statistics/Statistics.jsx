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
    <SectionStatistics class="statistics">
      {title && <H2 class="title">{title}</H2>}

      <Ul>
        {stats.map(({ id, label, percentage }) => (
          <Li class="item" key={id}>
            <SpanLabel class="label">{label}</SpanLabel>
            <SpanPercentage class="percentage">{percentage}%</SpanPercentage>
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
