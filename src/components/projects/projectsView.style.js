import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2em;
  color: #666;
  text-align: rtl;
  line-height: 1.5;
  margin-right: 10px;
`;

export const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  background-color: #ccc;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;

  &:before {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
    transform: translateX(${props => (props.active ? '30px' : '0')});
  }

  &:hover {
    background-color: #bbb;
  }
`;
