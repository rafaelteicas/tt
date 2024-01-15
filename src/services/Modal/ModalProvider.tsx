import React, {createContext, useState} from 'react';

type Modal = React.ReactNode;

interface ModalType {
  modal: Modal | null;
  setModal: (modal: Modal) => void;
  hideModal: () => void;
}

export const ModalContext = createContext<ModalType>({} as ModalType);

export default function ModalProvider({children}: React.PropsWithChildren) {
  const [visible, setVisible] = useState<Modal | null>(null);
  function setModal(modal: Modal) {
    setVisible(modal);
  }
  function hideModal() {
    setVisible(false);
  }
  return (
    <ModalContext.Provider value={{modal: visible, setModal, hideModal}}>
      {children}
    </ModalContext.Provider>
  );
}
