import CounterCard from 'components/CounterCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  max-width: 900px;
`;

const Value = styled(CounterCard)`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export default { Wrapper, Value };
