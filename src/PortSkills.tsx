import React from 'react';
import './Port.css';
import './PortSkills.css';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import { Tilt } from 'react-tilt';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: 'min(300px,80vw)', // Adjust the width of the card as needed
            height: 'min(450px,120vh)', // Adjust the width of the card as needed
            margin: '40px 3vw 40px', // Add some margin between cards
            backgroundImage:'linear-gradient(90deg, #DAE2F8, #D6A4A4)',
            overflow:'scroll'
        },
        media: {
            height: 150,
        },
        body: {
            display: 'flex',
            flexWrap:'wrap',
            justifyContent: 'center',
        },
    })

interface Props extends WithStyles<typeof styles> {}

interface State {
    defaultOptions:{}
}

class PortSkills extends React.Component<Props, State> {

    constructor(props:Props){
        super(props)
        this.state={
            defaultOptions :{
                reverse:        false,  // reverse the tilt direction
                max:            40,     // max tilt rotation (degrees)
                perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
                scale:          1.08,    // 2 = 200%, 1.5 = 150%, etc..
                speed:          100,   // Speed of the enter/exit transition
                transition:     true,   // Set a transition on enter/exit.
                axis:           null,   // What axis should be disabled. Can be X or Y.
                reset:          true,    // If the tilt effect has to be reset on exit.
                easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
            }
        }
    }

    render() {
        const { classes } = this.props;
        const { defaultOptions } = this.state;
        return (
            <div className={classes.body}  id='bdy' >
                
            <Zoom in={true} >
                {/* HTML Card */}
              <Tilt options={defaultOptions} style={{transition:'ease-in-out'}} >
                <Card className={classes.root}>
                    
                        <CardMedia
                            className={classes.media}
                            image="data:image/jpeg;base64,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"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                HTML
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <h4>HyperText Markup Language</h4>
                                HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. 
                            </Typography>
                        </CardContent>
                    
                </Card>
              </Tilt>
            </Zoom>

            <Zoom in={true} style={{ transitionDelay: '200ms' }}>
            {/* CSS Card */}
            <Tilt options={defaultOptions} style={{transition:'ease-in-out'}}>
                <Card className={classes.root}>
                    
                        <CardMedia
                            className={classes.media}
                            image="data:image/jpeg;base64,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"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                CSS
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <h4>Cascading Style Sheets</h4>
                                CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.
                            </Typography>
                        </CardContent>
                    
                </Card>
            </Tilt>
            </Zoom>

            <Zoom in={true} style={{ transitionDelay: '400ms' }}>
                {/* React Card */}
            <Tilt options={defaultOptions} style={{transition:'ease-in-out'}}>
                <Card className={classes.root}>
                    
                        <CardMedia
                            className={classes.media}
                            image="data:image/png;base64,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"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                React Js
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <h4>Create user interfaces from components</h4>
                                React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
                            </Typography>
                        </CardContent>
                    
                </Card>
            </Tilt>
            </Zoom>

            <Zoom in={true} style={{ transitionDelay: '600ms' }}>
            {/* JS Card */}
            <Tilt options={defaultOptions} style={{transition:'ease-in-out'}}>
                <Card className={classes.root}>
                    
                        <CardMedia
                            className={classes.media}
                            image="data:image/png;base64,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"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                JS
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <h4>JavaScript (JS)</h4>
                                JS, or JavaScript, is a high-level, interpreted programming language that is widely used to make web pages interactive and dynamic. It is an essential part of web development and is supported by all modern web browsers without the need for additional plugins.
                            </Typography>
                        </CardContent>
                    
                </Card>
            </Tilt>    
            </Zoom>

            <Zoom in={true} style={{ transitionDelay: '800ms' }}>
             {/* NODE JS */}
           <Tilt options={defaultOptions} style={{transition:'ease-in-out'}}>
             <Card className={classes.root}>
                    
                        <CardMedia
                            className={classes.media}
                            image="data:image/png;base64,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1/YqwmrmycK7cT+288GYMr3fHMyzVIj/1928YYGBM8bTr2c30dUIMjCbXR2JKc7tlQhVtDDP+MsROcPw3xeglMHzIcMQHZX74ewwW4R8iK3+eVBaxCpIucUAkdPFtgYIeAaLa//pikZnpkTl+bE+AqukK1dlELYqs2Zyct0YxrlRpA3XyvJ+9vVEjGyj2omiBJfpyDbE9pPirQF/C2u/K8NX/odRmrrtLGKZSuvsjhlS0WwTrGbctURbx+q+qRXlT2KfiS7tirClylA368VfA4Ns7yuUjMGvZXD3chaotmbzxx8BBmRH0ZeJItbvR8zzindUidnz80TONkasf2Nlw8RepXPsxIQX5pdQJfK02hLvEVE22uz7amhrgTvitj1KLyfgF6Le44X7C7J9Ve6bV01InLwHbk7sprn/wR1luzwK9+Vk32hNzz9PzlI4J1xxC/bJPB6hDYc6dnpra4IszWKY5+hig8ODp+O6nu15e+irmBTSUDFTNf5v/A9BEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEOTP8V/Aki89PhevHAAAAABJRU5ErkJggg=="
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                NODE JS
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <h4>Node.js is an open source server environment</h4>
                                What is NodeJS and why it is used?
                                Node. js provides a runtime environment outside of the browser. It's also built on the Chrome V8 JavaScript engine. This makes it possible to build back-end applications using the same JavaScript programming language you may be familiar with.
                            </Typography>
                        </CardContent>
                    
            </Card>
           </Tilt>
            </Zoom>

            <Zoom in={true} style={{ transitionDelay: '1000ms' }}>
            {/* EXPRESS JS */}
            <Tilt options={defaultOptions} style={{transition:'ease-in-out'}}>
            <Card className={classes.root}>
                    
                        <CardMedia
                            className={classes.media}
                            image="data:image/png;base64,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"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                EXPRESS JS
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <h4>Express is a node js web application framework</h4>
                                What Is Express JS? Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.
                            </Typography>
                        </CardContent>
                    
            </Card>
            </Tilt>
            </Zoom>
            </div>
        )
    }
}

export default withStyles(styles)(PortSkills)
