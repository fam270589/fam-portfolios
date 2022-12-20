import React from "react";

import { IDarkmode } from "../models/Types";

const DarkmodeContext = React.createContext<IDarkmode | null>({
	isDarkmode: false,
	setDarkmode: () => {},
	setLightmode: () => {},
});

export default DarkmodeContext;
