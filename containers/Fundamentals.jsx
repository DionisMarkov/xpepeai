import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { images } from '../constants/images';

const {
	Scene_BluePurpleGold_Farming,
	Scene_BluePurpleGold_Trading,
	Scene_BluePurpleGold_NoLimits,
} = images;

const Fundamentals = () => {
	return (
		<section id='section-fundamentals' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>SOLUTION OVERVIEW</h2>
			</motion.div>
			<div className='cards-wrapper'>
				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_Farming} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Predictable and Stable Transaction Costs</span>
						<span className='card__content'>
							<p>
							xPEPE's utility token offers users the advantage of stable and predictable transaction costs. This eliminates the volatility and congestion-related issues that are often associated with using ETH for fee payments.
							</p>
						</span>
						<Link href='https://xpepe-ai.gitbook.io/home/overview/overview'>
							<a
								className='btn btn-solid btn-block'
								target='_blank'
								rel='noopener noreferrer'>
								Let’s go
							</a>
						</Link>
					</div>
				</div>

				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_Trading} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Reduced Transaction Costs:</span>
						<span className='card__content'>
							<p>
							With xPEPE, transaction costs are optimized, reducing the financial burden on users and enabling microtransactions and more cost-effective participation in the blockchain ecosystem.
							</p>
						</span>
					</div>
				</div>

				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_NoLimits} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Improved Scalability</span>
						<span className='card__content'>
							<p>
							By introducing xPEPE as an alternative fee payment method, the blockchain ecosystem becomes more scalable. This ensures a smoother and more accessible experience for users, regardless of network congestion.
							</p>
						</span>
					</div>
					
				</div>
			</div>
		</section>
	);
};

export default Fundamentals;
