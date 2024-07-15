/* eslint-disable react/prop-types */
import classNames from 'classnames';

function Button({ onClick, children, className }) {
  return (
    <button
      onClick={() => onClick?.()}
      className={classNames(className, 'uppercase m-0 p-4 text-xl rounded-2xl')}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({ onClick, children, className }) {
  return (
    <Button
      className={classNames(
        className,
        'primary',
        'bg-brandGreen hover:bg-brandDarkGreen hover:text-white',
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function SecondaryButton({ onClick, children, className }) {
  return (
    <Button
      className={classNames(
        className,
        'secondary',
        'bg-brandLightGreen hover:bg-brandDarkGreen hover:text-white',
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
