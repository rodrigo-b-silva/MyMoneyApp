import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import authReducer from '../auth/authReducer'
import billingCycleReducer from '../billingCycles/billingCyclesReducer'

const rootReducers = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    auth: authReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducers