import './Body.css'
import {useState,useEffect,useRef} from 'react';
import {Button ,InputGroup,FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios';
const Body=()=>{
    const count =0;
    const [value,setValue]=useState('');
    const [messages,setMessages]=useState([
        {message:"hello user how are you?",user:"bot"}
    ]);
    const messagesEndRef = useRef(null)
    useEffect(()=>{
        if(!messagesEndRef.current) return
         messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
      },[messages])


    const clickHandler=()=>{
        
        if(value!=""){
            setMessages((prev)=>{
                return [...prev,{message:value,user:"user"},{message:". . .",user:"bot"}];
            })
            const data={
                "data":value
            }
            var reply=""
            axios.post("/pred",data)
            .then(res=>{
             setMessages((prev)=>{
                 return (
                     prev.filter(item=>{
                         return item.message!=". . ."
                     })
                 )
             })
             reply= res.data.join(" ");
             console.log(reply);
             setMessages((prev)=>{
                 return [...prev,{message:reply,user:"bot"}];
             })
            })
            .catch(err=>{
                console.log(err);
            })
            setValue("")
        }
       
    }
    const allMessages= messages.map((item)=>{
       
            return(
                <div className={item.user=="bot"?"bot":"user"}>
                {item.message}
            </div>
            )
    })
    return (
        <div>
            <div className="head">
                <div className="_message">
                   {allMessages}
                   <div ref={messagesEndRef} />
                </div>

                <div className="_input">
                    <InputGroup className=" inputField">
                    <FormControl
                    className="textFiled"
                    placeholder="Enter Message Here"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    />
                    <Button type="submit" onClick={clickHandler} className="sendField" variant="outline-secondary" id="button-addon2">
                    Send
                    </Button>
                    </InputGroup>
                </div>
            </div>
                <div><Link to='/feedback' state={messages}>
                <Button>Click to Submit Feedback</Button>
                </Link>
                </div>
 
        </div>
    )
}
export default Body