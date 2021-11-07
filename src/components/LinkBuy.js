import React from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import styled from 'styled-components'


const LinkBuy = ({book}) => {

    const {buy_links} = book


  return (
    <div>
    {buy_links.slice(0,3).map((link) => {

        const {name,url} = link
    
        return(
            

            <LinkItem >

                <List component="nav" aria-label="cicle">
                    <ListItem button>
                    <ListItemIcon>
                        <AddShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary={name} onClick={() => window.open(url)} />
                    </ListItem>
                </List>
            <Divider />
            </LinkItem>
            

        )
    })}
    </div>
  );

  
};

const LinkItem = styled.div`
    display: flex;
    flex-direction: column;
    
    
`

export default LinkBuy;