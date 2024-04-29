/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import UserTabs from "../elements/introduction/usertabs";
import TypingEffect from "../elements/introduction/typingeffect";
import { JSONContent } from "./mainpage";

export default function Introduction(props: JSONContent){
    return(
        <div className="section" id='introduction'>
            <div className="flex flex-col justify-center items-center gap-6 sm:flex-row sm:justify-normal">
                <p className="animate-bounce repeat-[3.5] ease-in-out reverse-alternate text-4xl">
                Hello, I'm Marcus
                </p>
            </div>
            <TypingEffect content='Welcome to my website...'/>
            <UserTabs {...props.data}/>
        </div>
    );
}