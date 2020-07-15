import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {font} from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: ${font.bold};
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  align-self: center;
`;

export const ContainerIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${Platform.OS === 'ios' ? 40 : 2}px;
`;

export const SignOutButton = styled.TouchableOpacity``;
