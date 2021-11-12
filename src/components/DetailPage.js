import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { useHistory } from "react-router-dom";
const DetailPage = () =>{
    const history = useHistory();

    const onClickLogout = () =>{
        history.push('');
    }
    
return(

    <>
    
        <Grid   margin= '100px' container item xs={12} spacing={2} justifyContent='flex-end'>
            <Button
                style={{margin: '1.5em 8px'}}
                variant='outlined'
                //style={{ margin: '2px' }}
                onClick={onClickLogout} 
                color='primary'
                //startIcon={<DeleteIcon />}
            >
                Log Out
            </Button>
        </Grid>
        
        <Typography variant='h2' align='center'>Welcome To Papich System</Typography>
        <Grid container item xs={12} spacing={2}justifyContent='center'>
        <Grid key={'name'} container item xs={12} sm={12} md={4} lg={4}>
        <TextField
            fullWidth
            id = 'name'
            key = 'name'
            label ={'Name'}
            //placeholder={'Please Input'}
            //value={userId}
            //onChange={event => handleChangeUserId(event)}
            margin='normal'
            InputLabelProps={{
              shrink: true,
              //error:errorUserId
            }}
          />
        </Grid>
        <Grid key={'surname'} container item xs={12} sm={12} md={4} lg={4}>
        <TextField
            fullWidth
            id = 'surname'
            key = 'surname'
            label ={'Surname'}
            //placeholder={'Please Input'}
            //value={userId}
            //onChange={event => handleChangeUserId(event)}
            margin='normal'
            InputLabelProps={{
              shrink: true,
              //error:errorUserId
            }}
          />
        </Grid>
        <Grid key={'user-id'} container item xs={12} sm={12} md={4} lg={4}>
            <TextField
            fullWidth
            id = 'userId'
            key = 'userId'
            label ={'User ID'}
            //placeholder={'Please Input'}
            //value={userId}
            //onChange={event => handleChangeUserId(event)}
            margin='normal'
            InputLabelProps={{
              shrink: true,
              //error:errorUserId
            }}
          />
        </Grid>
    </Grid>

    </>
)
}
export default DetailPage