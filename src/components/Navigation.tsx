import { FaTelegram, FaGithub } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'

import { motion } from 'framer-motion'
// import { useState } from 'react'

export default function Navigation() {
	// const [isRus, setIsRus] = useState(false)
	return (
		<nav className="mb-10 flex item-center justify-between py-6">
			<div className="flex flex-shrink-0  items-center">
				<span
					className="bg-gradient-to-r from-indigo-400 via-purple-300
         to-pink-200 bg-clip-text tracking-tight text-transparent lg:text-3xl hidden lg:block"
				>
					Personal portfolio
				</span>
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-3xl">
				<motion.div
					whileHover={{ scale: 1.2, rotate: 360 }}
					whileTap={{
						scale: 0.8,
						borderRadius: '100%',
					}}
					className="cursor-pointer"
				>
					<IoLanguage />
				</motion.div>
				<div className="vertical-separator py-4"></div>
				<motion.div
					whileHover={{ scale: 1.2, rotate: 360 }}
					whileTap={{
						scale: 0.8,
						borderRadius: '100%',
					}}
					className="cursor-pointer"
					onClick={() => window.open('https://t.me/hv0rost')}
				>
					<FaTelegram />
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.2, rotate: 360 }}
					whileTap={{
						scale: 0.8,
						borderRadius: '100%',
					}}
					className="cursor-pointer"
					onClick={() =>
						window.open('https://github.com/hv0rost?tab=repositories')
					}
				>
					<FaGithub />
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.2, rotate: 360 }}
					whileTap={{
						scale: 0.8,
						borderRadius: '100%',
					}}
					className="border-solid border-2 border-x-violet-50 rounded-3xl cursor-pointer"
					onClick={() =>
						window.open(
							'https://rostov.hh.ru/resume/37dd6091ff0b5a75bc0039ed1f35534b317049',
						)
					}
				>
					<div className="p-1 text-sm">hh</div>
				</motion.div>
			</div>
		</nav>
	)
}
