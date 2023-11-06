import Link from 'next/link';
import {
	FaDiscord,
	FaInstagram,
	FaTelegramPlane,
	FaTwitter,
} from 'react-icons/fa';

const socialItems = [
	{ href: 'https://t.me/xpepecoinai', icon: <FaTelegramPlane /> },
	{ href: 'https://twitter.com/xPEPEAI', icon: <FaTwitter /> },
];

const Socials = ({ isSlider }) => {
	return (
		<div className={`socials ${isSlider ? 'slider' : ''}`}>
			{socialItems.map(({ href, icon }, i) => (
				<Link href={href} key={i}>
					<a target='_blank' rel='noopener noreferrer'>
						{icon}
					</a>
				</Link>
			))}
		</div>
	);
};

export default Socials;
