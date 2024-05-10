import { RiVuejsLine } from 'react-icons/ri'
import { SiQuasar } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { FaRust } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'

export default function MainTechnologies() {
	return (
		<div className="pb-24">
			<h2 className="my-20 text-center text-4xl">Main Technologies</h2>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<div className="rounded-2xl border-2 border-purple-300 p-4">
					<RiVuejsLine className="text-7xl text-green-500" />
				</div>
				<div className="rounded-2xl border-2 border-purple-300 p-4">
					<SiQuasar className="text-7xl text-blue-500" />
				</div>
				<div className="rounded-2xl border-2 border-purple-300 p-4">
					<RiReactjsLine className="text-7xl text-cyan-500" />
				</div>
				<div className="rounded-2xl border-2 border-purple-300 p-4">
					<SiTypescript className="text-7xl text-blue-500" />
				</div>
				<div className="rounded-2xl border-2 border-purple-300 p-4">
					<FaRust className="text-7xl text-cyan-0" />
				</div>
        <div className="rounded-2xl border-2 border-purple-300 p-4">
					<FaNodeJs className="text-7xl text-green-500" />
				</div>
				<div className="rounded-2xl border-2 border-purple-300 p-4">
					<BiLogoPostgresql className="text-7xl text-blue-500" />
				</div>
			</div>
		</div>
	)
}
