import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import AppNotFound from "../app-not-found/AppNotFound";
import BarChartRating from "./bar-chart/BarchartRating";
const AppDetails = () => {
  const { appId } = useParams();
  console.log(appId);

  const { apps, loading } = useApps();

  const app = apps.find((a) => a.id === Number(appId));

  if (loading) return <h1>Loading.......</h1>;

  if (!app) {
    return <AppNotFound />;
  }
  const {
    title,
    image,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;
  return (
    <div className="max-w-[1440px] mx-auto my-20 px-2.5">
      <div className="flex flex-col items-center-safe md:items-stretch md:flex-row gap-10 ">
        <figure className="w-80 h-80 ">
          <img className="w-full h-full" src={image} alt="App" />
        </figure>
        <div className="flex flex-col gap-4 md:justify-between items-center md:items-start">
          <h2 className="dark font-bold text-3xl">{title}</h2>
          <h4 className="gray text-lg">
            Developed by{" "}
            <span className="gradient-text font-semibold">{companyName}</span>
          </h4>
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start dark gap-6">
            <div className="w-36 flex flex-col items-center md:block">
              <img src={downloadIcon} alt="download" />
              <p className="mt-2">Downloads</p>
              <h2 className="text-[40px] font-extrabold">
                {downloads / 100000}M
              </h2>
            </div>
            <div className="w-36 flex flex-col items-center md:block">
              <img src={starIcon} alt="star" />
              <p className="mt-2">Average Ratings</p>
              <h2 className="text-[40px] font-extrabold">{ratingAvg}</h2>
            </div>
            <div className="w-36 flex flex-col items-center md:block">
              <img src={reviewIcon} alt="review" />
              <p className="mt-2">Total Reviews</p>
              <h2 className="text-[40px] font-extrabold">{reviews / 1000}K</h2>
            </div>
          </div>
          <button className="bg-[#00D390] py-3.5 px-5 rounded-lg text-white">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <hr className="w-full gray opacity-50 my-10" />

      <h3 className="dark text-2xl font-semibold mb-6">Ratings</h3>
      <div className="h-80">
        <BarChartRating ratings={ratings} />
      </div>
      <hr className="w-full gray opacity-50 my-10" />

      <h3 className="dark text-2xl font-semibold mb-6">Description</h3>
      <p>{description}</p>
    </div>
  );
};

export default AppDetails;
