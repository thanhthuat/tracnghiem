import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {CreateAction} from '../../Redux/Action/CreateAction';
import {TypesAction} from '../../Redux/Types/Types';
import ChosseQuesstion from '../Quesstion/ChosseQuesstion';
import FillQuesstion from '../Quesstion/FillQuesstion';

class Home extends Component {
    
    showResult =()=>{
       
        let diem=0
        for(let i of  this.props.Result1){
           if (i.exact ==true){
               diem++
           }
        }
       
     
      
            for(let i of this.props.question_Type2){
               for( let j of this.props.Result2){
                console.log(j);
                if(i.id === (+j.id)){
                    
                    if(i.answers[0].content.toUpperCase() === j.content.toUpperCase()){
                        diem++
                    }
                }
               }
             //  console.log(i.answers[0].content.toUpperCase()); 
            }
        
      
     
            
        
        console.log('deim',diem );
       alert('diem='+diem +'/8')
    }
    render() {
        return (
            <div>
               
               {this.props.question_Type1 !=null ?<ChosseQuesstion/>:''} 
               {this.props.question_Type2 !=null ? <FillQuesstion />:''} 
               <button onClick ={()=>this.showResult()}>Submit</button>
            </div>
        );
    }
    componentDidMount() {
        axios({
            url:'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions',
            method:'GET',
        }).then((res) => {
            console.log(res.data);
            this.props.dispatch(CreateAction(TypesAction.FETCH_DATA,res.data))

        }).catch((err) => {
            console.log(err);
        })
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        question_Type1: state.Quesstion.question_Type1,
        Result1: state.Quesstion.Result1,
        question_Type2: state.Quesstion.question_Type2,
        Result2: state.Quesstion.Result2,
    }
}
export default connect(mapStateToProps) (Home);