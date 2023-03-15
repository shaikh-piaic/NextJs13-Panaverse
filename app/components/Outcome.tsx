import Image from "next/image";
import outcome from "@/public/outcome.jpg";
const Outcome = () => {
	return (
		<>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 py-20 lg:flex-row md:flex-col flex-col items-center md:px-14'>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 order-2'>
						<Image
							className='object-cover object-center rounded'
							alt='Program Outcome'
							src={outcome.src}
							width={720}
							height={600}
						/>
					</div>
					<div className='lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center'>
						<h1 className=' sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-justify'>
							The Outcome for Participants of the Program
						</h1>
						<p className='mb-8 leading-relaxed text-base md:text-xl lg:text-2xl text-justify'>
							The graduates of this program will own products (Full-Stack App
							Templates, AR and VR Experiences, and APIs) that are marketed
							globally by the Panaverse DAO and, if they like, will also be able
							to start off by offering services at a rate of $50 per hour
							($96,000 per year). This would give Pakistani professionals and
							students a fantastic opportunity to better their financial
							situation while also giving the economy a much-needed boost by
							expanding software exports.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Outcome;