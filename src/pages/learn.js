import React, { lazy, Suspense } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Footer from '../components/footer';
import NavLink from '../components/navLink';
import { Link } from '@reach/router';

import '../styles/learn.css';
import learnHero from '../res/imgs/landing/online-education-optim.svg';
import learnBenefits from '../res/imgs/landing/analytics-toolkit-optim.svg';
import learnRegisPeople from '../res/imgs/learners-v1-optim.svg';

const RegisForm = lazy(() => import('../components/forms/workshopRegistrationForm'));

const placeholderImage = (
	<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
		<figure className='learnRegistrationDisplay imageContainer'>
			<img
				className='learnImage'
				src={learnHero}
				loading='lazy'
				alt='Students Learning together with the hlpe of modern educational technologies'
			/>
			<figcaption className='caption'>
				Modern learning methodologies, backed by data science
			</figcaption>
		</figure>
	</Suspense>
);

const LearnHero = (props) => {
	return (
		<>
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
				<figure className='learnHeroDisplay imageContainer'>
					<img
						className='learnImage'
						src={learnHero}
						loading='lazy'
						alt='Students Learning together with the hlpe of modern educational technologies'
					/>
					<figcaption className='caption'>
						Modern learning methodologies, backed by data science
					</figcaption>
				</figure>
			</Suspense>
			<div className='learnHeroText textContainer'>
				<h1 className='learnTitle'>
					Knowledge gives you <span className='textHighlight super'>powers.</span>
				</h1>

				<h2 className='learnSubTitle'>Powerup in 10 Sessions</h2>
				<p className='learnHeroIntro'>
					A mix of knowledge, case studies, application & some secret ingridients you ought to know.
					<br />
					<br />
					All in 10 Sessions (or less), at a partner college near you.
					<br />
					<br />
					This is the TDC promise @tdc_works
				</p>
			</div>
		</>
	);
};

const LearnBenefits = (props) => {
	return (
		<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
			<Suspense delayMs='50' fallback={<div>Loading the cool images... </div>}>
				<figure className='learnBenefitsDisplay imageContainer'>
					<img className='learnImage' src={learnBenefits} alt='The beautiful MDN logo.' />
					<figcaption className='caption'>
						Adventurers love their powers and tools just as much.
					</figcaption>
				</figure>
			</Suspense>
			<div className='learnBenefitsText textContainer'>
				<span className='learnMetatitle'>Why do you even need powers?.</span>
				<h3 className='learnTitle'>
					Your startup will be a <span className='textHighlight'>memorable adventure,</span>
				</h3>
				<h3 className='learnSubTitle'>
					And with the right powers you can make it a successful one.
				</h3>
			</div>
		</Suspense>
	);
};

const LearnPowers = (props) => {
	return (
		<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
			<section className='learnPowers imageContainer textContainer'>
				<h5 className='learnSubTitle textLight'>🎝You'll get the powers!🎝</h5>
				<div className='learnPowersIconContainer'>
					{lister &&
						lister.map((cat, i) => (
							<div className='powerIcon' key={i}>
								<h1>🞜</h1>
								<span>{cat.title}</span>
							</div>
						))}
				</div>
			</section>
		</Suspense>
	);
};

const RegForm = (props) => {
	return (
		<section className='learnRegistration'>
			<div className='learnRegistrationDisplay'>
				<div className='learnRegistrationText textContainer'>
					<h1 className='learnSubTitle'>
						Learn to build your <span className='textHighlight super'>startup</span>
						<br />
						with your new <span className='textHighlight super'>powers</span>.
					</h1>
					<p className='learnRegistrationIntro'>
						Join @teamTDC in our signature startup workshops at a college near you.
					</p>
				</div>
				<Suspense delayMs='50' fallback={<aside>Loading the cool images... </aside>}>
					<img
						className='learnRegistrationImage'
						src={learnRegisPeople}
						loading='lazy'
						alt='Students Learning together with the hlpe of modern educational technologies'
					/>
				</Suspense>
			</div>
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
				<RegisForm className='learnRegistrationForm' />
			</Suspense>
		</section>
	);
};

