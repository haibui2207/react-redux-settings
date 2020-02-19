import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { NOTIFICATION } from '@/configs';
import { getNotification } from './redux/ducks/notification.duck';

const toastProps = {
  autoDismiss: true,
  autoDismissTimeout: NOTIFICATION.DURATION,
  placement: NOTIFICATION.POSITION,
};

const Notification = ({ children, ...rest }) => {
  const { addToast } = useToasts();
  const notification = useSelector(getNotification, shallowEqual);

  useEffect(() => {
    const { id, type: appearance, message } = notification;
    if (!id) return;

    addToast(message, { appearance });
  }, [notification]);

  return React.cloneElement(children, { ...rest });
};

export default (props) => (
  <ToastProvider {...toastProps}>
    <Notification {...props} />
  </ToastProvider>
);
