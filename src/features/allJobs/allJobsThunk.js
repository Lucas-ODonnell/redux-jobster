import customFetch, { handleUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "../user/userSlice";

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const response = await customFetch.get(url);
    return response.data;
  } catch (error) {
    return handleUnauthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await customFetch.get("jobs/stats");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return handleUnauthorizedResponse(error, thunkAPI);
  }
};
