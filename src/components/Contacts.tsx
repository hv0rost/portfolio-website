import { CONTACT } from '../assets/data/data'

import { motion } from 'framer-motion'

export default function Contacts() {
	return (
		<div className="pb-20">
			<h2 className="mt-10 mb-5 text-center text-4xl">Contacts</h2>
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 100 }}
				transition={{ duration: 0.5 }}
				className="text-center tracking-tighter"
			>
				<p className="my-4 text-xl"> {CONTACT.address}</p>
				<p className="my-4 text-xl"> {CONTACT.phoneNo}</p>
				<p className="my-4 text-xl"> {CONTACT.email}</p>
			</motion.div>
		</div>
	)
}
