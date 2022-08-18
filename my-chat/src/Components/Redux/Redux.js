import { createSlice, configureStore } from "@reduxjs/toolkit";
export const members = []

const messageInitial = {
  message: '',
  allMessages: [],
  currentMessage : [],
  lastId:''
}
const avatarInitial = {
  gender: "chest",
  hairColor: "brown",
  hairStyle: "long",
  eyes: "normal",
  eyebrows: "raised",
  mouth: "grin",
  skin: "light",
  beard: "none",
  clothing: "shirt",
  clothingColor: "blue",
};

const userInitial = {
  username: "",
  isActive: 0,
  userColor: '',
  id: '',
};

const messageSlice = createSlice({
  name: 'message',
  initialState: messageInitial,
  reducers: {
    addMessage(state,action){
      state.allMessages = [...state.allMessages, action.payload]
    },
    currentMessage(state,action){
      state.message = action.payload
    },
    addCurrentMessage(state,action){
      state.currentMessage = action.payload
    },
    saveLastId (state,action){
      state.lastId =action.payload
    },
    reset () {
      return {
        ...messageInitial,
      };
    }
  }
})
const avatarSlice = createSlice({
  name: "avatar",
  initialState: avatarInitial,
  reducers: {
    gender(state, action) {
      state.gender = action.payload;
    },
    hairColor(state, action) {
      state.hairColor = action.payload;
    },
    hairType(state, action) {
      state.hairStyle = action.payload;
    },
    eyesType(state, action) {
      state.eyes = action.payload;
    },
    eyebrowsType(state, action) {
      state.eyebrows = action.payload;
    },
    mouthType(state, action) {
      state.mouth = action.payload;
    },
    skinType(state, action) {
      state.skin = action.payload;
    },
    beardType(state, action) {
      state.beard = action.payload;
    },
    clothingType(state, action) {
      state.clothing = action.payload;
    },
    clothingColor(state, action) {
      state.clothingColor = action.payload;
    },
    reset() {
      return {
        ...avatarInitial,
      };
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: userInitial,
  reducers: {
    user(state, action) {
      state.username = action.payload;
    },
    isActive(state, action) {
      state.isActive = action.payload;
    },
    setColor (state,action) {
      state.userColor = action.payload;
    },
    setId (state,action){
      state.id = action.payload;
    },
    reset() {
      return {
        ...userInitial,
      };
    },
  },
});

const store = configureStore({
  reducer: {
    avatar: avatarSlice.reducer,
    user: userSlice.reducer,
    message: messageSlice.reducer,
  },
});
export const avatarActions = avatarSlice.actions;
export const userActions = userSlice.actions;
export const messageActions = messageSlice.actions

export default store;
