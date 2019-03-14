import axios from 'axios';

export default (upload) => {
  const url = 'https://cors-anywhere.herokuapp.com/https://api.cloudinary.com/v1_1/dltepc8ei/upload';
  const formData = new FormData();
  const headers = { 'Content-Type': 'application/x-wwww-form-urlencoded' };
  formData.append('file', upload.image);
  formData.append('upload_preset', 'upload-preset');
  return axios.post(url, formData, { headers });
};
