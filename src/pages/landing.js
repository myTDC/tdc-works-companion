import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavLink from '../components/navLink';
// import { Formik, Form, Field } from "formik";
//Components and reducers
import {
	getDataWorksV1,
	addDataWorksV1,
	// testRead
} from '../redux/actions/admin';

//Styles
import styles from '../styles/landing.module.css';

//Image Resources
// import Img from "../components/ImgExt"
// import logo from "../res/imgs/tdc-educate-full-onlight.svg";
import hero from '../res/imgs/landing/hero-v0-optim.svg';
import quickAction from '../res/imgs/landing/discovery-action-optim.svg';
import onlineCard from '../res/imgs/landing/online-education-optim.svg';
import analCard from '../res/imgs/landing/analytics-toolkit-optim.svg';
import investorCard from '../res/imgs/landing/meet-investors-optim.svg';
import nurture from '../res/imgs/landing/nurture-optim.svg';

import quickActIcon from '../res/icons/round-search.svg';

// import { ReactComponent as QuickActIcon } from "../res/icons/round-search-optim.svg";

const services = [
	{
		id: `educate`,
		label: `Educate`,
		pic: onlineCard,
		desc: `Online Education platform to help you grow, even when you're busy traveling for work.`,
		linkLabel: `Start Learning >`,
		link: `register`,
	},
	{
		id: `toolkit`,
		label: `Toolkit`,
		pic: analCard,
		desc: `Time is our lord and savior, specially in a startup. Use our suite of tool to save time.`,
		linkLabel: `Start Saving >`,
		link: `toolkit`,
	},
	{
		id: `elevate`,
		label: `Elevate`,
		pic: investorCard,
		desc: `Need the extra push to get to the next stage? Enroll here & get your own elevator pitch.`,
		linkLabel: `Get Funded >`,
		link: `register`,
	},
	{
		id: `analEngine`,
		label: `Analytics Engine`,
		pic: onlineCard,
		desc: `Data is the future. Know everything important that goes on in your products or service.`,
		linkLabel: `Be Data Smart >`,
		link: `toolkit`,
	},
	{
		id: `devEducation`,
		label: `Dev Education`,
		pic: analCard,
		desc: `Our development, design & product experts are here for you and your team.`,
		linkLabel: `Train the Dream Team >`,
		link: `register`,
	},
	{
		id: `salesEngine`,
		label: `Sales Engine`,
		pic: investorCard,
		desc: `Sales is often the most difficult things to get. But we have a network or users ready for you.`,
		linkLabel: `Get Your First Customers >`,
		link: `toolkit`,
	},
];

const ServiceCard = ({ data }) => {
	return (
		<div className={styles.serviceCard}>
			<img src={data.pic} alt={'an depiction of ' + data.desc} />
			<h3>{data.label}</h3>
			<p>{data.desc}</p>
			<NavLink className={styles.homeOutLink} to={data.link}>
				{data.linkLabel}
			</NavLink>
		</div>
	);
};

ServiceCard.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string,
		label: PropTypes.string,
		pic: PropTypes.string,
		desc: PropTypes.string,
		linkLabel: PropTypes.string,
		link: PropTypes.string,
	}),
};

ServiceCard.defaultProps = {
	data: null,
};

// export default ServiceCard

// export default ServiceCard

