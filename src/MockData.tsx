import { BLUE, CHART_COLORS, LINE_BACKGROUND } from "./utils/colors";
import { IData } from "./components/Card/CardStyle";
import { IChartData } from "./components/Chart/ChartType";

export const LineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
      },
    },
    y: {
      display: false,
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
  tension: 0.5,
  fill: {
    target: "origin",
  },
};
export const BarChartOptions = {
  indexAxis: "y",
  borderRadius: 100,
  responsive: true,
  barThickness: 16,
  barPercentage: 0.5,
  layout: {
    labels: {
      color: "rgb(255, 99, 132)",
      font: {
        family: "Mulish",
      },
    },
    padding: {
      top: 0,
      bottom: 0,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};
export const DoughnutChartOptions = {
  cutout: "85%",
  plugins: {
    legend: false as any,
  },
};

export const LineChartState: IChartData = {
  labels: [],
  datasets: [
    {
      borderColor: BLUE,
      backgroundColor: LINE_BACKGROUND,
      data: [],
    },
  ],
};
export const DoughnutChartState: IChartData = {
  labels: [],
  datasets: [
    {
      backgroundColor: CHART_COLORS,
      data: [],
    },
  ],
};
export const BarChartState: IChartData = {
  labels: [
    `#covid19   ${Number((10 / 61) * 100)
      .toString()
      .substr(0, 2)}%`,
    `sport   ${Number((6 / 61) * 100)
      .toString()
      .substr(0, 2)}%`,
    `israel   ${Number((8 / 61) * 100)
      .toString()
      .substr(0, 2)}%`,
    `Economy   ${Number((15 / 61) * 100)
      .toString()
      .substr(0, 2)}%`,
    `Crime   ${Number((12 / 61) * 100)
      .toString()
      .substr(0, 2)}%`,
  ],
  datasets: [
    {
      backgroundColor: BLUE,
      data: [10, 6, 8, 15, 12],
    },
  ],
};
export const DUMMY: IData = {
  source: {
    id: "fox-news",
    name: "Fox News",
  },
  tags: ["sport", "israel", "USA"],
  author: "Fox News",
  title:
    "Dr. Fauci on whether politics of COVID boosters has gotten ahead of public health",
  description:
    "Dr. Anthony Fauci, the top disease expert in the U.S., discusses COVID-19 vaccines and booster shots on 'Fox News Sunday.'",
  url: "https://video.foxnews.com/v/6277550241001/",
  urlToImage:
    "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/24a41613-2939-4265-abed-168ab88e8665/97b2528a-fc7d-4d8f-bfd4-248c8c43d0d9/1280x720/match/image.jpg",
  publishedAt: "2021-06-17T17:22:20.289559Z",
  content: null,
};
export const DUMMY2: IData = {
  source: {
    id: "cbc-news",
    name: "CBC News",
  },
  tags: ["sport", "israel", "USA"],
  author: "CBC News",
  title:
    "Knife found beneath Parliament to be returned to Algonquin nations in historic move | CBC News",
  description:
    "An ancient knife recovered during renovations on Parliament Hill will be returned to Algonquin nations. It's estimated to be 4,000 years old.",
  url: "http://www.cbc.ca/news/politics/parliament-knife-return-algonquin-nations-1.6214350",
  urlToImage:
    "https://i.cbc.ca/1.6077117.1624470867!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/2021-parliament-centre-block-rehabilitation-construction.JPG",
  publishedAt: "2021-10-17T16:52:24.4379934Z",
  content:
    "An ancient Indigenous knife unearthed during the renovation of Centre Block will be the first artifact found on Parliament Hill to be returned to the stewardship of the Algonquin people who live in t… [+3927 chars]",
};
export const EmptyDUMMY: IData = {
  source: {
    id: "",
    name: "",
  },
  tags: [],
  author: "",
  title: "",
  description: "",
  url: "",
  urlToImage: "",
  publishedAt: "",
  content: null,
};
