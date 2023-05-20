import { AxiosRequestConfig } from "axios";

export interface DatasetType {}

export interface Dataset {
  id: number;
  name: string;
  uploadTime: string;
  uploader: string;
  uploaderId: number;
  status: number;
  labeledTaskCount: number;
  unlabeledTaskCount: number;
  totalTaskCount: number;
  textCount: number;
  templateId: number,
  templateName: string,
  filePath: string,
  fileName: string,
  textId: number,
  patientId: number,
  firstCategoryId: number,
  diseasedId: number,
  title: string,
  content: string,
  updatetime: number,
  themeId: number
}
export enum DatasetOperation {
  CHECK = 0,
  EDIT = 1,
  DELETE = 2,
  ADD = 3,
}

export interface Pagination {
  currentIndex: number;
  total: number;
  pageSize: number;
}

export enum DatasetStatus {
  UNTRAIN = 0,
  TRAINING = 1,
  TRAINED = 2,
}

export interface DatasetJSONData extends AxiosRequestConfig {
  code: number;
  data: {
    pagination: Pagination;
    datasets: Dataset[];
  };
}

export interface DatasetFilterDataType extends AxiosRequestConfig {
  datasetName: string;
  pagination: Pagination;
}

export enum DatasetStatusZH {
  UNTRAIN = "未训练",
  TRAINING = "训练中",
  TRAINED = "已训练",
}


