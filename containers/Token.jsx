import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../constants/images';

const {
	metamaskLogo,
	arbitrumLogo,
	optimismLogo,
	polygonLogo,
	coinKromatika,
	coinsKromatika,
	circulatingSupply,
	coinsStash,
	goldLock,
} = images;

const Token = () => {
	return (
		<section id='section-token' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>Protocol Token</h2>
			</motion.div>
			<div className='token'>
				<motion.div
					initial={{ x: -100 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1 }}
					className='motion-div'>
				</motion.div>
				<div className='token__content'>
					<h3>What is $XPEPEAI?</h3>
					<p>
						$XPEPEAI is the utility and governance token of the $XPEPEAI protocol. It is
						a non-mintable ERC20 token deployed on Arbitrum with a fixed total
						supply of 100 million tokens. The tokenomic model of $xPEPE is
						deflationary by design since the tokens are being &nbsp;
						<Link href='https://univ3.uncx.network/lock/univ3/chain/42161/manage/locker/0xcb8b00d4018ad6031e28a44bf74616014bfb62ec/lock/25'>
							<a target='_blank' rel='noopener noreferrer'>
								locked.
							</a>
						</Link>
						<br />
						<br />
						$xPEPE is the token that pays the service fee to unlock the limit
						order feature of XPEPEAI protocol. This means that by using
						$XPEPE tokens, you not only get access to cost efficient limit
						orders on the DEX, but you will also get LP fees on every trade
						thanks to the innovative approach to providing liquidity.
						<br />
						<br />
						$XPEPE token is also used as a governance token within the xPEPEAI DAO.
						<br />
						xPEPEAI DAO has the possibility to add more utilities for the $XPEPE token through 
						governance proposals.
					</p>
				</div>
			</div>
			{/* CARDS UNDER TOKEN SECTION */}
			<div className='cards-wrapper'>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='card'>
						<figure>
							<Image src={circulatingSupply} alt='' />
						</figure>
						<div className='card__overlay'>
							<span className='card__title'>Tokenomics</span>
							<span className='card__content'>
						<p>
							Initially 60 million tokens + 20 ETH will be fair lauched on
							Uniswap V3 Arbitrum.
						</p>
					</span>
						</div>
				</motion.div>

				<motion.div 
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }} 
					transition={{ duration: 1 }} 
					className='card'>
						<figure>
							<Image src={coinsStash} alt='' />
						</figure>
						<div className='card__overlay'>
							<span className='card__title'>Vesting</span>
							<span className='card__content'>
						<p>
						35 million will be locked for vesting for 12 months
						</p>
					</span>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }} 
						className='card'>
						<figure>
							<Image src={goldLock} alt='' />
						</figure>
						<div className='card__overlay'>
							<span className='card__title'>Increased security</span>
							<span className='card__content'>
						<p>
							The proof of liquidity (position) will be burnt, for better security
							and in order to prevent rug pull hacks. You can consult the
							transaction &nbsp;
							<Link href=''>
								<a target='_blank' rel='noopener noreferrer'>
									here.
								</a>
							</Link>
						</p>
						<p>
							5 million $XPEPE tokens are kept in the DAO treasury, managed by the xPEPEAI DAO.
						</p>
					</span>
						</div>
					</motion.div>
			</div>
			{/* HOW TO BUY UNDER TOKEN SECTION */}
			<div className='token'>
				<motion.div
					initial={{ x: -300 }}
					whileInView={{
						x: 0,
						scale: [1, 2, 2, 1, 1],
						rotate: [0, 0, 150, 200, 0],
						borderRadius: ['20%', '20%', '50%', '50%', '20%'],
					}}
					transition={{ duration: 1 }}
					className='motion-div'>
				</motion.div>
				<div className='token__content'>
					<h3>How to buy $xPEPE?</h3>
					<p>
						The easiest way to purchase $xPEPE, is by using Uniswap
						Aggregator: &nbsp;
						<Link href='https://app.uniswap.org/tokens/arbitrum/0x7525a9568bc964b0de5b33c6920fad673876b473?chain=arbitrum'>
							<a target='_blank' rel='noopener noreferrer'>
								BUY NOW
							</a>
						</Link>
					</p>
					<p>
						You can consult more detailed instructions using the below links:
					</p>
					<ul>
						<li>
							<figure>
								<Image
									src={metamaskLogo}
									alt=''
									layout='fixed'
									width='28px'
									height='28px'
								/>
							</figure>
							<p>
								How to buy $XPEPEAI using the Arbitrum network (via &nbsp;
								<Link href='https://app.uniswap.org/tokens/arbitrum/0x7525a9568bc964b0de5b33c6920fad673876b473?chain=arbitrum'>
									<a target='_blank' rel='noopener noreferrer'>
										Uniswap
									</a>
								</Link>
								)?
							</p>
						</li>
						<li>
							<figure>
								<Image
									src={arbitrumLogo}
									alt=''
									layout='fixed'
									width='28px'
									height='28px'
								/>
							</figure>
							<p>
								How to add &nbsp;
								<Link href='https://app.uniswap.org/tokens/arbitrum/0x7525a9568bc964b0de5b33c6920fad673876b473?chain=arbitrum'>
									<a target='_blank' rel='noopener noreferrer'>
										Arbitrum
									</a>
								</Link>
								&nbsp; to & buy $xPEPE using metamask?
							</p>
						</li>
					</ul>
					<Link
						passHref={true}
						href=''>
						<motion.a
							className='btn btn-solid'
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
							whileTap={{ scale: 0.9 }}>
							Buy $xPEPE NOW
						</motion.a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Token;
