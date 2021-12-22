import {useLocation} from 'react-router-dom'
import './feedback.css'
import { ButtonGroup,ButtonToolbar,Button } from 'react-bootstrap';
const Feedback=()=>{
    const location=useLocation();
    const {state}=location;
    state.shift();
    const groups = state.reduce(function(result, value, index, array) {
        if (index % 2 === 0)
          result.push(array.slice(index, index + 2));
        return result;
      }, []);

    const feedbackMessages= groups.map((item)=>{
        if(item[1].message){
            return(
                <div> 
                <div className="__user">
                    <div className="__label">User : </div>
                    <div>{item[0].message}</div>
                </div> 
                <div className="__bot">
                    <div className="__label">Bot :</div>
                    <div>{item[1].message}</div> 
                </div>
                
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button> 
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button> 
                    <Button>6</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button> 
                    <Button>10</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                </div>
            )
        }
        
    })
    return(
        <div>
        <h2>Mark the sentence accuracy for Feedback</h2>
        {feedbackMessages}
        </div>
    )
}
export default Feedback;