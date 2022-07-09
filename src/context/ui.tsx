import { createContext, useState } from "react";

const UiContext = createContext<any>(null);

const UiProvider = ({ children }: any) => {
  const [userValidated, setUserValidated] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <UiContext.Provider
      value={{ userValidated, setUserValidated, showMenu, setShowMenu }}
    >
      {children}
    </UiContext.Provider>
  );
};

export { UiProvider };
export default UiContext;
