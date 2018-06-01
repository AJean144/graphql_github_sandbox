import styled from 'styled-components';

const Container = styled.div`
    border-top: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
    ${props => props.isGroupEnd && `border-bottom: 1px solid lightgrey;`}
`;

export default Container;