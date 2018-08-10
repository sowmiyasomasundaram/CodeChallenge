import {appstore} from './store'
import {fetchDetails, showDetails, toggleDetails} from './actions'

const unsubscribe = appstore.subscribe(() => 
    console.log(appstore.getState())
);

console.log(appstore.getState());

appstore.dispatch(fetchDetails());
appstore.dispatch(showDetails());
appstore.dispatch(toggleDetails());
appstore.dispatch(fetchDetails());

unsubscribe();