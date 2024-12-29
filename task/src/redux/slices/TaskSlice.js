import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todoTasks: [],
    setTodoTasks:[],
    signUpDatas:[],
    getusersList:[],
    loggedInUser:{},
    isLoading: false, 
    message:""
};
const getAllTodotasks = createSlice({
    name: "allTodoTasks",
    initialState,
    reducers: {
        updateList: (state,{payload}) => {
            const totalList = localStorage.getItem(`tasks_${payload.userData.email}`);

            if (totalList) {
            state.todoTasks = JSON.parse(totalList);
            }else{
            state.todoTasks = [];
              
            }
          },
          addItems: (state, { payload }) => {
            state.setTodoTasks = payload.addItemList
            localStorage.setItem(`tasks_${payload.userData.email}`, JSON.stringify(payload.addItemList));
          },
          isSignUp: (state, { payload }) => {
            state.signUpDatas = payload
            localStorage.setItem("usersList", JSON.stringify(payload));
          },
          isLogin: (state, { payload }) => {
            const userList = localStorage.getItem("usersList");
            if (userList) {
            state.getusersList = JSON.parse(userList);
            }
          },
          loggedInUser: (state, { payload }) => {
            localStorage.setItem("loggedInUser", JSON.stringify(payload));
          },
          getLoggedInUser: (state, { payload }) => {
            const userId = localStorage.getItem("loggedInUser");
            let user = JSON.parse(userId)
            state.loggedInUser = user

          },
          logOutUser: (state, { payload }) => {
            localStorage.removeItem(`tasks_${payload.userData.email}`);

          },
         
    }, 
});

export const { updateList ,addItems,isSignUp,isLogin,loggedInUser,getLoggedInUser,logOutUser} = getAllTodotasks.actions;
export default getAllTodotasks.reducer;