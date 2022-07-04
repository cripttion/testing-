import React,{useState} from 'react'



function Create_page(){
 
    const [mystyle,setMyStyle] = useState({
        display:'none'
    })
    const [mystyle2,setMyStyle2] = useState({
        display:'none'
    })
    const jumpOnNew =()=>{
        // var page2 = document.getElementById('page2');
        // page2.display = 'block';
        // var page1 = document.getElementById('page1');
        // page1.display = 'none';
        if(mystyle.display ==="none"){
            setMyStyle({
                display:'block'
            })
            var page1 = document.getElementById('page1');
            page1.style.display = 'none';     
        }
        else{
            setMyStyle({
                display:'none'
            })
        }
    }
    const jumpfirst =()=>{
        setMyStyle({
            display:'none'
        })
        var page1 = document.getElementById('page1');
        page1.style.display = 'block';
    }

    const jumpthird =()=>{
        var page1 = document.getElementById('page1');
        var page2 = document.getElementById('page2');
        var page3 = document.getElementById('page3');

        page1.style.display='none';
        page2.style.display = 'none';
        setMyStyle2({
            display:'block'
        })
    }
    
    const jumpsecond =()=>{
        setMyStyle2({
            display:'none'
        })
        var page1 = document.getElementById('page1');
        var page2 = document.getElementById('page2');
        var page3 = document.getElementById('page3');

        page1.style.display='none';
        page2.style.display = 'block';
    }
return(
<>
<div className="cotainer" id="page1">
    
    <div className="row" >

        
       
        
        <div className="col-md-4">
         
            <div className="text1">
            <p className="heading">Create your own Event</p>
            <p className="lowertext">Let your audience know what to expect</p>
        </div>
     

        
    </div>
        
        
         <div className="col-md-6 offset-md-2  form1">
           
            <div className="details">
            <form>
                <label for="Event_hoster">Who is hosting this event ?</label><br/>
                 <input type="text" name="Hoster" id="Hoster" placeholder="e.g. Cavemen"/><br/><br/>

                 <label for="Event catogrization">How would you categorize this event? </label><br/>
                 <input type="text" name="Event_categore" id="Event_categore" placeholder="e.g. Tech event"/>
                    <br/>
                 

            </form>
            <button className="continue_button" id="continue_button" onClick={jumpOnNew}>Continue<span className="material-symbols-outlined">
                chevron_right
                </span></button>
            
         </div>
         
        
        </div>
        
    
     
    </div>








    

</div>






<div className="cotainer2" id="page2" style={mystyle}>
    <div className="row" >

        <div className="col-md-4" id="test1">
            
                <div className="text2">
                    <p className="heading">Event Info</p>
                    <p className="lowertext">Let your auidence know what to expect</p>
                </div>
      
        </div>
    <div className="col-md-6 offset-md-2 form1">
             
         <div className="details2">
            <form>
                <label for="name_of_event">What is the name of your event</label> <br/>
                <input type="text" name="name_of_event" id="Event_Name" placeholder="e.g. cavvy 2.0"/>
                <br/>
                <label for="event_date">When will your event happen ?</label>
                        <div className="row date_time">
                            <div className="col-md-6">
                                <label for="start_date">Start Date</label>
                                <input type="date" name="startdate" id="Start_date"/>

                                <label for="end_date">End Date</label>
                                <input type="date" name="End_date" id="End_date"/>
                            </div>

                            <div className="col-md-6">
                                <label for="start time">Start time</label>
                                 <input type="time" name="start tiem" id="Start_time"/>
                                
                                 <label for="end time">End time</label>
                                 <input type="time" name="End time" id="End_Time"/>
                            </div>
                        </div>
           
                 <label for="location of event">Where will your event happen?</label>
                 <input type="text" name="event_location" id="Event_location" placeholder="e.g. Greater Noida"/>
                
                </form>
                <button className="continue_button" id="continue_button2" onClick={jumpthird}>Continue<span className="material-symbols-outlined">
                    chevron_right
                    </span></button>

                    <button className="previous_button" id="previous_button" onClick={jumpfirst}><span className="material-symbols-outlined">
                        chevron_left
                        </span>Previous</button>
         </div>
    
        
        
    </div>
    
    </div>

</div>







<div className="cotainer3" id="page3" style={mystyle2}>
    <div className="row">

        <div className="col-md-4" id="test1">
           
                <p id="Real_time_date"></p>

                <div className="row">
                    <div className="col-md-12">
                        <button className="btnpage3" id="btnpage3"><span className="button_no">1</span> Event registration</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button className="btnpage3"><span className="button_no active">2</span> Details</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button className="btnpage3"><span className="button_no">3</span> Tickets</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button className="btnpage3"><span className="button_no">4</span> Publish</button>
                    </div>
                </div>
               
   
        </div>
    <div className="col-md-6 offset-md-2 form1">
            
         <div className="details3">
            <form>
                
                <label for="add image">Add Your Main Event Image  <p>This is the first image attendees will see at the top of your listing. Use a high quality image : 2033px by 20393px (2:1)</p></label>
                <input type="file" name="imageselector" id="Image_selector" accept="image/*"/>

                  <label for="add description">Add a Description <p>Add a short summary of your event for your attendees (Max 200 Characters)</p></label>
                  <textarea id="add_description" name="w3review" rows="6"  maxLength="200" placeholder="Describe yourself here..."> </textarea>
               
                </form>
                <button className="continue_button" id="continue_button3">Continue<span className="material-symbols-outlined">
                    chevron_right
                    </span></button>

                    <button className="previous_button" id="previous_button2" onClick={jumpsecond}><span className="material-symbols-outlined">
                        chevron_left
                        </span>Previous</button>
         
                </div>
       
        
        
    </div>
    
    </div>

</div>






</>








);
}
// proptypes use for restriction given in pro
export default Create_page