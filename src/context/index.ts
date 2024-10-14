import React from "react";

export const CurrentPageContext = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>] | undefined>(undefined);