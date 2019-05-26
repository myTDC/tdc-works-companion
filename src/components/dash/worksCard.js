import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './workscard.css';

const WorksCard = ({ id, topic, img, selectionHandler, hozScroll, selectedId }) => {
	const cardRef = useRef();

	const handleSmoothScroll = () => {
		cardRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: `${hozScroll}`,
		});
		// cardRef.current.scrollLeft = -10;
	};

	function handleClick() {
		selectionHandler();
		handleSmoothScroll();
	}
	return (
		<div
			className={selectedId === id ? 'selected' : 'card'}
			role='button'
			tabIndex='0'
			ref={cardRef}
			onKeyPress={handleClick}
			onClick={handleClick}>
			<img className='cardPic' src={img} alt='Learning from workshops' />
			<p className='cardTitle'>{topic}</p>
		</div>
	);
};

WorksCard.propTypes = {
	img: PropTypes.string,
	topic: PropTypes.string,
	description: PropTypes.string,
	duration: PropTypes.string,
	feedback: PropTypes.string,
};

export default WorksCard;
