import { createContext, type ReactNode, useState } from "react";

type Unit = "C" | "F";

type TempUnitContextProps = {
  unit: Unit;
  toggleTempUnit: () => void;
};

export const TempUnitContext = createContext<TempUnitContextProps | undefined>(
  undefined
);

export const TempUnitContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [unit, setUnit] = useState<Unit>("C");

  const toggleTempUnit = () => {
    setUnit((previous) => (previous === "C" ? "F" : "C"));
  };

  return (
    <TempUnitContext.Provider value={{ unit, toggleTempUnit }}>
      {children}
    </TempUnitContext.Provider>
  );
};
