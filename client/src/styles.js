import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#333',
    margin:'5%'
  },
  image: {
    marginLeft: '15px',
  },
  fab: {
    position: 'fixed',
    margin: 0,
    top: 'auto',
    left: 'auto',
    bottom: '20px',
    right: '700px',
    '&:hover':{
      boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
    }
  },
   fabIcon:{
    width:'130px',
    height:'130px',
    position: 'absolute'
   }

}));