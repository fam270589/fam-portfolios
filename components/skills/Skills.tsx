import React from "react";

import classes from "./Skills.module.css";
import iconHtml from "../../public/static/html5.svg";
import iconCss from "../../public/static/css3.svg";
import iconJavascript from "../../public/static/javascript.svg";
import iconReact from "../../public/static/react.svg";
import iconTypescript from "../../public/static/typescript.svg";
import iconNextjs from "../../public/static/nextjs.svg";
import iconTailwind from "../../public/static/tailwind.svg";
import iconFigma from "../../public/static/figma.svg";
import iconFirebase from "../../public/static/firebase.svg";
import iconGithub from "../../public/static/github.svg";
import iconFlutter from "../../public/static/flutter.svg";

import Page from "../../components/layout/Page";
import AnimationPage from "../../components/layout/AnimationPage";
import SkillCard from "../../components/ui/SkillCard";
import OtherCard from "../../components/ui/OtherCard";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Skills component-----://
const Skills = (props: Props) => {
	return (
		<Page id="skills">
			<AnimationPage title="My Skills.">
				<div className={classes.container}>
					<div className={classes.cards}>
						<SkillCard
							title="HTML"
							icon={iconHtml}
							percent={83}
							color="darkorange"
						/>
						<SkillCard
							title="CSS"
							icon={iconCss}
							percent={80}
							color="deepskyblue"
						/>
						<SkillCard
							title="Javascript"
							icon={iconJavascript}
							percent={78}
							color="yellow"
						/>
						<SkillCard
							title="React"
							icon={iconReact}
							percent={77}
							color="cyan"
						/>
						<SkillCard
							title="Typescript"
							icon={iconTypescript}
							percent={70}
							color="dodgerblue"
						/>
					</div>
					<div className={classes.others}>
						<p className={classes.otherTitle}>Other skills.</p>
						<div className={classes.othercards}>
							<OtherCard title="Next.js" icon={iconNextjs} />
							<OtherCard title="Tailwind" icon={iconTailwind} />
							<OtherCard title="Github" icon={iconGithub} />
							<OtherCard title="Figma" icon={iconFigma} />
							<OtherCard title="Firebase" icon={iconFirebase} />
							<OtherCard title="Flutter" icon={iconFlutter} />
						</div>
					</div>
				</div>
			</AnimationPage>
		</Page>
	);
};

export default Skills;
