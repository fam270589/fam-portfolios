import { StaticImageData } from "next/image";

export interface IDarkmode {
	isDarkmode: boolean;
	setDarkmode: () => void;
	setLightmode: () => void;
}

export type SlideObj = {
	title: string;
	image: StaticImageData;
	demoLink?: string;
	gitRepo?: string;
};
