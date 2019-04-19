import { createReducer } from "redux-starter-kit"
import { 
  gettingDataWorksV1, gotDataWorksV1, gotErrorGettingDataWorksV1,
  settingDataWorksV1, setDataWorksV1, gotErrorSettingDataWorksV1,
} from "../actions/admin"

const initialState = {
  workshops: null,
  fetching: false,
  adding: false,
  error: false,
  error_Code: null,
}

const adminReducer = createReducer(initialState, {
  [gettingDataWorksV1.type]: state => {
    state.fetching = true
  },
  [gotDataWorksV1.type]: (state, action) => {
    state.fetching = false
    state.workshops = action.payload.workshops
  },
  [gotErrorGettingDataWorksV1.type]: (state, action) => {
    state.error = true
    state.fetching = false
    state.error_Code = action.payload.error_code
  },
  [settingDataWorksV1.type]: state => {
    state.adding = true
  },
  [setDataWorksV1.type]: state => {
    state.adding = false
  },
  [gotErrorSettingDataWorksV1.type]: (state, action) => {
    state.error = true
    state.adding = false
    state.error_Code = action.payload.error_code
  },
})

export default adminReducer
