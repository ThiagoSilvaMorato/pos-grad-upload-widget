import axios from "axios";

interface UploadFileToStorageParams {
  file: File;
}

interface UploadFileToStorageOpts {
  signal?: AbortSignal;
}

export async function uploadFileToStorage(
  { file }: UploadFileToStorageParams,
  opts?: UploadFileToStorageOpts
) {
  const data = new FormData();

  data.append("file", file);

  // throw new Error();

  const response = axios.post<{ url: string }>("http://localhost:3333/uploads", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    signal: opts?.signal,
  });

  return { url: (await response).data.url };
}
