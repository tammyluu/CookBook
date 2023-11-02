import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const signIn = createAsyncThunk(
    "aut/signIn", 
    async (credentials, {rejectWithValue})=>{ 

        try{
            const response = await axios.post("SignInURL", {},{  //placeholder for the actual IRL
                auth:credentials
            })
            return response.data 
        }
                catch (error) {
                    if (!error.response) {
                        throw error
                    }
                        return rejectWithValue("Erreur lors de l'authentifocation")
                    }
                }
)

const AuthSlice = createSlice({
    name :"AutSlice", 
    initialState:{
        user:null,
        email:null, 
        isloading:false 
    }, 
    reducers: {
        removeUser(state){
        state.user = null
        state.email = null
    }
    }, 
    extraReducers: (builder)=>{
        builder.addCase(signIn.pending, (state)=>{
            state.user = null
        state.userEmail = null
        state.isLoading = true
        state.error = null
        })
        builder.addCase(signIn.fulfilled, (state,action)=>{
            state.isLoading = false
            state.error = null
            state.user = action.payload
        })
        builder.addCase(signIn.rejected, (state)=>{
            state.error = "error"
            state.isLoading = false 
            alert("incorrect Email or Password")
        })

    }
    
})

export default AuthSlice.reducer