import { motion } from 'framer-motion';
import { Fragment, useRef } from 'react';
import { Divider, Quarter } from '../components';

const quarters = [
	{
		title: 'Token Launch and Initial Liquidity',
		goals: [
			{
				status: true,
				goal: 'Launching the xPEPEAI protocol on Arbitrium Mainnet (audit completion).',
			},
			{
				status: true,
				goal: 'Create a liquidity pool of 60 million tokens and 20 ETH to ensure availability on various exchanges.',
			},
			{
				status: true,
				goal: 'Conduct a fair and transparent token distribution to kickstart the project.',
			},
			{
				status: false,
				goal: 'Launching new xPEPEAI.Finance website.',
			},
		],
	},
	{
		title: 'Community Building and Governance',
		goals: [
			{
				status: false,
				goal: 'Engage with the community to foster active participation and feedback.',
			},
			{
				status: true,
				goal: 'Lock 35 million tokens for vesting and DAO to support long-term project sustainability.',
			},
			{
				status: false,
				goal: 'Initiate community governance and decision-making processes to include the xPEPE community in project development.',
			},
			{
				status: false,
				goal: 'CEX listing.',
			},
			{
				status: false,
				goal: 'Continue to build partnerships and collaborations with key players in the blockchain industry.',
			},
			{
				status: false,
				goal: 'Expand the use cases and adoption of xPEPE within the blockchain ecosystem.',
			},
		],
	},
	{
		title: 'Development and Partnerships',
		goals: [
			{
				status: false,
				goal: 'Collaborate with DApp developers for the integration of xPEPE into various blockchain applications.',
			},
			{
				status: false,
				goal: 'Enhance the security and reliability of the xPEPE ecosystem through regular audits and updates.',
			},
			{
				status: false,
				goal: 'Adding gasless market swap feature to xPEPE protocol.',
			},
			{
				status: false,
				goal: 'xPEPEAI DAO governance launch',
			},
			{
				status: false,
				goal: 'Launch perpetual trading.',
			},
			{
				status: false,
				goal: 'Implement fiat on-ramp service.',
			},
			{
				status: false,
				goal: 'Implement cross-chain bridge solution.',
			},
			{
				status: false,
				goal: 'Focus on ongoing development, research, and innovation to keep xPEPE at the forefront of blockchain technology.',
			},
			{
				status: false,
				goal: 'Implement community-driven initiatives and improvements based on DAO decisions.',
			},
			{
				status: false,
				goal: 'Continuously monitor and optimize the projects tokenomics and distribution.',
			},
		],
	},
];

const BUIDLPlan = () => {
	return (
		<section id='section-roadmap' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>BUIDL Plan</h2>
			</motion.div>
			<p className={'buidl-plan'}>
				xPEPEAI DAO tasks will be visible on Dework - the ultimate Web3 project management tool.
				All tasks can be undertaken by any web3 contributor, and incentivized in $XPEPE.
				<a href=''> <strong>Coming Soon</strong>.</a>
			</p>
			<div className='roadmap container'>
				{quarters.map((quarter, i) => (
					<Fragment key={i}>
						<Quarter quarter={quarter} />
						<span className='checkpoint' />
					</Fragment>
				))}
				<Divider type='vertical' h='58rem' w='0' />
			</div>
		</section>
	);
};

export default BUIDLPlan;
