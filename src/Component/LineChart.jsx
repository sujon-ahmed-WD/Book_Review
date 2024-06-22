import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import { getStore } from "./localStorage/localStorage";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const LineChart = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const ReadStored = getStore();
     console.log(ReadStored);
    const dataMap = ReadStored.map((e) => {
      return {
        name: e.bookName,
        pages: e.totalPages,
        pv: 2400,
        amt: 2400,
      };
    });
    setBooks(dataMap);
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <h2>Bar Chart</h2>
      <BarChart
        className="mx-auto"
        width={1800}
        height={600}
        data={books}
        margin={{
          top: 20,
          right: 60,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="pages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {books?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
        {/* <Tooltip/> */}
      </BarChart>
    </div>
  );
};

export default LineChart;
