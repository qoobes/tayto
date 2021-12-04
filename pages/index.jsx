import Head from "next/head";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Navbar } from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Taylor Che - Home</title>
				<meta name="description" content="My personal website! :P" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className="flex justify-between px-24 2xl:py-16">
				{/* text */}

				<div className="w-full h-50">
					<h1 className="bg-gradient-to-r from-blue-200 to-pink-300 bg-clip-text text-6xl text-transparent font-black select-none h-20 mt-20">
						Hi. I&apos;m Taylor!
					</h1>

					<p className="text-xl mb-4">
						I’m a product + visual designer pursuing a BFA in Design | Media
						Arts + minor in Digital Humanities. My passion for design sparked in
						middle school, when I first experimented with designing anime +
						video-game graphics for others online. This passion for graphics
						spiraled itself into curiosity - how do design decisions impact our
						everyday lives? Seeing as how design influences every aspect of our
						lives, I seek to forever dedicate my craft towards learning how
						design can be used for the greater good.
					</p>
					<div className="flex items-center">
						<h1 className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-2xl text-transparent select-none">
							Let&apos;s learn together
						</h1>
						<AiOutlineArrowRight className="text-2xl mt-2 ml-2 text-blue-400" />
						{/* make these links later */}
						<span className="ml-2" />
						<div className="mt-3 cursor-pointer">
							<a
								href="https://www.instagram.com/tayyto_/"
								target="_blank"
								rel="noreferrer">
								<Image alt="icon" width="32" height="32" src="/instagram.png" />
							</a>
						</div>
						<span className="ml-2" />
						<div className="mt-3 cursor-pointer">
							<a href="mailto:tayto@gmail.com" target="_blank" rel="noreferrer">
								<Image alt="icon" width="32" height="32" src="/mail.png" />
							</a>
						</div>
						<span className="ml-2" />
						<div className="mt-2 cursor-pointer">
							<a
								href="https://www.linkedin.com/in/taylor-che/"
								target="_blank"
								rel="noreferrer">
								<Image alt="icon" width="32" height="32" src="/linkedin.png" />
							</a>
						</div>
					</div>
				</div>
				{/* image */}
				<div className="pl-12 w-full mt-24 2xl:mt-0">
					<Image
						alt="An image of me"
						width="1000px"
						height="720px"
						src="/tayto.png"
					/>
				</div>
			</main>

			<footer></footer>
		</div>
	);
}
