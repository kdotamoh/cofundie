import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const Tab = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 2rem;
`;

const TabPanel = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Tabs = ({ items, currentTab, onChange }) => {
  const [previousTab, setPreviousTab] = useState(currentTab);

  const transition = useTransition(items[currentTab], item => item.key, {
    unique: true,
    from: tab => {
      return {
        transform: `translate3d(${(currentTab - previousTab) * 100}%,0,0)`,
        position: "static"
      };
    },
    enter: {
      transform: "translate3d(0%,0,0)",
      position: "static"
    },
    leave: tab => ({
      transform: `translate3d(${(previousTab - currentTab) * 100}%,0,0)`,
      zIndex: 1,
      position: "absolute",
      boxShadow: "0px 0px 5px #000"
    })
  });
  if (currentTab !== previousTab) setPreviousTab(currentTab);

  return (
    <>
      <div>
        {items.map((item, tabIndex) => (
          <Tab
            key={tabIndex}
            onClick={() => onChange(tabIndex)}
            selected={tabIndex === currentTab}
          >
            {item.label}
          </Tab>
        ))}
      </div>
      <TabPanel>
        {transition.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{
              ...props
              // width: "100%",
              // height: "200px"
              // background: "linear-gradient(to right, red , yellow)"
            }}
            onClick={() => onChange(currentTab)}
          >
            {item.component}
          </animated.div>
        ))}
      </TabPanel>
    </>
  );
};

Tabs.propTypes = {};

export default Tabs;
