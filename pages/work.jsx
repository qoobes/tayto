import Head from "next/head";
import { Navbar } from "../components/Navbar";

export default function Work() {
	return (
		<div>
			<Head>
				<title>Taylor Che - Work</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className="xl:px-28 2xl:px-48 ">
				{/* text */}

				<div className="w-full h-50">
					<h1 className="bg-gradient-to-r from-blue-200 to-pink-300 bg-clip-text text-6xl text-transparent font-black select-none h-20 mt-20">
						What am I up to?
					</h1>

					<div>
						<WorkItem
							title="WebDev Leader"
							place="The Omniscient Tutor"
							time="March 2021 - Present"
							description="At The Omniscient Tutor (iTOT), we tutor children in need of finanical aid. As WebDev leader at iTOT, I direct meetings with the development team to discuss and implement new features for our students’ learning experiences."
						/>

						<WorkItem
							title="Product Design Lead"
							place="Community Solutions"
							time="August 2021 - Present"
							description="At Community Solutions, a 5-man group founded on the East Coast, we deign and develop apps to help improve the local community. As of now, I’ve worked on FastFood, an app for users to provide leftover food for the needy. I’m currently designing an app for the Nashua South Kitchen and Shelter."
						/>

						<WorkItem
							title="Campus Ambassador  &#x200B;  &#x200B;  &#x200B;  &#x200B;  &#x200B;"
							place="Discord Inc."
							time="October 2021 - Present"
							description="As Discord Campus Ambassador, I’ve leveraged social media platforms and on-campus events to inform 500+ students about Discord’s communication services for campus clubs and organizations."
						/>
					</div>
				</div>
			</main>

			<footer></footer>
		</div>
	);
}

const WorkItem = ({ title, place, time, description }) => (
	<div className="flex items-center mt-6 mb-16">
		<h1 className="text-blue-400 text-2xl font-normal min-w-max">
			{title} <br /> @ {place}
			<br />
			<span className="text-black text-lg font-normal">{time}</span>
		</h1>
		<p className="text-xl ml-48">{description}</p>
	</div>
);