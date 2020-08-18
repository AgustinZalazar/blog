import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  
}))(TableRow);

function createData(user_name, email, type, created_at) {
  return { user_name, email, type, created_at };
}

const rows = [
  createData("Agustin", "agustin@gmail.com", "admin", "18/08/2020"),
  createData("Juan", "juan@gmail.com", "editor", "18/08/2020"),
  createData("Lucas", "lucas@gmail.com", "viewer", "18/08/2020"),
  createData("Pablo", "pablo@gmail.com", "viewer", "18/08/2020"),
  createData("Sofia", "sofia@gmail.com", "admin", "18/08/2020"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  icons: {
    marginRight:'20px',
  },  
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Users</StyledTableCell>
            <StyledTableCell>E-mail</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Created at</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.user_name}
              </StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.type}</StyledTableCell>
              <StyledTableCell>{row.created_at}</StyledTableCell>
              <StyledTableCell>
                <IconButton
                  color="inherit"
                  aria-label="delete user"
                  edge="start"
                  className= { classes.icons}
                >
                  <DeleteOutlineIcon/>
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="delete user"
                  edge="start"
                >
                  <EditIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
