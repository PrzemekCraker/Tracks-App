import createDataContex from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const respone = await trackerApi.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: respone.data });
};

const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

export const { Provider, Context } = createDataContex(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
