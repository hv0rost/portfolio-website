import { EXPERIENCES } from '../assets/data/data'

export default function Experience() {
	return (
		<div className="pb-4">
			<h2 className="mt-10 mb-5 text-center text-4xl">Experience</h2>
			<div>
				{EXPERIENCES.map((item, index) => (
					<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
						<div className="w-full lg:w-1/4">
							<p className="mb-2 text-sm text-neutral-400">{item.year}</p>
						</div>
						<div className="w-full max-w-xl lg:w-3/4">
							<h6 className="mb-2 font-semibold">
								{item.role} -{' '}
								<span className="text-sm text-purple-100">{item.company}</span>
							</h6>
							<p className="mb-4 text-neutral-400">{item.description}</p>
							{item.technologies.map((tech, index) => (
								<span
									key={index}
									className="mr-2 mt-4 rounded bg-neutral-900 px-2
                 py-1 text-sm font-medium text-purple-300"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}