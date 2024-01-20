import {useState} from "react";
import PageComponent from "../components/PageComponent";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function SurveyView(){
    const [survey, setSurvey] = useState({
        title: "",
        slug: "",
        status: false,
        description: "",
        image: null,
        expire_date: "",
        questions:[],
    });
    return (
        <PageComponent title="Create new survey">
            <form action="#" method="POST" onSubmit={onSubmit}>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        {/* Image */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Photo</label>
                            <div className="mt-1 flex items-center">
                                {survey.image_url && (
                                    <img src="survey.image_url" alt="" className="w-32 h-32 object-cover" />
                                )}
                                {!survey.image_url && (
                                    <span className="flex justify-center items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                        <PhotoIcon className="2-8 h-8"/>
                                    </span>
                                )}
                                <button type="button" className="relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                   <input type="file" className="absolute left-0 top-0 right-0 bottom-0 opacity-0" onChange={onImageChoose} /> 
                                    Change
                                </button>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Survey Title
                            </label>
                            <input type="text" />
                        </div>
                        {/* Title */}

                    </div>
                </div>
            </form>
        </PageComponent>
    )
}