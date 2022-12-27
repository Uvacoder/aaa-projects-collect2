import React from 'react';
import { useTransition } from 'react-spring';
import IToastMessage from '../../interfaces/IToastMessage';
import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = function ({ messages }) {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
