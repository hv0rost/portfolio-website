import { PERSONAL_INFORMATION } from '../assets/data/data'
import profilePic from '../assets/kevinRushProfile.png'

export default function Person() {
	return (
		<div className="pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
							Daniil Matyash
						</h1>
						<span
							className="bg-gradient-to-r from-pink-100 via-slate-400
             to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
						>
							Full Stack Developer
						</span>
						<p className="my-2 max--w-xl py-6 font-light tracking-tighter">
							{PERSONAL_INFORMATION}
						</p>
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:p-8">
					<img src={profilePic} alt="personImg" />
				</div>
			</div>
		</div>
	)
}
