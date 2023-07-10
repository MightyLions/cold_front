
import styled from 'styled-components';

const StyledButton = styled.button`

  display: flex;
  align-items: flex-start;
  font-size: 13px;
  font-weight: 400;
  color: rgb(112, 112, 112);
  padding: 8px 8px 8px 10px;
  border: none;
  text-align: left;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  line-height: 1em;
  width: calc(100% - 10px);
  position: relative;
  gap: 8px;
  cursor: pointer;
  transition: all 0.1s ease-out 0s;

  &:hover {
    background-color: #f0f0f0;
  }

`;

export const TopicNaviButton = ({ value }) => {
  return <StyledButton>{value}</StyledButton>;
};


