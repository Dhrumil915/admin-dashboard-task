import React, { useState, createContext } from "react";

import PaneItem from "./PaneItem/PaneItem";

import "./SideContent.css";

export const SelectedTab = createContext();

function SideContent(props) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(2);

  function PaneHeader(props) {
    const headingContainerStyle = {
      padding: "1.75rem 1rem",
      color: "#aaa",
      fontWeight: "350",
    };

    return (
      <div className="pane-header">
        <h2 style={headingContainerStyle}>{props.heading}</h2>
      </div>
    );
  }



  return (
    <div className="side-content-body">
    <SelectedTab.Provider value={selectedTabIndex}>
      <PaneHeader heading={props.heading} />
      <PaneItem text="Basic" id={0} onClick={()=>setSelectedTabIndex(0)}/>
      <PaneItem text="Branding" id={1} onClick={()=>setSelectedTabIndex(1)}/>
      <PaneItem text="Agenda" id={2} onClick={()=>setSelectedTabIndex(2)}/>
      <PaneItem text="Virual/Hybride Center" id={3} onClick={()=>setSelectedTabIndex(3)}/>
      <PaneItem text="Speaker Center" id={4} onClick={()=>setSelectedTabIndex(4)}/>
      {/* <PaneItem text="Sponser Center" id={5} disabled onClick={()=>setSelectedTabIndex(5)}/> */}
      <PaneItem text="Sponser Center" id={6} onClick={()=>setSelectedTabIndex(6)}/>
      </SelectedTab.Provider>
    </div>
  );
}

export default SideContent;
