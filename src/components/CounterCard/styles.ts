import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
const Inner = styled.div`
  display: inline-flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${palette.blue};
`;

const Value = styled.span`
  font-size: 7rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  color: ${palette.softRed};
`;

const Label = styled.span`
  margin-top: 20px;
  text-transform: uppercase;
  color: ${palette.common.white};
`;

export default { Wrapper, Inner, Value, Label };
