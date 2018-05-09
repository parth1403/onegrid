import * as React from "react";
import "./Body.css";
import { InterfaceColumnConfig } from "./Header";

interface InterfaceBodyProps {
  data: any[];
  columnConfig: InterfaceColumnConfig[];
}

const Body = (props: InterfaceBodyProps) => (
  <tbody className="OneGrid-body">
    {props.data.map(i => {
      return (
        <tr key={i.id}>
          {props.columnConfig.map(c => <td key={c.field}>{i[c.field]}</td>)}
        </tr>
      );
    })}
  </tbody>
);

export default Body;
