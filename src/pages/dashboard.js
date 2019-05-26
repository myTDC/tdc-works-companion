import React, { lazy, Suspense } from 'react';
import '../styles/dash.css';

const Profiler = lazy(() => import('../components/dash/profiler'));
const Works = lazy(() => import('../components/dash/works'));
const EvalView = lazy(() => import('../components/dash/evalView'));

const ToolsView = (props) => {
	return (
		<div className='tools'>
			<div className='sectionHeader'>
				<span className='sectionSubHeading'>Unlocked</span>
				<h2 className='sectionHeading'>toolkits</h2>
			</div>
			<section className='styles.toolslist'>
				I has the toolkits.
				<br />
				And they be good
			</section>
		</div>
	);
};

ToolsView.propTypes = {};

// export default ToolsView

const Dashboard = (props) => {
	return (
		<div className='dashContainer'>
			<Suspense delayMs='500' fallback={<div>Loading the cool stuff... </div>}>
				<Profiler />
				<Works />
				<ToolsView />
				<EvalView />
			</Suspense>
		</div>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
