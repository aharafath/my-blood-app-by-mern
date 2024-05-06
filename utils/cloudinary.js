import cloudinary from "cloudinary";

// configuration
cloudinary.config({
  cloud_name: "drzur9vnm",
  api_key: "641961928246745",
  api_secret: "KnNSSWzAPtg6rE9VgkxoTe-Akko",
});

// file upload to cloude
export const fileUploadToCloud = async (path) => {
  const data = await cloudinary.v2.uploader.upload(path);
  return data;
};

// file delete form cloud
export const fileDeleteFromCloud = async (publicId) => {
  await cloudinary.v2.uploader.destroy(publicId);
};
