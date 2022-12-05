import * as React from 'react';
import {Box, createTheme} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AnchorTwoTone } from '@mui/icons-material';

export default function TemporaryDrawer({navbar}) {
    
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor, items = []) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {items?.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
      {navbar.map((anchor) => (
        <React.Fragment key={anchor.name}>
          <Box onClick={toggleDrawer(anchor.side, true)}>{anchor.component}</Box>
          <Drawer
            anchor={anchor.side}
            open={state[anchor.side]}
            onClose={toggleDrawer(anchor.side, false)}
          >
            {list(anchor.side, anchor.items || [])}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

/* 
<div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor.name, true)}>{anchor.component}</Button>
          <Drawer
            anchor={anchor.name}
            open={state[anchor.name]}
            onClose={toggleDrawer(anchor.name, false)}
          >
            {list(anchor.name)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
*/