import Link from "next/link";

export const Navbar = () => {
	return (
		<div
			className={`flex justify-between items-center sticky top-0 h-20 p-8 w-full backdrop-filter backdrop-blur-md bg-white bg-opacity-50 z-50`}>
			{/* nav logo */}
			<h1
				id="logo"
				className="bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-5xl text-transparent font-black select-none">
				t.
			</h1>

			{/* nav items */}
			<div className="flex items-center justify-between px-5 ">
				<Navlink href="/">Home</Navlink>
				<Navlink href="/work">Work</Navlink>
				<Navlink href="/play">Play</Navlink>
			</div>
		</div>
	);
};

const Navlink = ({ href, children, ...rest }) => (
	<Link href={href}>
		<a
			className="mx-3 font-bold text-blue-400 tracking-wide hover:underline"
			{...rest}>
			{children}
		</a>
	</Link>
);
