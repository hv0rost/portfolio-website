import aboutImg from '../assets/aboutImg.jpg'
import { ABOUT_TEXT } from '../assets/data/data'

import { motion } from 'framer-motion'

export default function About() {
	return (
		<div className="pb-4">
			<h2 className="mt-10  mb-5 text-center text-4xl">
				About
				<span className="text-purple-500"> Me</span>
			</h2>
			<div className="flex flex-wrap">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.7 }}
					className="flex items-center justify-center w-full lg:w-1/2 lg:p-8"
				>
					<img
						className="rounded-2xl"
						style={{ maxWidth: '500px !important' }}
						src={aboutImg}
						alt="about"
					/>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.7 }}
					className="w-full lg:w-1/2"
				>
					<div className="flex justify-center lg:justify-start">
						<p className="my-2 max-w-xl py-6 text-lg">{ABOUT_TEXT}</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
