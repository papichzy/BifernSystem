import logo from './logo.svg';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import DetailPage from './components/DetailPage';
import { useHistory } from "react-router-dom";
import React, { useEffect} from 'react';

function App() {
  const history = useHistory();
  const [userId,setUserId] = useState('');
  const [inputPass,setInputPass] = useState('');
  const [createName,setCreateName] = useState('');
  const [createSurname,setCreateSurname] = useState('');
  const [createUserId,setCreateUserId] = useState('');
  const [createPass,setCreatePass] = useState('');
  const [errorUserId,setErrorUserId] = useState(false);
  const [errorPassword,setErrorPassword] = useState(false);
  const [errorCreateName,setErrorCreateName] = useState(false);
  const [errorCreateUserId,setErrorCreateUserId] = useState(false);
  const [errorCreatePass,setErrorCreatePass] = useState(false);
  const[errorCreateSurname,setErrorCreateSurname] = useState(false);
  const [openCreateAccountDialog,setOpenCreateAccountDialog] = useState(false);
  const [isForceFetch, setIsForceFetch] = useState(false);

  // const fetchData = () => {
    
  //   fetch('http://localhost:5000/')
  //     .then((response) =>
  //     console.log(response)
  //      //response.json()
  //      )
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleChangeUserId = (event) =>{
    if(event.target.value !== ''){
      setErrorUserId(false);
    }
    else{
      setErrorUserId(true);
    }
    setUserId(event.target.value);
  }

  const handleChangePassword = (event) => {
    if(event.target.value !== ''){
      setErrorPassword(false);
    }
    else{
      setErrorPassword(true);
    }
    setInputPass(event.target.value);
  }

  const handleChangeNameAccount = (event) => {
    if(event.target.value !== ''){
      setErrorCreateName(false);
    }
    else{
      setErrorCreateName(true);
    }
    setCreateName(event.target.value);
  }

  const handleChangeSurnameAccount = (event) => {
    if(event.target.value !== ''){
      setErrorCreateSurname(false);
    }
    else{
      setErrorCreateSurname(true);
    }
    setCreateSurname(event.target.value);
  }

  const handleChangeIdAccount = (event) => {
    if(event.target.value !== ''){
      setErrorCreateUserId(false);
    }
    else{
      setErrorCreateUserId(true);
    }
    setCreateUserId(event.target.value);
  }

  const handleChangePassAccount = (event) => {
    if(event.target.value !== ''){
      setErrorCreatePass(false);
    }
    else{
      setErrorCreatePass(true);
    }
    setCreatePass(event.target.value);
  }

  const closeCreateAccountDialog = () => {
    setOpenCreateAccountDialog(false);
  }

  const handleClickCancelSignUp =() => {
    closeCreateAccountDialog();
  }
  
  const handleClickSignUp = () =>{

    setOpenCreateAccountDialog(true);
  }

  const handleClickLogIn = () =>{
  
    history.push('login');
  }

  const handleClickCreateUserButton = () => {
    const data = {
        "user_id": 9,
        "user_password": 885588,
        "name": "pppp09",
        "surname": "sssk"
    };
  console.log('**data**')
  console.log(data);

  fetch('http://localhost:5000/api/v1/users', {
    //mode: 'no-cors',
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  // fetch('http://localhost:5000', {
  //   mode: 'no-cors',
  //   method: 'GET', // or 'PUT'
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  .then(response => {
    console.log("=================")
    console.log(response)
    return response.json() // แปลงข้อมูลที่ได้เป็น json
  })
  .then(function (data) {
    console.log(data); // แสดงข้อมูล JSON จาก then ข้างบน
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  setIsForceFetch(true);
}

  const styles = {
    button1: {
      position: 'absolute',
      left: '45%',
      transform: 'translateX(-50%)',
    },
    button2: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-10%)',
    },
    bigAvatar: {
      margin: 15,
      width: 60,
      height: 60,
      color: '#fff',
      backgroundColor: '#ffc220'
    },
  }

  return (
    <div id='card'>

       <Grid  container justify="center" alignItems="center">
      <Avatar style={styles.bigAvatar} >PP</Avatar>
      </Grid>
        <CardContent>
        <Typography variant='h4' align = 'center' >Papich System</Typography>
        <Grid key={'name'} container item xs={12} sm={12} md={12} lg={12}>
          <TextField
            fullWidth
            id = 'name'
            key = 'name'
            label ={'User ID'}
            placeholder={'Please Input'}
            value={userId}
            onChange={event => handleChangeUserId(event)}
            margin='normal'
            InputLabelProps={{
              shrink: true,
              //error:errorUserId
            }}
            error={errorUserId}
          />
          </Grid>
          <TextField
            fullWidth
            id = 'password'
            key = 'password'
            label ={'Password'}
            placeholder={'Please Input'}
            value={inputPass}
            onChange={event => handleChangePassword(event)}
            type='password'
            autoComplete='current-password'
            margin='normal'
            InputLabelProps={{
              shrink: true,
              //error:errorUserId
            }}
            error={errorPassword}
          />
          
        </CardContent>
        <CardActions>
          <div style={styles.button1}>
            <Button
           
              variant='outlined'
              //className={classes.button}
              onClick={handleClickLogIn}
              //href={'#'}
              //disable={publicKeyCheck === null ? 1:0}
            >
              Login
            </Button>
            </div>
            <div style={styles.button2}>
            <Button
     
              variant='outlined'
              //className={classes.button}
              onClick={handleClickSignUp}
              //href={'#'}
            >
             Sign Up
            </Button>
            </div>
          </CardActions>

          <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={openCreateAccountDialog}
        onClose={closeCreateAccountDialog}
        >
        <DialogTitle id='form-dialog-title'>Create Account</DialogTitle>
        <DialogContent key={'create-account-dialog'}>
        <TextField
            fullWidth
            id = 'name'
            key = 'name'
            label ={'Name'}
            placeholder={'Please Input'}
            value={createName}
            onChange={event => handleChangeNameAccount(event)}
            margin='normal'
            InputLabelProps={{
              shrink: true,
              //error:errorUserId
            }}
            error={errorCreateName}
          />
             <TextField
            fullWidth
            id = 'surname'
            key = 'surname'
            label ={'Surname'}
            placeholder={'Please Input'}
            value={createSurname}
            onChange={event => handleChangeSurnameAccount(event)}
            margin='normal'
            InputLabelProps={{
              shrink: true,
              //error:errorUserId
            }}
            error={errorCreateSurname}
          />
        <TextField
            fullWidth
            id = 'user-name'
            key = 'user-name'
            label ={'User ID'}
            placeholder={'Please Input'}
            value={createUserId}
            onChange={event => handleChangeIdAccount(event)}
            margin='normal'
            InputLabelProps={{
              shrink: true,
              //error:errorUserId
            }}
            error={errorCreateUserId}
          />
        
          <TextField
            fullWidth
            id = 'password'
            key = 'password'
            label ={'Password'}
            placeholder={'Please Input'}
            value={createPass}
            onChange={event => handleChangePassAccount(event)}
            type='password'
            autoComplete='current-password'
            margin='normal'
            InputLabelProps={{
              shrink: true,
              //error:errorUserId
            }}
            error={errorCreatePass}
          />
        </DialogContent>
        <DialogActions>
            <Button
           
              variant='outlined'
              //className={classes.button}
              onClick={handleClickCreateUserButton}
              //href={'#'}
              //disable={publicKeyCheck === null ? 1:0}
            >
             Sign Up
            </Button>
          
            <Button
     
              variant='outlined'
              //className={classes.button}
              onClick={handleClickCancelSignUp}
              //href={'#'}
            >
             Cancel
            </Button>
        </DialogActions>

      </Dialog>
    
    </div>
  );
}

export default App;
