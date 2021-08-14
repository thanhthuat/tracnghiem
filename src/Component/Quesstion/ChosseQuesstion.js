import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CreateAction} from '../../Redux/Action/CreateAction';
import {TypesAction} from '../../Redux/Types/Types';
class ChosseQuesstion extends Component {
      Chechh(s,id){
          s.idType=id
          this.props.dispatch(CreateAction(TypesAction.RESULT_1,s))
      }

    render() {
        // questionType: 1, id: 1, content: "Đề văn được Đen tiết lộ trong MV mới là gì?", answers: Array(4)
        console.log('Chosse', this.props.question_Type1);

        return (
            <div>
                <div>
                    {
                        this.props.question_Type1.map((sp, index) => {
                            return (<div key={index}>
                                <label>Cau hoi {sp.id}:{sp.content}</label>
                                {sp.answers.map((qu, index) => {
                                    return (<div key ={index}>
                                        <input type='radio' name={'answers-' + sp.id} value={sp.id} className={'answers-' + qu.id} onChange={()=>this.Chechh(qu,sp.id)} />
                                        <label>{qu.content}</label>
                                    </div>
                                    )
                                })}


                            </div>
                            )
                        })
                    }
                </div>
                {/* <input value="${item.id}" type='radio' name="answers-${this.id}" class='answers-${this.id}'/>
            <label>${item.content}</label> */}
            </div>
        );
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
        question_Type1: state.Quesstion.question_Type1
    }
}
export default connect(mapStateToProps)(ChosseQuesstion);