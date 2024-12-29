import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAlltasks = createAsyncThunk(
    "configuration:allTasks",
    async ( _ ,{ rejectWithValue }) => {
        try {
            const data = await axios({
                url,
                method: "get",
                
            });
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const addData = createAsyncThunk(
    "saveData",
    async(data,{rejectWithValue})=>{
        try{
            const response = await axios.post(url1,data) 
            return response.data
        }catch(error){
            return rejectWithValue(error);

        }
    
    })

    export const deleteData = createAsyncThunk(
        "deleteData",
        async(id,{rejectWithValue})=>{
            try{
                const response = await axios.delete(`https://managetodo-backend.onrender.com/taskItem/${id}`) 
                return response.data
            }catch(error){
                return rejectWithValue(error);
    
            }
        
        })