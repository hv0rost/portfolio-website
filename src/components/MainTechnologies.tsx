import { RiVuejsLine } from 'react-icons/ri'
import { SiQuasar } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { FaRust } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { Variants, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

function iconAnimation(duration: number): Variants {
	return {
		initial: { y: -10 },
		animate: {
			y: [10, -10],
			transition: {
				duration: duration,
				ease: 'linear',
				repeat: Infinity,
				repeatType: 'reverse',
			},
		},
	}
}

export default function MainTechnologies() {
	const store = useSelector((state: RootState) => state.languageSlice)

	return (
		<div className="pb-24">
			<h2 className="my-20 text-center text-4xl"> 
			{store.isRussian ? 'Мои основные технологии' : 'Main Technologies'}
			
			</h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 0.7 }}
				className="flex flex-wrap items-center justify-center gap-4"
			>
				<motion.div
					variants={iconAnimation(1.2)}
					initial="initial"
					animate="animate"
				>
					<RiVuejsLine className="text-7xl text-green-500" />
				</motion.div>
				<motion.div
					variants={iconAnimation(1)}
					initial="initial"
					animate="animate"
				>
					<SiQuasar className="text-7xl text-blue-500" />
				</motion.div>
				<motion.div
					variants={iconAnimation(1.2)}
					initial="initial"
					animate="animate"
				>
					<RiReactjsLine className="text-7xl text-cyan-500" />
				</motion.div>
				<motion.div
					variants={iconAnimation(1)}
					initial="initial"
					animate="animate"
				>
					<BiLogoTypescript className="text-7xl text-blue-500" />
				</motion.div>
				<motion.div
					variants={iconAnimation(1.2)}
					initial="initial"
					animate="animate"
				>
					<FaRust className="text-7xl text-cyan-0" />
				</motion.div>
				<motion.div
					variants={iconAnimation(1)}
					initial="initial"
					animate="animate"
				>
					<FaNodeJs className="text-7xl text-green-500" />
				</motion.div>
				<motion.div
					variants={iconAnimation(1.2)}
					initial="initial"
					animate="animate"
				>
					<BiLogoPostgresql className="text-7xl text-blue-500" />
				</motion.div>
			</motion.div>
		</div>
	)
}
