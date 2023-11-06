import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import VedioCall from "../../assets/vedioCall.svg";
import TrakingLocation from "../../assets/lcoationTraking.svg";
import Medicine from "../../assets/medicine.svg";
import Image from "next/image";
export default function UpComingService() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 my-40">
      <h3 className=" text-3xl font-bold text-center">
        Our Feature & Services
      </h3>
      <div className=" grid lg:grid-cols-3  grid-cols-1 gap-5 mt-20">
        <div className="border rounded-3xl h-full pb-5 bg-[#30029010]">
          <div className=" h-60">
            <Image
              src={VedioCall}
              width={500}
              height={500}
              alt="pic"
              className=" h-full w-full rounded-3xl py-2"
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              One To One Vedio Call
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              provident?
            </Typography>
          </CardContent>

          <div className="w-full h-10 flex justify-center  ">
            <button className="h-full text-white bg-[#d1001c] w-44 rounded-xl">
              More
            </button>
          </div>
        </div>
        <div className="border rounded-3xl h-full pb-5 bg-[#30029010]">
          <div className="h-60">
            <Image
              src={TrakingLocation}
              width={500}
              height={500}
              alt="pic"
              className=" h-full w-full rounded-3xl py-2"
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tracking Donar Location Real Time
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              provident?
            </Typography>
          </CardContent>

          <div className="w-full h-10 flex justify-center  ">
            <button className="h-full text-white bg-[#d1001c] w-44 rounded-xl">
              More
            </button>
          </div>
        </div>
        <div className="border rounded-3xl h-full pb-5 bg-[#30029010]">
          <div className="h-60">
            <Image
              src={Medicine}
              width={500}
              height={500}
              alt="pic"
              className=" h-full w-full rounded-3xl py-2"
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sales Any Medicine
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              provident?
            </Typography>
          </CardContent>

          <div className="w-full h-10 flex justify-center  ">
            <button className="h-full text-white bg-[#d1001c] w-44 rounded-xl">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
