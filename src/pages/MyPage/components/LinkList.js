import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import {ImageTimer,ActionAccountCircle,EditorShowChart,EditorFormatListNumbered} from 'material-ui/svg-icons';


const LinkList = () => (
  <MobileTearSheet>
    <List>
      <ListItem primaryText="Chart" leftIcon={<EditorShowChart />} />
      <ListItem primaryText="RecordTime" leftIcon={<ImageTimer />} />
      <ListItem primaryText="Mypage" leftIcon={<ActionAccountCircle />} />
      <ListItem primaryText="Ranking" leftIcon={<EditorFormatListNumbered />} />
    </List>
  </MobileTearSheet>
);

export default LinkList;