const collablist = [
	{
		id: '01',
		name: 'ANDC inStart Foundation',
		link: 'https://andcinstartfoundation.in/',
		logo: 'https://andcinstartfoundation.in/wp-content/uploads/2019/01/cropped-HD-inStart-Logo.png',
	},
	{
		id: '02',
		name: 'Amity Entrepreneurship Forum',
		link:
			'https://www.facebook.com/Amity-Youth-Innovation-and-Entrepreneurship-Forum-1540555312884833/',
		logo: '',
	},
];

const CollabCard = (props) => {
	return (
		<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
			<img className='learnCollabCard' src={props.data.logo} alt='Logo of the collab partner' />
		</Suspense>
	);
};

const Collaborator = (props) => {
	return (
		<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
			<section className='learnCollabs textContainer'>
				<h1 className='learnTitle'>Active Collaborations</h1>
				<p className='learnSubTitle'>It takes more than two to tango with superpowers.</p>

				<div className='learnCollabSection'>
					<h2 className='learnSubTitle'>Entrepreneurship Cells</h2>
					<p>
						Entrepreneurship cells have at the heart of the TDC approach. We have an active network
						of ecells for digital marketing collaboration. They make it possible for us to reach the
						college students with the right mindset
					</p>
					<NavLink className='learnCollabLink' to='collab/ecell/apply' color='salmon'>
						Let's Collaborate 🞂
					</NavLink>
				</div>

				<div className='learnParaWAction'>
					<h2 className='learnSubTitle'>Incubators</h2>
					<p>
						A young startup needs many things to thrive, campus incubators definitely hold a place
						among them. We are proud to serve as a connection between young startups and campus
						incubators, through workshops, networking, IT services & business relations.
					</p>
					<Link className='learnCollabLink' to='collab/incubator/partner'>
						Let's Build Together 🞂
					</Link>
				</div>
			</section>
			<section className='learnParaWAction'>
				{collablist.map((collaber) => (
					<CollabCard data={collaber} key={collaber.id} />
				))}
			</section>
		</Suspense>
	);
};

const Eventorator = (props) => {
	return (
		<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
			<section className='learnEventsDisplay imageContainer'>{placeholderImage}</section>
			<section className='learnEventsDescription textContainer'>
				<h1 className='learnTitle'>Past Events</h1>
				<p className='learnSubTitle'>
					It feels good to be around the adventurous startup minds. Find out more:{' '}
					<a href='http://bit.ly/tdcreconn'>
						<span className='externalLink'>TDC Connects</span>
					</a>
				</p>

				<div className='learnParaWAction'>
					<h2 className='learnSubTitle'>Elevator Pitches</h2>
					<p>
						Startups can always use a boost, even if it comes at the cost of a little equity. We've
						been hosting elevator pitches for startups since April 2017.
						<br />
						And we bring it to all our student startups, to give them the edge they need!
					</p>
					<NavLink className='learnCollabLink' to='collab/ecell/apply' color='salmon'>
						Let's Elevate 🞂
					</NavLink>
				</div>

				<div className='learnParaWAction'>
					<h2 className='learnSubTitle'>Workshops</h2>
					<p>
						Many people aren't clear on the basics of startups, giving us an opportunity to work
						with them and help them learn more absout startup exriences.
						<br />
						We've recently concluded a series of workshops in ANDC
					</p>
					<Link className='learnCollabLink' to='collab/incubator/partner'>
						Let's Build Together 🞂
					</Link>
				</div>
			</section>
		</Suspense>
	);
};

const lister = [
	{ title: 'Dev' },
	{ title: 'Marketing' },
	{ title: 'Sales' },
	{ title: 'Funding' },
	{ title: 'HR' },
	{ title: 'Legal' },
	{ title: 'Ideation' },
	{ title: 'Validation' },
];
// export default RegForm

const Learn = (props) => {
	return (
		<div className='learnContainer'>
			<LearnHero />
			<LearnBenefits />
			<LearnPowers />
			<RegForm />
			<Collaborator />
			<Eventorator />
			<Footer />
		</div>
	);
};

Learn.propTypes = {};

export default Learn;
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Learn);
