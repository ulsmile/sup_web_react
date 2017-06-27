import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import {ImageTimer,ActionAccountCircle,EditorShowChart,EditorFormatListNumbered} from 'material-ui/svg-icons';
//import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Mypage from '../../Mypage'
import Chart from '../../Chart'
import RecordTime from '../../RecordTime'
import Ranking from '../../Ranking'

const LinkList = () => (
  <MobileTearSheet>
    <div>
      <List>
        <ListItem primaryText="Chart" leftIcon={<EditorShowChart />} containerElement={<Link to='/chart'/>} />
        <ListItem primaryText="RecordTime" leftIcon={<ImageTimer />} containerElement={<Link to='/record_time' />} />
        <ListItem primaryText="Mypage" leftIcon={<ActionAccountCircle />} containerElement={<Link to='/mypage' />} />
        <ListItem primaryText="Ranking" leftIcon={<EditorFormatListNumbered />} containerElement={<Link to='/ranking' />} />
      </List>
    </div>
  </MobileTearSheet>
);

export default LinkList;
