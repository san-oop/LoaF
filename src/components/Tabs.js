// import PropTypes from "prop-types";
import { Tab } from "@headlessui/react";

const TabsPanel = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab className="text-gray-100">Tab 1</Tab>
        <Tab className="text-gray-100">Tab 2</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="text-gray-100">Content 1</Tab.Panel>
        <Tab.Panel className="text-gray-100">Content 2</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

TabsPanel.propTypes = {};

TabsPanel.defaultProps = {};

export default TabsPanel;
