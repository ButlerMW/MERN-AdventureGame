import React from 'react';
import { Link, navigate } from '@reach/router'
import { makeStyles, Drawer, Button, List, Divider, ListItem } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Chat from '../components/Chat'

export default props => {
    const { inventory } = props;

    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    });


    const classes = useStyles();
    const [ state, setState ] = React.useState({
        left: false,
        right: false,
        botton: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open});
    };

    const sideListMenu = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
              <ListItem button onClick={e => navigate("/")}>
                <ListItemText primary="Return to Menu" />
              </ListItem>
          </List>
        </div>
      );

      const sideListItem = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
                <h3><center>Items</center></h3>
                <Divider />
                {inventory.map((item, idx) => {
                    return (
                    <ListItem key={idx}>
                        <ListItemIcon><img className="Icon" src={item.img} /></ListItemIcon>
                        <ListItemText primary={item.ItemName}/>
                    </ListItem>
                      )
                  })}   
          </List>
        </div>
      );

      const chatList = side => (
        <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        {/* <Chat /> */}
      </div>
      )

    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}>Menu</Button>
            <Button onClick={toggleDrawer('right', true)}>Items</Button>
            <Button onClick={toggleDrawer('bottom', true)}>Chat</Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideListMenu('left')}
            </Drawer>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideListItem('right')}
            </Drawer>
            <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                {/* {chatList('bottom')} */}
            </Drawer>
        </div>
    )
}