const ServicesComponent = ({ serviceList }) => {
	return (
		<div className={styles.homeServices}>
			<h2 className={styles.homeServicesHeading}>There's more...</h2>
			<p className={styles.homeServicesSubHeading}>
				We have a host of services to fulfill your startup needs.
			</p>
			<div className={styles.serviceContainer}>
				{serviceList.map((item) => (
					<ServiceCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};

// export ServicesComponent

class Landing extends Component {
	state = {
		user: null,
		winWidth: window.innerWidth,
	};
	static propTypes = {
		herosrc: PropTypes.string,
		heroSrcInternal: PropTypes.string,
	};
	static defaultProps = {
		herosrc: `https://images.unsplash.com/photo-1550784644-7f9460140af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&`,
		heroSrcInternal: `url(https://images.unsplash.com/photo-1550784644-7f9460140af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${window.innerWidth *
			2.5}&q=70)`,
	};

	getWindowSize() {
		this.setState((prevState) => {
			return {
				...prevState,
				winWidth: window.innerWidth,
			};
		});
	}

	componentDidMount() {
		this.getWindowSize();
		//listentoDataWorksV1()
	}
	compoentDidUpdate() {
		this.getWindowSize();
	}

	render() {
		return (
			<div className={styles.homeMain}>
				<section className={styles.homeFirst}>
					<div className={styles.homeHero}>
						<img
							src={hero}
							className={styles.homeHeroImg}
							alt='a happy human giving a thumbs up to the launch of his entrepreneurial dreams into a full fledged startup, wearing a the tshirt made exclusively for his startup'
						/>
						<div className={styles.homeHeroText}>
							<h1>
								Build your startup the <span className={styles.textHighlight}>right way.</span>
							</h1>
							<div className={styles.homeHeroTextActions}>
								<div className={styles.homeHeroTextActionItem}>
									<h3>Learn</h3>
									Learn how to build a startup in 10 workshops.
									<br />
									<span className='mention'>At @tdc_works</span>
									<button className={styles.buttonPrimary} type='button'>
										Start Learning
									</button>
								</div>
								<div className={styles.homeHeroTextActionItem}>
									<h3>Build</h3>
									Build upon your idea over the summer internship.
									<br />
									<span className='mention'>With @team_tdc</span>
									<button className={styles.buttonSecondary} type='button'>
										Let's Build
									</button>
								</div>
							</div>
						</div>
					</div>
					<div
						className={styles.homeQuickAct}
						style={{ backgroundImage: `url(${quickAction})` }}
						alt="A rocket leaving a colorful trail to signify the user's ability to quickly discover the nearest TDC event or Apperance">
						<div className={styles.homeQuickActText}>
							<h2>Need a demo?</h2>
							<span className={styles.subHeading}>Find a TDC event close to you.</span>
						</div>
						<img
							className={styles.quickActButton}
							src={quickActIcon}
							type='button'
							onClick={() => alert('TDC is hosting Events at ANDC College, DU in Govind Puri')}
							alt='search button to get user location and show the nearest TDC event both in distance and the closest dates'
						/>
					</div>
					<ServicesComponent serviceList={services} />
					<div>
						<div className={styles.homeBplanHeading}>
							<h2>How we work.</h2>
							<p>Our Mantra: I3DEA</p>
						</div>
						<div className={styles.homeBplan}>
							<img
								src={nurture}
								className={styles.homeBplanImg}
								alt='a happy human giving a thumbs up to the launch of his entrepreneurial dreams into a full fledged startup, wearing a the tshirt made exclusively for his startup'
							/>
							<div className={styles.homeBplanText}>
								<div>
									<h3>Education is Free</h3>
									Education is a fundamental right. Quality Education is more so.
									<br />
									And we believe in keeping quality entrepreneurial education free for everyone.
									<br />
									<br />
									In short, you don't pay us anything for education till you start-up.
									<br />
									<span
										className={styles.homeOutLink}
										onClick={() => {
											alert('go to Education FAQs');
										}}>
										Start Learning >
									</span>
								</div>
								<div>
									<h3>We earn after you do</h3>
									Once you start-up, the choice is yours.
									<br />
									We offer services and training in Insights, Analytics, Investments, Sales, Hiring
									and more. All to tend to the needs of your startup.
									<br />
									<br />
									But we only offer these to partner startups.
									<br />
									<span
										className={styles.homeOutLink}
										onClick={() => {
											alert('go to SILC FAQs');
										}}>
										Let's Grow Together >
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = ({ auth: { count, user, usrInfo } }) => ({});

const mapDispatchToProps = (dispatch) => ({
	addData: () => dispatch(addDataWorksV1()),
	getData: () => dispatch(getDataWorksV1()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing);
