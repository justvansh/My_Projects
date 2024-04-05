import React, { Component } from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import "./PortProject.css";
import Typewriter from "typewriter-effect";

type Props = {}

type State = {}

export default class PortProject extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div style={{ width:'100%' , backgroundColor: 'black', color: 'white', display:'flex', flexDirection:'column' }}>
        {/* Project 1  */}
        <div id='c1'>
          <div className='Opcty'>
            <div id='Content' style={{display:'flex' ,flexDirection:'column',flexWrap:'wrap',textAlign:'right',paddingRight:'30px',paddingLeft:'30px'}}>
                <div className='H1'>NETFLIX</div>
                <div className='H102'>
                <Typewriter
                options={{
                    strings:[
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit maiores veritatis necessitatibus praesentium modi ea cum fugiat deleniti reprehenderit, officiis doloremque alias quas error iste laboriosam magnam deserunt voluptas atque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, libero debitis delectus excepturi dolorum, necessitatibus ducimus consequatur laboriosam, molestiae mollitia hic voluptate! Ipsam architecto laudantium quia voluptatibus placeat laboriosam minus.'
                    ],
                    autoStart: true,
                    loop: true,
                }}
                />
                </div>
            </div>
          </div>
        </div>

        {/* Project 2  */}
        <div id='c2'>
          <div className='Opcty2'>
            <div id='Content' style={{display:'flex' ,flexDirection:'column',flexWrap:'wrap', textAlign:'left',paddingLeft:'30px',paddingRight:'30px'}}>
                <div className='H2'>QR Code</div>
                <div className='H102'>
                <Typewriter
               options={{
                    strings:[
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit maiores veritatis necessitatibus praesentium modi ea cum fugiat deleniti reprehenderit, officiis doloremque alias quas error iste laboriosam magnam deserunt voluptas atque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, libero debitis delectus excepturi dolorum, necessitatibus ducimus consequatur laboriosam, molestiae mollitia hic voluptate! Ipsam architecto laudantium quia voluptatibus placeat laboriosam minus.'
                    ],
                    autoStart: true,
                    loop: true,
                }}
                />
                </div>
            </div>
          </div>
        </div>

        {/* Project 3  */}
        <div id='c3'>
          <div className='Opcty3'>
            <div id='Content' style={{display:'flex' ,flexDirection:'column',flexWrap:'wrap', textAlign:'right',paddingRight:'30px', paddingLeft:'30px'}}>
                <div className='H3'>IT Service</div>
                <div className='H102'>
                <Typewriter
                options={{
                    strings:[
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit maiores veritatis necessitatibus praesentium modi ea cum fugiat deleniti reprehenderit, officiis doloremque alias quas error iste laboriosam magnam deserunt voluptas atque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, libero debitis delectus excepturi dolorum, necessitatibus ducimus consequatur laboriosam, molestiae mollitia hic voluptate! Ipsam architecto laudantium quia voluptatibus placeat laboriosam minus.'
                    ],
                    autoStart: true,
                    loop: true,
                }}
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}