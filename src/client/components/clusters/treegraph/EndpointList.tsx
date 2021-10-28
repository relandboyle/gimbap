import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import Typography from '@mui/material/Typography';

// Add the list bar

export default function EndpointList(props) {
  const { endpoints } = props;
  const { methodName, clusterName, endpointList } = endpoints;
  // endpoints = endpoints.sort;

  function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText disableTypography primary={<Typography color="textPrimary"> {endpointList.length === 0 ? 'No endpoints to show...' : endpointList[index]?.name}</Typography>}/>
        </ListItemButton>
      </ListItem>
    );
  }

    return (
      <Box
        sx={{ width: 'document.documentElement.clientWidth * 0.2', height: '100%', maxWidth: 'document.documentElement.clientWidth * 0.2', bgcolor: 'background.paper', textAlign: 'center' , border: 1, borderColor: 'black', borderRadius: 5}}
      >
        <Typography variant='h4' mr={3}>{endpointList.length ? `${clusterName} - ${methodName} - ${endpointList.length} ` : null}</Typography>
        <FixedSizeList
          height={(window.innerHeight * .85)}
          width={(window.innerWidth * .25)}
          itemSize={46}
          itemCount={endpointList.length ? endpointList.length: 1}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    );
}

