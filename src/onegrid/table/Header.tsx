import * as React from "react";
import "./Header.css";

export interface InterfaceColumnConfig {
  field: string;
  title: string;
}

interface InterfaceHeaderProps {
  config: InterfaceColumnConfig[];
}

const Header = (props: InterfaceHeaderProps) => (
  <thead className="OneGrid-header">
    <tr>{props.config.map(i => <th key={i.field}>{i.title}</th>)}</tr>
  </thead>
);

export default Header;
