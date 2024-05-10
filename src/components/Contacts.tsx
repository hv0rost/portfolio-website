import { CONTACT } from '../assets/data/data'

export default function Contacts() {
	return (
		<div className="pb-20">
			<h2 className="mt-10 mb-5 text-center text-4xl">Contacts</h2>
			<div className="text-center tracking-tighter">
				<p className="my-4"> {CONTACT.address}</p>
				<p className="my-4"> {CONTACT.phoneNo}</p>
				<p className="my-4"> {CONTACT.email}</p>
			</div>
		</div>
	)
}
