import React from 'react';
import {render} from 'react-native-testing-library';
import SignIn from '../../pages/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
    Link: ({children}: {children: React.ReactNode}) => children,
  };
});

describe('SignIn Page', () => {
  it('should contains email/password inputs', async () => {
    const {getByPlaceholder} = render(<SignIn />);

    expect(getByPlaceholder('E-mail')).toBeTruthy();
    expect(getByPlaceholder('Senha')).toBeTruthy();
  });
});
