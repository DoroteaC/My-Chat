import { createStore } from "redux";
const defaultState = {
  username: "",
  isActive: 0,
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
const appReducer = (
  state = defaultState,
  action
) => {
  if (action.type === "user") {
    return {
      username: action.username,
      isActive: action.isActive,
    };
  }
  if (action.type === "active") {
    return {
      isActive: action.isActive,
    };
  }
  if (action.type === "gender") {
    return {
      gender: action.gender,
      hairStyle: state.hairStyle,
      hairColor: state.hairColor,
      eyes: state.eyes,
      eyebrows: state.eyebrows,
      mouth: state.mouth,
      skin: state.skin,
      beard: state.beard,
      clothing: state.clothing,
      clothingColor: state.clothingColor,
    };
  }
  if (action.type === "hairColor") {
    return {
      hairColor: action.hairColor,
      gender: state.gender,
      hairStyle: state.hairStyle,
      eyes: state.eyes,
      eyebrows: state.eyebrows,
      mouth: state.mouth,
      skin: state.skin,
      beard: state.beard,
      clothing: state.clothing,
      clothingColor: state.clothingColor,
    };
  }
  if (action.type === "hairStyle") {
    return {
      hairStyle: action.hairStyle,
      gender: state.gender,
      hairColor: state.hairColor,
      eyes: state.eyes,
      eyebrows: state.eyebrows,
      mouth: state.mouth,
      skin: state.skin,
      beard: state.beard,
      clothing: state.clothing,
      clothingColor: state.clothingColor,
    };
  }
  if (action.type === "eyesType") {
    return {
      eyes: action.eyes,
      hairStyle: state.hairStyle,
      gender: state.gender,
      hairColor: state.hairColor,
      eyebrows: state.eyebrows,
      mouth: state.mouth,
      skin: state.skin,
      beard: state.beard,
      clothing: state.clothing,
      clothingColor: state.clothingColor,
    };
  }
  if (action.type === "eyebrowsType") {
    return {
      eyebrows: action.eyebrows,
      hairStyle: state.hairStyle,
      gender: state.gender,
      hairColor: state.hairColor,
      eyes: state.eyes,
      mouth: state.mouth,
      skin: state.skin,
      beard: state.beard,
      clothing: state.clothing,
      clothingColor: state.clothingColor,
    };
  }
  if (action.type === "mouthType") {
    return {
      eyebrows: state.eyebrows,
      hairStyle: state.hairStyle,
      gender: state.gender,
      hairColor: state.hairColor,
      eyes: state.eyes,
      mouth: action.mouth,
      skin: state.skin,
      beard: state.beard,
      clothing: state.clothing,
      clothingColor: state.clothingColor,
    };
  }
  if (action.type === "skinType") {
    return {
      eyebrows: state.eyebrows,
      hairStyle: state.hairStyle,
      gender: state.gender,
      hairColor: state.hairColor,
      eyes: state.eyes,
      mouth: state.mouth,
      skin: action.skin,
      beard: state.beard,
      clothing: state.clothing,
      clothingColor: state.clothingColor,
    };
  }
  if (action.type === "beardType") {
    return {
      eyebrows: state.eyebrows,
      hairStyle: state.hairStyle,
      gender: state.gender,
      hairColor: state.hairColor,
      eyes: state.eyes,
      mouth: state.mouth,
      skin: state.skin,
      beard: action.beard,
      clothing: state.clothing,
      clothingColor: state.clothingColor,
    };
  }
  if (action.type === "clothingType") {
    return {
      eyebrows: state.eyebrows,
      hairStyle: state.hairStyle,
      gender: state.gender,
      hairColor: state.hairColor,
      eyes: state.eyes,
      mouth: state.mouth,
      skin: state.skin,
      beard: state.beard,
      clothing: action.clothing,
      clothingColor: state.clothingColor,
    };
  }
  if (action.type === "clothingColor") {
    return {
      eyebrows: state.eyebrows,
      hairStyle: state.hairStyle,
      gender: state.gender,
      hairColor: state.hairColor,
      eyes: state.eyes,
      mouth: state.mouth,
      skin: state.skin,
      beard: state.beard,
      clothing: state.clothing,
      clothingColor: action.clothingColor,
    };
  }
  if (action.type === "reset") {
    return defaultState;
  }
  return state;
};

const store = createStore(appReducer);

export default store;
