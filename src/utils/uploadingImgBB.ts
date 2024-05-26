import { instance } from "@/helper/axios/axiosInstace";

export const uploadToImgBB = async (image: string) => {
  const imgbbApiKey = "f4d0893f5831f5b66a3f6cda7dcf31be";
  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
      {
        method: "POST",
        body: formData,
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
      }
    );

    if (response.ok) {
      const data = await response.json();

      return data.url;
    } else {
      console.error("Image upload to ImgBB failed");
    }
    return response;
  } catch (error) {
    console.error("Error uploading image to ImgBB", error);
  }
};
