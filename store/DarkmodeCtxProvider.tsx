import { useState } from "react";

import { IDarkmode } from "../models/Types";
import DarkmodeContext from "./darkmode-ctx";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----DarkmodeCtxProvider component-----://
const DarkmodeCtxProvider = (props: Props) => {
	const [isDark, setIsDark] = useState(true);

	const setDarkmode = () => {
		setIsDark(true);
	};

	const setLightmode = () => {
		setIsDark(false);
	};

	const contextValue: IDarkmode = {
		isDarkmode: isDark,
		setDarkmode,
		setLightmode,
	};

	return (
		<DarkmodeContext.Provider value={contextValue}>
			{props.children}
		</DarkmodeContext.Provider>
	);
};

export default DarkmodeCtxProvider;
