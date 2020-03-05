import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Button, { WhiteButton, ColoredButton } from './Button';

const propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'danger']),
  title: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  link: PropTypes.func.isRequired,
};

const defaultProps = {
  className: undefined,
  variant: 'primary',
  title: 'Warning',
  message: 'Are you sure you want to continue with this action?',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
};

const ConfirmModal = ({
  className,
  variant,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  link,
}) => {
  const [isWorking, setWorking] = useState(false);

  const handleConfirm = modal => {
    setWorking(true);
    onConfirm({
      close: () => {
        modal.close();
        setWorking(false);
      },
    });
  };

  return (
    <Modal
      className={className}
      link={link}
      showCloseBtn={false}
      showCloseIcon={false}
      render={modal => (
        <React.Fragment>
          {/* Heading */}
          <h3 className="text-2xl pb-6 font-medium">{title}</h3>
          {/* Message */}
          {message && <div className="pb-10 whitespace-pre-wrap">{message}</div>}
          {/* Actions */}
          <Modal.Footer showClose={false}>
            <WhiteButton onClick={modal.close}>
              {cancelText}
            </WhiteButton>
            &nbsp;&nbsp;
            {
                variant === 'danger' ?
                <ColoredButton
                    color={'red'}
                    isWorking={isWorking}
                    onClick={() => handleConfirm(modal)}
                    >
                {confirmText}
                </ColoredButton>
                :
                <Button
                    isWorking={isWorking}
                    onClick={() => handleConfirm(modal)}
                    >
                    {confirmText}
                </Button>
            }
          </Modal.Footer>
        </React.Fragment>
      )}
    />
  );
};

ConfirmModal.propTypes = propTypes;
ConfirmModal.defaultProps = defaultProps;

export default ConfirmModal;