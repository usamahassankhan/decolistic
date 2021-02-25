import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import CreateMainHeading from 'Pages/maincategory/CreateMainCategory';
import CreateSubMainCategory from 'Pages/maincategory/CreateSubMainCategory';
import CreateSubSubMainCategory from 'Pages/maincategory/CreateSubSubMainCategory';
import ViewMainCategory from 'Pages/maincategory/CreateSubSubMainCategory';
const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.mainCategory} component={CreateMainHeading} />
                <Route exact path={SLUGS.CreateSubMainCategory} component={CreateSubMainCategory} />
                <Route
                    exact
                    path={SLUGS.CreateSubSubMainCategory}
                    component={CreateSubSubMainCategory}
                />
                <Route exact path={SLUGS.overview} render={() => <div>overview</div>} />
                <Route exact path={SLUGS.tickets} render={() => <div>tickets</div>} />
                <Route exact path={SLUGS.ideasTwo} render={() => <div>ideasTwo</div>} />
                <Route exact path={SLUGS.ideasThree} render={() => <div>ideasThree</div>} />
                <Route exact path={SLUGS.ideas} render={() => <div>ideas</div>} />
                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
                <Route exact path={SLUGS.agents} render={() => <div>agents</div>} />
                <Route exact path={SLUGS.articles} render={() => <div>articles</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
