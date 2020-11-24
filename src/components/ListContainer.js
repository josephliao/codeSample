import { List, Paper, Grid } from "@material-ui/core";
import React,{memo} from "react";
import './ListContainer.scss';
import TDListItem from "./TDListItem";

const ListContainer = memo(props =>(
  <>
  {props.items.length > 0 && (
  <Paper style={{margin:16}}>
     <List style={{overflow: "scroll"}}>
       {props.items.map((td, index) =>(
        <TDListItem 
        {...td}
        key={`TodoItem.${index}`}
        divider ={index !== props.items.length - 1}
        onButtonClick={()=> props.onItemRemove(index)}
        onCheckBoxToggle = {()=> props.onItemCheck(index)}
        />
       ))}
      
     </List>
  </Paper>
  )}
  </>
));

export default ListContainer;