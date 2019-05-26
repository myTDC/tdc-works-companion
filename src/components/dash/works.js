import React, { useEffect } from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import WorksCard from './worksCard';
import { getDataWorksV1, selectWorkshop } from '../../redux/actions/admin';
// import { Link } from "@reach/router";

// import styles from "../../styles/dash.module.css";
import './works.css';
import wsCard from '../../res/imgs/landing/analytics-toolkit-optim.svg';
import { useWindowWidth } from '../../commonHooks';
// {
// 	topic,
// 	date,
// 	description,
// 	duration,
// 	colors,
// 	feedback,
// }
const WorkshopDetails = (props) => {
	// const wsData = useSelector((state) => state.admin)
	// console.log("Selector has Data: ", wsData)
	return (
		<React.Fragment>
			<div className='worksHeader'>
				<h1 className='worksTitleMeta'>
					Workshop #{props.id} of {props.count}
				</h1>
				<h2 className='worksTitle'>{props.topic}</h2>
			</div>
			<p className='worksDescription'>{props.description}</p>
			<div className='worksSession'>
				<p className='worksSessionHead'>Session Details</p>
				<p>
					for {props.duration} on {props.date}
				</p>
				<p>at {props.location || 'ANDC inStart Foundation'}</p>
			</div>
			<div className='worksPopularity'>
				<div className='worksUserRating'>
					<span className='worksRating'>⚝ {props.feedback}</span>
					<span className='worksRatingMax'>/5.0</span>
				</div>
			</div>
			<div className='worksFooter'>
				<span className='worksLive'>
					<button type='button'>{''}</button>
					<a href='https://www.facebook.com/tdcsif'>watch online</a>
				</span>
				<span className='worksSocial'>
					<span>Share: </span> <a href='https://www.facebook.com/tdcsif'>f</a>
					<a href='https://www.linkedin.com/company/tdcsif/'>in</a>
					<a href='https://twitter.com/the_tdcsif'>t</a>
				</span>
			</div>
		</React.Fragment>
	);
};

const Works = (props) => {
	const { works, getDataWorksV1, selectWorkshop, selectedId, currentWorkshop } = props;

	const isMobile = useWindowWidth('mobile');
	let howScroll = isMobile ? 'center' : 'start';
	// Datafetching Effect
	useEffect(() => {
		if (works) {
			return;
		}
		console.log('Works is empty', works, '| So fetching Data from Server');
		getDataWorksV1();
	}, [getDataWorksV1, works]);

	return (
		<div className='works'>
			<section className='worksDetails'>
				<div className='sectionHeader'>
					<span className='sectionSubHeading'>Upcoming</span>
					<h2 className='sectionHeading'>Workshops</h2>
				</div>
				{currentWorkshop && <WorkshopDetails {...currentWorkshop} count={works.length} />}
			</section>
			<section className='worksCardContainer'>
				{works ? (
					works.map((ws, i) => {
						return (
							<WorksCard
								key={i}
								{...ws}
								img={wsCard}
								selectedId={selectedId}
								hozScroll={howScroll}
								selectionHandler={() => selectWorkshop(ws.id)}
								// ref={cardRef}
								// scrollHandler={handleSmoothScroll}
							/>
						);
					})
				) : (
					<p>
						Getting latest workshops.
						<br /> Please wait...
					</p>
				)}
			</section>
		</div>
	);
};

Works.propTypes = {};

const mapStateToProps = ({ admin: { workshops, selected_Id, selected } }) => ({
	works: workshops,
	selectedId: selected_Id,
	currentWorkshop: selected,
});

export default connect(
	mapStateToProps,
	{ getDataWorksV1, selectWorkshop }
)(Works);
