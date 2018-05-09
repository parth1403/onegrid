import * as React from "react";
import { columns, data } from "./data";
import "./Grid.css";
import { Table } from "./onegrid/OneGrid";

const Grid = () => (
  <div className="grid-container">
    <Table columns={columns} data={data} />
  </div>
);

export default Grid;
