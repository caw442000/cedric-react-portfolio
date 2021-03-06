import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import Icon from "@material-ui/core/Icon";
import Link from "@material-ui/core/Link";
import HttpIcon from "@material-ui/icons/Http";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    // minWidth: 345,
    // height: 425,
    fontFamily: 'Nunito Sans, sans-serif',
    
    // " & .MuiTypography-root": {

    //   fontSize: '1.1rem',

    // },
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    fontFamily: 'Nunito Sans, sans-serif',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProjectCard = ({ data }) => {
  const { projectImg } = data.image;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (


    <Card className={classes.root} >
      <CardHeader
        titleTypographyProps = {{variant: 'h4'}}
        

        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {data.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.title}
        subheader={data.stack}
      />
      <CardMedia
        className={classes.media}
        image={data.image}
        title={data.title}
      />
      <CardContent 
        // style = {{ height: 120 }}
        >
        <Typography variant="body1" color="textSecondary" component="p">
          {data.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites" href={data.github}
                  target="_blank"
                  rel="noreferrer">
          <GitHubIcon style = {{ fontSize: 30}} />
        </IconButton>
        {/* <IconButton aria-label="share" >
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
};

export default ProjectCard;
