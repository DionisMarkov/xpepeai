import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Tile } from '../components';
import { brands } from '../constants/brands';

const {
	cg2,
	uniswap,
	polygon,
	optimismHorizontal,
	chainlink,
	celer,
	arbitrum,
	dexguru,
	dextlogo,
	ethereum,
	vulkania,
	cmc
} = brands;

const seenOn = [
	{
	href: 'https://dex.guru/token/arbitrum/0x7525a9568bc964b0de5b33c6920fad673876b473',
	logo: dexguru,
	},
	{
		href: 'https://www.dextools.io/app/en/arbitrum/pair-explorer/0xd83ff36d6b9e5a7e7c446c6abd5b325b824a58da',
		logo: dextlogo,
	},
];

const buildOn = [
	{ href: 'https://arbitrum.io/', logo: arbitrum },
	{ href: 'https://ethereum.org/en/', logo: ethereum },
];

const poweredBy = [
	{ href: 'https://chain.link/', logo: chainlink },
	{ href: 'https://uniswap.org/', logo: uniswap },
];


const Brands = () => {
	return (
		<section id='section-brands' className='section-padding'>
			{/* SEEN ON */}
			<div className='brands'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<h2 className='brands__title'>As Seen On</h2>
				</motion.div>
				<div className='brands__links'>
					{seenOn.map(({ href, logo }, index) => (
						<Tile href={href} logo={logo} key={index} />
					))}
				</div>
			</div>
			{/* BUILT ON*/}
			<div className='brands'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<h2 className='brands__title'>Built On</h2>
				</motion.div>
				<div className='brands__links'>
					{buildOn.map(({ href, logo }, index) => (
						<Tile href={href} logo={logo} key={index} />
					))}
				</div>
			</div>
			<div className='brands-wrapper'>
				{/* POWERED BY */}
				<div className='brands'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						<h2 className='brands__title'>Powered By</h2>
					</motion.div>
					<div className='brands__links'>
						{poweredBy.map(({ href, logo }, index) => (
							<Tile href={href} logo={logo} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands;