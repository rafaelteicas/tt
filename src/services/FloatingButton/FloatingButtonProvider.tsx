import React, {createContext, useState} from 'react';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

type FloatingButton = {
  icon: string;
};

type FloatingButtonType = {
  floatingButton: FloatingButton | null;
  showFloatingButton: (floatingButton: FloatingButton) => void;
  hideFloatingButton: () => void;
};

export const FloatingButtonContext = createContext<FloatingButtonType>(
  {} as FloatingButtonType,
);

export function FloatingButtonProvider({children}: React.PropsWithChildren) {
  const [floatingButton, setFloatingButton] = useState<FloatingButton | null>(
    null,
  );

  function showFloatingButton(_floatingButton: FloatingButton) {
    setFloatingButton(_floatingButton);
  }

  function hideFloatingButton() {
    setFloatingButton(null);
  }

  return (
    <FloatingButtonContext.Provider
      value={{
        floatingButton,
        showFloatingButton,
        hideFloatingButton,
      }}>
      {children}
    </FloatingButtonContext.Provider>
  );
}
