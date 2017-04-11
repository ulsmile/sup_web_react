import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
//import EditorShowChart from 'material-ui/svg-icons/editor/show_chart';
//import ImageTimer from 'material-ui/svg-icons/image/timer';
//import ActionAccountCircle from 'material-ui/svg-icons/action/account_circle';
//import EditorFormatListNumbered from 'material-ui/svg-icons/editor/format_list_numbered';
import {ImageTimer,ActionAccountCircle,EditorShowChart,EditorFormatListNumbered} from 'material-ui/svg-icons';


const ListExampleSimple = () => (
  <MobileTearSheet>
    <List>
      <ListItem primaryText="Chart" leftIcon={<EditorShowChart />} />
      <ListItem primaryText="RecordTime" leftIcon={<ImageTimer />} />
      <ListItem primaryText="Mypage" leftIcon={<ActionAccountCircle />} />
      <ListItem primaryText="Ranking" leftIcon={<EditorFormatListNumbered />} />
    </List>
  </MobileTearSheet>
);

export default ListExampleSimple;
      //<ListItem primaryText="Chart" leftIcon={<EsitorShowChart />} />
      //<ListItem primaryText="Mypage" leftIcon={<ActionAccountCircle />} />
      //<ListItem primaryText="Ranking" leftIcon={<EditorFormatListNumbered />} />
