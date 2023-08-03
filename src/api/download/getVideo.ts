import { progressParams, videoParams } from "../../types/Api";
import axiosInstance from "../axiosInstance";

export const initializeVideo = (params: videoParams) => {
  return axiosInstance.get(`/download.php`, { params });
}

export const getProgress = (params: progressParams) => {
  return axiosInstance.get(`/progress.php`, { params });
}