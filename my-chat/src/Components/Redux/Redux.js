import { createSlice, configureStore } from "@reduxjs/toolkit";

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
};

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
  },
});
export const avatarActions = avatarSlice.actions;
export const userActions = userSlice.actions;

export default store;
