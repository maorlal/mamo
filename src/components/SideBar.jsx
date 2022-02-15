import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Menu as MenuIcon } from "@material-ui/icons";
import styled from "styled-components";

const MenuItemsList = [
  {text: 'שעונים', ref: '/ref'},
  {text: 'יום יום', ref: '/ref'},
  {text: 'אביזרי עישון', ref: '/ref'},
  {text: 'משחקים', ref: '/ref'},
  {text: 'מטריות', ref: '/ref'},
  {text: 'אלקטרוניה', ref: '/ref'},
  // ['שעונים','/ref'],
  // ['סוללות','/ref'],
  // ['יום יום','/ref'],
  // ['אביזרי עישון','/ref'],
  // ['משחקים','/ref'],
  // ['מטריות','/ref'],
  // ['אלקטרוניה','/ref']
];

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Ul = styled(List)`
    
    
  `;


const Li = styled(ListItem)`

`;

const LIT = styled(ListItemText)`
display: flex;
justify-content: right;
align-items: right;

    
`;

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300  , direction: 'rtl'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Ul>
        {MenuItemsList.map((item, index) => (
          <div>
          <Li button key={item.text}>
            <LIT primary={item.text} />
            {/* <ListItemIcon>
            
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon> */}
          </Li>
          <Divider/>
          </div>
        ))}
      </Ul>
      {/* <List>
        {MenuItemsList.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}> 
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{color: 'black'}}/></Button>
          <Drawer
            anchor={'right'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            >
            {list(anchor)}
          </Drawer>
            
        </React.Fragment>
        ))} 
    </div>
  );
}