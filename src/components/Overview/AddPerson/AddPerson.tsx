import React, { useEffect, useState } from "react";
import "./AddPerson.scss";

type Props = {
  visible: boolean;
};

export default function AddPerson({ visible }: Props) {
  const [state, setState] = useState(visible);

  useEffect(() => {
    setState(visible)
  }, [visible])

  if (!state) {
    return null
  }

  return (
    <div className="modal__wrapper">
      <div className="modal__content">
        Content
      </div>
    </div>
  );
}
