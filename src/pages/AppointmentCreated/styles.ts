import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {font} from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #f4ede8;
  font-family: ${font.bold};
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #999591;
  font-family: ${font.regular};
  margin-top: 16px;
`;

export const OkButton = styled(RectButton)`
  background: #ff9000;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 12px 24px;
  margin-top: 24px;
`;

export const OkButtonText = styled.Text`
  font-size: 18px;
  color: #312e38;
  font-family: ${font.bold};
`;
