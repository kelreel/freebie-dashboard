import React, {
  ReactElement,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import AddPersonForm from "../AddPersonForm/AddPersonForm";
import "./Modal.scss";

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

  const close = (e: SyntheticEvent) => {
    setState(false);
    onClose();
  };

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
