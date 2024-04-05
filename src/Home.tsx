import React, { Component } from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
createStyles({
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: 0,
  },
  container: {
    width: '80%',
    margin: '20px auto',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: 20,
    borderRadius: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  content: {
    lineHeight: 1.6,
    color: '#666',
  },
  imageWrapper: {
    textAlign: 'center',
    marginBottom: 20,
  },
  imageStyle: {
    width: '100%',
    maxWidth: 600,
    height: 'auto',
    display: 'block',
    margin: '0 auto',
    borderRadius: 5,
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  imageclassName:{
    backgroundSize:'cover'
  }
})

interface Props extends WithStyles<typeof styles> {}

// type State = {}

class Home extends Component<Props> {
  render() {
    const {classes}=this.props;
    return (
      <div>
        <div className={classes.body}>
      <div className={classes.container}>
        <div className={classes.heading}><h2>ZenQua</h2></div>
        <div className={classes.imageWrapper}>
          <img 
            src="https://media.istockphoto.com/id/1668247346/photo/vector-abstract-particle-line-science-and-technology-poster-background.webp?b=1&s=170667a&w=0&k=20&c=WxIwTRKD9U9_cgS9lQQJFRbHg6HsSqKgVPbpkSJ-P2M=" 
            alt="Description of the Image" 
            className={classes.imageclassName}
          />
        </div>
        <div className={classes.content}>
          <p>The information technology (IT) sector includes companies that produce software, hardware or semiconductor equipment, and companies that provide internet or related services.

          The three major industry groups within the IT sector are software and services, technology hardware and equipment, and semiconductors and semiconductor equipment. These three industry groups are further divided into industries and sub-industries. Companies are aligned to a specific sub-industry that best describes their core or most profitable business.

          In this guide, we’ll cover the various industries and sub-industries that make up the three major industry groups within the IT sector.
         <ul>
          <li>Software and services.</li>
          <li>Technology hardware and equipment</li>
          <li>Semiconductors and semiconductor equipment.</li>
          <li>Information technology sector ETFs and mutual funds.</li>
         </ul>
         <h1>Software and services</h1>
         The software and services industry group is made up of companies that provide internet services, as well as companies that provide software and IT services. Internet services include companies that provide online databases or interactive services, such as search engines or social networks. IT services includes companies that provide IT consulting or data processing services to other companies. Finally, software consists of any sort of software for business or consumer use, ranging from enterprise software and systems software to video games.
         <h1>Technology hardware and equipment</h1>
         Technology hardware and equipment is broken down into three industries: communications equipment; technology hardware, storage and peripherals; and electronic equipment, instruments and components.

         Communications equipment includes routers, telephones and switchboards. Technology hardware, storage and peripherals includes computers, printers and cell phones. Electronic equipment, instruments and components includes companies that make equipment like barcode scanners, transformers and security systems, as well as companies that are distributors or Original Equipment Manufacturers (OEM).
         <h1>Semiconductors and semiconductor equipment</h1>
         Semiconductors are substances that can conduct electricity under some conditions, but not others, making them ideal for controlling electrical currents. Silicon is a material that is often used as a semiconductor. This industry group includes both companies that make semiconductors and companies that make peripheral equipment for semiconductors.
         <h1>Information technology sector ETFs and mutual funds</h1>
         Listed below are more than 200 ETFs, index funds and mutual funds that track the information technology sector or specific industries, such as semiconductors or internet software. The expense fees of the funds below range from 0.10% to 2.80%.
         </p>
        </div>
      </div>
    </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home);