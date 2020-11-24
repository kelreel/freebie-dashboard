import "./Modal.scss";

import React, { ReactElement, useCallback, useEffect, useState } from "react";

type Props = {
  visible: boolean;
  onClose: Function;
  children: ReactElement;
};

export default function Modal({ visible, onClose, children }: Props) {
  const [state, setState] = useState(visible);

  useEffect(() => {
    setState(visible);
  }, [visible, onClose]);

  const close = useCallback(() => {
    setState(false);
    onClose();
  }, [onClose]);

  const escFunction = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  if (!state) {
    return null;
  }

  return (
    <div className="modal__wrapper">
      <div className="modal__content">
        <div className="close" onClick={close}>
          X
        </div>
        {children}
      </div>
    </div>
  );
}
