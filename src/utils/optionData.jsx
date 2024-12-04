import { FaTv } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoTelescope } from "react-icons/io5";
import { FaSnapchat } from "react-icons/fa";

export const optionData = [
  {
    heading: "Enjoy on your TV",
    info: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    logo: <FaTv className="h-full w-full" />,
  },
  {
    heading: "Download your shows to watch offline",
    info: "Save your favourites easily and always have something to watch.",
    logo: <MdDownload className="h-full w-full" />,
  },
  {
    heading: "Watch everywhere",
    info: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    logo: <IoTelescope className="h-full w-full" />,
  },
  {
    heading: "Create profiles for kids",
    info: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    logo: <FaSnapchat className="h-full w-full" />,
  },
];
