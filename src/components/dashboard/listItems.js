import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ReportIcon from '@mui/icons-material/Report';
import List from '@mui/material/List';
import { useNavigate } from 'react-router-dom';
import UserManagement from '../usermanagement/UserManagement';
import GeneralView from '../generalview/GeneralView';
import Reports from '../reports/Reports';
import Alarms from '../alarms/Alarms';

export default function MainListItems({sectionDetail, setSectionDetail}) {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const itemDetails = [
    { pageHeader: "Genel Bakış", pageContent: <GeneralView /> },
    { pageHeader: "Kullanıcı Yönetimi", pageContent: <UserManagement /> },
    { pageHeader: "Raporlar", pageContent: <Reports /> },
    { pageHeader: "Alarmlar", pageContent: <Alarms /> }

  ];

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setSectionDetail(itemDetails[index]);
  };

  return (
    <React.Fragment>
      <List component="nav">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Genel Bakış" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Kullanıcı Yönetimi" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Raporlar" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Alarmlar" />
        </ListItemButton>
      </List>

    </React.Fragment>
  );

}


{/*
  export const mainListItems = (
  <React.Fragment>
    <ListItemButton
      selected={selectedIndex === 0}
      onClick={() => handleListItemClick(event, 0)}
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Genel Bakış" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Kullanıcı Yönetimi" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Raporlar" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Alarmlar" />
    </ListItemButton>
  </React.Fragment>
);
  
  */}



{/*
  
export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);


  */}

