import logo from './logo.svg';
import './App.css';
import {AppBar} from '@mui/material';
import {Container} from '@mui/material';
import {Typography} from '@mui/material';
import {Toolbar} from '@mui/material';
import { useState } from 'react';
import AddItem from './AddItem';
import {Stack} from "@mui/material";
import {List} from '@mui/material';
import {ListItem} from '@mui/material';
import {ListItemText} from '@mui/material';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([item, ...items]);
  }

  return (
    <Container>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack alignItems="center">
        <AddItem addItem={addItem} />
        <List>
          {
            items.map((item, index) =>
              <ListItem key={index} divider>
                <ListItemText
                  primary={item.product}
                  secondary={item.amount}/>
              </ListItem>
            )
          }
        </List>
      </Stack>
    </Container>
  );
}

export default App;
