import CounterCard from 'components/CounterCard';
import styled from 'styled-components';
import breakpoints from 'theme/breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  max-width: 900px;
  ${breakpoints.md`
		flex-direction: row;
		margin-top: 100px;
	`}
`;

const Value = styled(CounterCard)`
  margin-bottom: 20px;
  ${breakpoints.md`
			margin-bottom: initial;
  :not(:last-child) {
    margin-right: 20px;
  }
`}
`;

export default { Wrapper, Value };
