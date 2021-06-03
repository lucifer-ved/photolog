import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '150px',
    objectFit:'contain',
    paddingTop: '56.25%',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    '&:hover':{
      cursor:'pointer',
      boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
    }
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'left',
    padding: '10px',
    marginTop:'-15px'
  },
  title: {
    // padding: '0 16px',
  },
  tags:{
    maxWidth:'80%',
    padding:'10px'
  },
  time:{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'left',
    marginLeft:'28px',
    marginTop:'20px'
  },
  message:{
    maxHeight:'100px',
    overflow:'hidden',
    textOverflow: 'ellipsis'
  },
  cardActions: {
    marginLeft:'18px',
    marginRight:'18px',
    marginTop:'-20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});