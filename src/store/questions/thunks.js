import {setQuestions, savedResults, setSaving} from "./questionSlice";
import {loadQuestions} from "../../helpers/loadQuestions.js";
import {FirebaseDB} from "../../firebase/config.js";
import {setDoc, doc} from "firebase/firestore/lite";
import {getFormattedDate} from "../../funtions/dateFormated.js";

export const startLoadingQuestions = () => {
    return async (dispatch ) => {
        const questions = await loadQuestions();
        dispatch( setQuestions( questions));
    }
}

export const startSavingAnswers = (userAnswers) => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const timestamp = getFormattedDate();

        const docRef = doc(FirebaseDB, `results/${uid}/answers/${timestamp}`);
        await setDoc(docRef, userAnswers);

        dispatch( savedResults() )
    }
}
