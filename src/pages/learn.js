import React, { lazy, Suspense } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import '../styles/learn.css';
import learnHero from '../res/imgs/landing/online-education-optim.svg';
import learnBenefits from '../res/imgs/landing/analytics-toolkit-optim.svg';

const RegisForm = lazy(() => import('../components/forms/workshopRegistrationForm'));

const RegForm = (props) => {
	return (
		<div>
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
				<RegisForm />
			</Suspense>
		</div>
	);
};

RegForm.propTypes = {};

const lister = [
  {title: 'Dev'},
  {title: 'Marketing'},
  {title: 'Sales'},
  {title: 'Funding'},
  {title: 'HR'},
  {title: 'Legal'},
  {title: 'Ideation'},
  {title: 'Validation'}
]
// export default RegForm

const Learn = (props) => {
	return (
		<div className='learnContainer'>
			Here are the components required to show details of <br />
			things our users can learn at TDC.
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
				<figure className='learnHeroDisplay imageContainer'>
					<img className='learnImage' src={learnHero} alt='Students Learning together with the hlpe of modern educational technologies' />
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
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
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
      <section className='learnPowers imageContainer textContainer'>
        <h5 className='learnSubTitle textLight'>
          🎝You'll get the powers!🎝
        </h5>
        <div className='learnPowersIconContainer'>
        {lister && lister.map((cat,i)=><div className="powerIcon" key={i}>
          <h1>🞜</h1>
          <span>{cat.title}</span>
          </div>)}
          </div>

          
        </section>
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
