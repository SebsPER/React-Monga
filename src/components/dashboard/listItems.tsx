import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem
      button
      exact
      component={NavLink}
      to={"/"}
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Seguimientos</ListSubheader>
    <ListItem
      button
      component={NavLink}
      to={"/customers/list"}
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listar Seguimientos" />
    </ListItem>
    <ListItem
      button
      component={NavLink}
      to={"/customers/add"}
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Agregar Seguimiento" />
    </ListItem>
  </div>
);
