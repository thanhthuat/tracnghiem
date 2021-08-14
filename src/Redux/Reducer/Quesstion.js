import { TypesAction } from "../Types/Types";
const intialstate = {
    question_Type1: null,
    question_Type2: null,
    Result1: [],
    Result2: [],
}

const Quesstion = (state = intialstate, action) => {
    switch (action.type) {
        case TypesAction.FETCH_DATA:
            let type1 = action.payload.filter((sp) => sp.questionType === 1)
            let type2 = action.payload.filter((sp) => sp.questionType === 2)
            state.question_Type1 = type1;
            state.question_Type2 = type2;
            return { ...state }


        case TypesAction.RESULT_1: {
            console.log(action.payload);
            let UpdateResult1 = [...state.Result1]
            let index = UpdateResult1.findIndex((sp) => sp.idType === action.payload.idType)
            if (index == -1) {
                UpdateResult1.push(action.payload);
            } else {
                UpdateResult1[index] = action.payload
            }

            state.Result1 = UpdateResult1;
            return { ...state }
        }

        case TypesAction.RESULT_2: {
            let update = [...state.Result2]
            let index = update.findIndex((sp) => sp.id === action.payload.id)
            if (index != -1) {
                update[index] = action.payload
            } else {
                update.push(action.payload)
            }
            state.Result2 = update;
           console.log('Result2',state.Result2);
            return { ...state }
        }

        default:
            return { ...state }
    }
}

export default Quesstion;