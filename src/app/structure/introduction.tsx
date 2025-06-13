/* eslint-disable react/no-unescaped-entities */
import TypingEffect from "../elements/introduction/typingeffect";
import Image from "next/image";

export default function Introduction(){
    return(
        <div className="section flex-col sm:flex-row md:gap-0" id='introduction'>
            <div className='flex flex-col sm:justify-evenly sm:flex-row items-center w-full gap-6'>
                <Image
                    src='/profile.png'
                    width={160}
                    height={160}
                    alt='profile picture'
                    className="shadow-md shadow-background rounded-full md:w-[250px] md:h-[250px]"
                />
                <div className="flex justify-center items-center gap-6 flex-col">
                    <p className="animate-bounce repeat-[3.5] ease-in-out text-4xl">Hello, I'm Marcus</p>
                    <TypingEffect content='I am an aspiring software engineer'/>
                </div>
            </div>
        </div>
    );
}