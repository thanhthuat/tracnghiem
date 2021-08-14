import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CreateAction} from '../../Redux/Action/CreateAction';
import {TypesAction} from '../../Redux/Types/Types';
class FillQuesstion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          formValue: {
            id:''
          },
        };
      }
      handleChange = (event) => {
        this.setState({
          formValue:{
            // ...this.state.formValue,
            [event.target.name]: event.target.value,
            id:event.target.className
          },
         
        },()=>{
           
            this.props.dispatch(CreateAction(TypesAction.RESULT_2,this.state.formValue))
        }); 
      };    
 render() {
        return (
            <div>
                {this.props.question_Type2.map((sp, index) => {
                    return (<div key={index}>
                        <h3>Câu hỏi {sp.id}: {sp.content} </h3>
                        <input name='content' onChange={(event)=>this.handleChange(event)} className={sp.id}/>
                    </div>
                    )
                })}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        question_Type2: state.Quesstion.question_Type2
    }
}

export default connect(mapStateToProps)(FillQuesstion);