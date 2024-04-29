import React from "react"; 
import Typewriter from 'typewriter-effect'; 

type TypingContent = {
    content : string,
}

export default function TypingEffect(props: TypingContent) { 
    const dolphin = '&#128044'

    return (
      <div className='whitespace-pre-line text-lg italic'>
        <Typewriter
          options={{
            delay: 60,
          }}
          onInit={(typewriter) => {
            const sentenceArray = props.content.split(dolphin)

            sentenceArray.forEach((sentence,index) => {
                let updatedSentence = sentence;
                index !== sentenceArray.length - 1 ? updatedSentence += '\n' : null;
                typewriter.typeString(updatedSentence)
                  .start()
                  .pauseFor(1000);
              });
          }}
        />
      </div>
    );
  }
