import { createSlice, configureStore } from "@reduxjs/toolkit";
export const members = [];

const membersInitial = {
  allMembers: [],
  currentMember: undefined,
  lastMember: [],
  newMember: false,
  leftMember: [],
  didLeft: false,
};

const messageInitial = {
  message: "",
  allMessages: [],
  currentMessage: [],
  lastId: "",
};
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
  userColor: "",
  id: "",
};

const membersSlice = createSlice({
  name: "members",
  initialState: membersInitial,
  reducers: {
    addMember(state, action) {
      let existsInArray = state.allMembers.some(
        (x) => x.id === action.payload.id
      );
      if (!existsInArray) {
        state.allMembers = [...state.allMembers, action.payload];
      }
    },
    addMembers(state, action) {
      state.allMembers = [...state.allMembers, ...action.payload];
    },
    removeMember(state, action) {
      state.allMembers = state.allMembers.filter(
        (x) => x.id !== action.payload.id
      );
    },
    currentMember(state, action) {
      state.currentMember = action.payload;
    },
    lastMember(state, action) {
      state.lastMember = action.payload;
    },

    newMember(state, action) {
      state.newMember = action.payload;
    },
    leftMember(state, action) {
      state.leftMember = action.payload;
    },
    didLeft(state, action) {
      state.didLeft = action.payload;
    },
    reset() {
      return {
        ...membersInitial,
      };
    },
  },
});
const messageSlice = createSlice({
  name: "message",
  initialState: messageInitial,
  reducers: {
    addMessage(state, action) {
      state.allMessages = [...state.allMessages, action.payload];
    },
    currentMessage(state, action) {
      state.message = action.payload;
    },
    addCurrentMessage(state, action) {
      state.currentMessage = action.payload;
    },
    saveLastId(state, action) {
      state.lastId = action.payload;
    },
    reset() {
      return {
        ...messageInitial,
      };
    },
  },
});
const avatarSlice = createSlice({
  name: "avatar",
  initialState: avatarInitial,
  reducers: {
    gender(state, action) {
      if (action.payload === undefined) {
        state.gender = "chest";
      } else {
        state.gender = action.payload;
      }
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
    setColor(state, action) {
      state.userColor = action.payload;
    },
    setId(state, action) {
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
    members: membersSlice.reducer,
  },
});
export const avatarActions = avatarSlice.actions;
export const userActions = userSlice.actions;
export const messageActions = messageSlice.actions;
export const membersActions = membersSlice.actions;

export default store;
