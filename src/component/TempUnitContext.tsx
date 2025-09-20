import { createContext, type ReactNode, useState } from "react";

type Unit = "C" | "F";

interface TempUnitContextProps {
  unit: Unit;
  toggleTempUnit: () => void;
}

export const TempUnitContext = createContext<TempUnitContextProps | undefined>(
  undefined
);

export const TempUnitContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [tempUnit, setTempUnit] = useState("C");

  const toggleTempUnit = () => {
    setTempUnit((previous) => (previous === "C" ? "F" : "C"));
  };

  return (
    <TempUnitContext.Provider value={{ tempUnit, toggleTempUnit }}>
      {children}
    </TempUnitContext.Provider>
  );
};
