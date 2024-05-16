import { useSelector } from 'react-redux'
import personImg from '../assets/personImg.jpg'

import { motion } from 'framer-motion'
import { RootState } from '../store/store'

export default function Person() {
	const store = useSelector((state: RootState) => state.languageSlice)
	return (
		<div className="pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<motion.h1
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.3 }}
							className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
						>
							{store.isRussian ? 'Даниил Матяш' : 'Daniil Matyash'}
						</motion.h1>
						<span
							className="bg-gradient-to-r from-pink-100 via-slate-400
             to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
						>
							{store.isRussian
								? 'Full-stack разработчик'
								: 'Full-stack Developer'}
						</span>
						<motion.p
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.6 }}
							className="my-2 max--w-xl py-6 text-lg"
						>
							{store.data.personalInformation}
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
