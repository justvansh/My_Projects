import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import NearMeIcon from "@material-ui/icons/NearMe";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "90%",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  });

interface Props extends WithStyles<typeof styles> {}

type State = {};

class Main extends React.Component<Props, State> {
  state = {};

  render() {
    const { classes } = this.props;
    return (
        <Box sx={{display:'flex',flexDirection:'column',alignItems:"center",margin:'0px',padding:"0px"}}>
        <Card sx={{ width: { sm: "100%", md: "90%" }}}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src="data:image/jpeg;base64,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"
              >
                V
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="jon.xyz"
            subheader="March 14, 2024"
          />
          <CardMedia
            className={classes.media}
            image="https://spotonphotographers.com/wp-content/uploads/2022/05/men-model-poses-instagram.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo magnam exercitationem dolore ducimus cumque numquam quibusdam illo in corporis inventore, officia tempora temporibus aliquid tempore aperiam iure culpa, fuga iste?
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <ChatBubbleRoundedIcon />
            </IconButton>
            <IconButton aria-label="share">
              <NearMeIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card sx={{ width: { sm: "100%", md: "90%" }}}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrM67KV5-o2wWHW9o8YaA3a5yWXZ2lc28DFg&s"
              >
                V
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="thatkris"
            subheader="April 4, 2024"
          />
          <CardMedia
            className={classes.media}
            image="https://thesmartlocal.com/korea/wp-content/uploads/2020/09/Photo-Poses-For-Men-3.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minus ipsam repudiandae illum, accusamus nam porro, hic inventore dicta necessitatibus vel nobis labore eveniet maiores eos pariatur? Ducimus, ex voluptas!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <ChatBubbleRoundedIcon />
            </IconButton>
            <IconButton aria-label="share">
              <NearMeIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card sx={{ width: { sm: "100%", md: "90%" }}}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src="data:image/jpeg;base64,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"
              >
                V
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="bigjosh"
            subheader="April 3, 2024"
          />
          <CardMedia
            className={classes.media}
            image="https://i.pinimg.com/1200x/75/a5/bb/75a5bb80b34da22bdb755c614687fbc9.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, amet! Repellat laborum facere numquam, officiis quos quae quis sunt esse non laboriosam odit aspernatur! Veritatis nobis architecto nisi consectetur hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, repudiandae, harum veniam amet recusandae necessitatibus unde delectus officia, cupiditate corrupti fugit ullam architecto! Est, doloribus id. Et at expedita culpa.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <ChatBubbleRoundedIcon />
            </IconButton>
            <IconButton aria-label="share">
              <NearMeIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card sx={{ width: { sm: "100%", md: "90%" }}}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src="https://i.pinimg.com/736x/a8/c0/6a/a8c06ac946f6255ae7faa7c62de3f316.jpg"
              >
                V
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="call_me_ayan"
            subheader="April 1, 2024"
          />
          <CardMedia
            className={classes.media}
            image="https://i.pinimg.com/736x/a8/c0/6a/a8c06ac946f6255ae7faa7c62de3f316.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, amet! Repellat laborum facere numquam, officiis quos quae quis sunt esse non laboriosam odit aspernatur! Veritatis nobis architecto nisi consectetur hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, repudiandae.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <ChatBubbleRoundedIcon />
            </IconButton>
            <IconButton aria-label="share">
              <NearMeIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card sx={{ width: { sm: "100%", md: "90%" }}}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src="https://i.pinimg.com/564x/52/19/01/52190117a80c0ab475eabcd828fa6916.jpg"
              >
                V
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="its_mike"
            subheader="March 29, 2024"
          />
          <CardMedia
            className={classes.media}
            image="https://i.pinimg.com/736x/62/03/c3/6203c31dec0d99666d087c17243fa888.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, amet! Repellat laborum facere numquam, officiis quos quae quis sunt esse non laboriosam odit aspernatur! Veritatis nobis architecto nisi consectetur hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, repudiandae.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <ChatBubbleRoundedIcon />
            </IconButton>
            <IconButton aria-label="share">
              <NearMeIcon />
            </IconButton>
          </CardActions>
        </Card>
        </Box>
    );
  }
}

export default withStyles(styles)(Main);
