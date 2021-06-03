import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize="default" />
                </Button>
            </div>
            <Typography className={classes.time} variant="subtitle">{moment(post.createdAt).fromNow()}</Typography>
            <CardContent>
                <div className={classes.details}>
                    <Typography className={classes.title} variant="h5"  gutterBottom>{post.title}</Typography>
                    <Typography  className={classes.message} variant="body2" color="textSecondary" component="p" gutterBottom>{post.message}</Typography>
                    {/* TAGS FUNCTIONALITY */}
                    {/* <Typography className={classes.tags} variant="subtitle" color="textSecondary" >{post.tags.map((tag)=>`#${tag} `)}</Typography> */}
                </div>
            </CardContent>
            {/* <div className={classes.overlay}>
                
                
            </div> */}
            <CardActions className={classes.cardActions }>
            <Typography className={classes.name} variant="subtitle">By {post.creator}</Typography>
                <Button size="small" color="primary" onClick={()=>{dispatch(likePost(post._id))}}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp;{post.likeCount}
                </Button>
                {/* DELETE FUNCTIONALITY */}
                {/* <Button size="small" color="primary" onClick={()=>{dispatch(deletePost(post._id))}}>
                    <DeleteIcon fontSize="small" />
                </Button> */}
            </CardActions>
        </Card>
    );
};

export default Post;