import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

const QueestionEditor=({
    index=0,
    question,
    addQuestion,
    deleteQuestion,
    questionChange
})=>{
    const [model, setModel] = useState({...question});
    const {questionTypes} = useStateContext();

    useEffect(()=>{
        questionChange(model);
    }, [model]);

    function upperCaseFirst(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
            <div>
                <div className="flex justify-between mb-3">
                    <h4>{index+1}.{model.question}</h4>
                    <div className="flex items-center">
                        <button type="button" className="flex items-center
                                                        tet-xs py-1 px-3 mr-2
                                                        rounded-sm text-white
                                                        bg-gray-600
                                                        hover:bg-gray-700"
                                                        onClick={addQuestion}
                                                        >
                            <PlusIcon className="w-4" />
                            add
                        </button>
                        <button type="button" className="flex items-center
                                                        text-xs py-1 px-3
                                                        rounded-sm border border-transparent
                                                        text-red-500
                                                        hover:border-red-600
                                                        font-semibold"
                                                        onClick={()=>deleteQuestion(question)}
                                                        >
                            <TrashIcon className="w-4" />
                            Delete
                        </button>
                    </div>
                </div>
                <div className="flex gap-3 justify-between mb-3">
                    <div className="flex-1">
                        <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                            Question
                        </label>
                        <input type="text" name="question" id="question" value={model.question} onChange={(ev)=>setModel({...model, question: ev.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:fing-indigo-500 sm:test-sm" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default QueestionEditor;