import { FaTelegram, FaGithub } from 'react-icons/fa'

export default function Navigation() {
	return (
		<nav className="mb-20 flex item-center justify-between py-6">
			<div className="flex flex-shrink-0  items-center">
				<span
					className="bg-gradient-to-r from-indigo-400 via-purple-300
         to-pink-200 bg-clip-text text-3xl tracking-tight text-transparent"
				>
					Personal portfolio
				</span>
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<FaTelegram />
				<FaGithub />
			</div>
		</nav>
	)
}
