useRef--
preserves value between renders i.e avoid rendering as we see in state
directly access dom elements works like query selector and all dom attributes are accessible

store configuration
//store

import {configureStore} from '@reduxjs/toolkit'
import slice from '.userSlice'
const store = configureStore({
reducers:{
userSlice:slice
}
})
export default store

//slice
import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
name:'username'
initialState:{
user:''
}
reducers:{
addUser:(state,action)=>{
state.user=action.payload.userName
}
}
})
export {addUser} from slice.actions
export default slice.reducer

// App component
import store from './store'
import {Provider} from 'react-redux'
return(
<Provider store={store}>
<UserComponent/>
</Provider>
)

//userComponent
import {addUser} from 'userSlice'
import {useDispatch,useSelector} from 'react-redux'

const dispatch = useDisptach()
const name = useSelector((store)=>store.userSlice.user)
<button onClick={diaptch(addUser('divya'))}></button>
