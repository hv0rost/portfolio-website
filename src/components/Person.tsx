import { PERSONAL_INFORMATION } from '../assets/data/data'
import personImg from '../assets/personImg.jpg'

import { motion } from 'framer-motion'

export default function Person() {
	return (
		<div className="pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<motion.h1
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.3 }}
							className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
						>
							Daniil Matyash
						</motion.h1>
						<span
							className="bg-gradient-to-r from-pink-100 via-slate-400
             to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
						>
							Full Stack Developer
						</span>
						<motion.p
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.6 }}
							className="my-2 max--w-xl py-6 text-lg"
						>
							{PERSONAL_INFORMATION}
						</motion.p>
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:p-8 ">
					<motion.img
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.6 }}
						src={personImg}
						className="rounded-2xl"
						alt="personImg"
					/>
				</div>
			</div>
		</div>
	)
}
