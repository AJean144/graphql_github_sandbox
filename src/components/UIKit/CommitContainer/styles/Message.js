import styled from 'styled-components';
import { truncate } from '../../../../utils/styleUtils';

const Message = styled.div`
    padding: 10px;
    ${truncate('50%')}
`;

export default Message;