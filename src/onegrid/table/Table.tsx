import * as React from "react";
import Body from "./Body";
import Header, { InterfaceColumnConfig } from "./Header";
import "./Table.css";

interface InterfaceTableProps {
  columns: InterfaceColumnConfig[];
  data: any[];
}

export const Table = (props: InterfaceTableProps) => (
  <table className="OneGrid-table">
    <Header config={props.columns} />
    <Body data={props.data} columnConfig={props.columns} />
  </table>
);
