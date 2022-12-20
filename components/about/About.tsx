import Image from "next/image";

import classes from "./About.module.css";
import Page from "../../components/layout/Page";
import AnimationPage from "../../components/layout/AnimationPage";
import WorkCard from "../../components/ui/WorkCard";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----About component-----://
const About = (props: Props) => {
	return (
		<Page id="about">
			<AnimationPage title="About Me.">
				<div className={classes.container}>
					<div className={classes.allContent}>
						<Image src={'/static/profile.jpg'} alt="profile" className={classes.profile} width={720} height={1280} />
						<div className={classes.content}>
							<p className={classes.description}>
								I am a creative and enthusiastic Front-end Developer with two
								years experience in the software development industry. I have
								experience in developing web apps, mobile apps, software
								testing, and documentation.
							</p>
							<div>
								<h3 className={classes.experience}>Work experience.</h3>
								<div className={classes.jobs}>
									<WorkCard
										subtitle="2014 - 2017"
										place="- Jubilee Yk"
										title="IT Book Writer"
									>
										Write tutorial books about various programming languages
										such as C++, Javascript, MySQL, etc.
									</WorkCard>
									<WorkCard
										subtitle="2017 - 2020"
										place="- Gameloft Yk"
										title="Game Tester"
									>
										Testing games on various platform such as Android, iOS, and
										Windows. Perform various testing method such as Gameplay
										Test, Compatibility Test, Ads Test, etc.
									</WorkCard>
									<WorkCard
										title="Front-end Developer"
										place="- Freelance"
										subtitle="2020 - present"
									>
										Develop web apps with React and Next.js. Develop mobile apps
										with Flutter.
									</WorkCard>
								</div>
							</div>
						</div>
					</div>
				</div>
			</AnimationPage>
		</Page>
	);
};

export default About;
