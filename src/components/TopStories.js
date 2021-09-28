import * as React from "react";
import { useSelector } from "react-redux";
import { useRequest } from "redux-query-react";

import Item from "./Item";
import * as storyQueryConfigs from "../query-configs/stories";
import * as storySelectors from "../selectors/stories";

const TopStories = props => {
  useRequest(storyQueryConfigs.topStoriesRequest());
  const topStoryIds = useSelector(storySelectors.getTopStoryIds);

  return (
    <>
      {topStoryIds.slice(0, 10).map(itemId => (
        <li>
        <Item itemId={itemId} key={itemId} />
        </li>
      ))}
    </>
  );
};

export default TopStories;
