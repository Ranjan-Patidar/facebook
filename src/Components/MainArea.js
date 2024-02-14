import React from 'react'
import './MainArea.css'
import { FaSearch,FaRegThumbsUp,FaCommentAlt,FaGrin,FaAngleDown, FaMedrt,FaFacebookMessenger, FaFontAwesomeFlag, FaUserFriends, FaRegShareSquare } from 'react-icons/fa'
import { MdVideoCall,MdMoreHoriz } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
function MainArea(){
    return(
        <div className='Main'>
          <div className='Rside'>
            <div className='Profile'>
              <img src="/profile.jpg" alt="dp" style={{height:"60px",padding:"1rem"}}/>
              Ram Sharma
            </div>
            <div className='Pro'>
             <FaUserFriends color="blue" fontSize="2rem"/>
             <div>Friends</div>
            </div>

            <div className='Pro'>
             <FaFontAwesomeFlag color="green" fontSize="2rem"/>
             <div>Pages</div>
            </div>

            <div className='Pro'>
             <FaMedrt color="blue" fontSize="2rem"/>
             <div>COVID-19 Information Center</div>
            </div>

            <div className='Pro'>
             <FaFacebookMessenger color="green" fontSize="2rem"/>
             <div>Messanger Kids</div>
            </div>

            <div className='Pro'>
             <FaAngleDown color="green" fontSize="2rem"/>
             <div>See more</div>
            </div>
            <br></br>

          
          </div>
          <div className="MainArea">
             <div className='addStory'>
               <div className='Story'>
                 <img src="/car.jpg.jpg" alt="IMG" style={{height:"100%",width:"100%",borderRadius:"60%"}}/>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 Car
               </div>
               <div className='Story'>
                 <img src="/flower.jpg" alt="IMG" style={{height:"100%",width:"100%",borderRadius:"60%"}}/>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 Flowers
               </div>
               <div className='Story'>
                 <img src="/shadow.png" alt="IMG" style={{height:"100%",width:"100%",borderRadius:"60%"}}/>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 Shadow
               </div>
             </div>
              
             <div className='message'>
             <div className='text'>
               <div className='Post'>
                 <img src="/image1.jpg" alt="pic"/>
                 <input type="Mind" placeholder='Write Something here'/>
               </div>
               <div className='Call'>
                <div className='ico'>
                  <div className='icone'>
                   <MdVideoCall fontSize="2.3rem" color="red"/>
                   <div>LiveVideo</div>
                  </div>
                  <div className='icone'>
                   <AiFillFileImage fontSize="2.3rem" color="green"/>
                   <div>Photo/Video</div>
                  </div>
                  <div className='icone'>
                   <FaGrin fontSize="2.3rem" color="orange"/>
                   <div>Felling/Activity</div>
                  </div>
                </div>
               </div>
               
               <div className='FacebookImg'>
               <div className='Profile'>
               <img src="/profile3.jpg" alt="dp" style={{height:"50px",padding:"1rem"}}/>
                <h4>Jay Patel</h4> 
               </div>
                <img src="/image2.jpg" alt="dp" style={{height:"auto",width:"100%"}}/>
                <div className='Comment'>
                 <div className="Like">
                   <FaRegThumbsUp color="grey"/>Like
                 </div>
                 <div className="Like">
                 <FaCommentAlt color="grey"/>Comment
               </div>
               <div className="Like">
               <FaRegShareSquare color="grey"/>Share
             </div>
            </div>
              </div>
              
             </div>
             </div>
          </div>
        </div>
    )
}
export default MainArea