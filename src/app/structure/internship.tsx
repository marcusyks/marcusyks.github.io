import CarouselCards from "../elements/internship/carouselcards"
import TypingEffect from "../elements/introduction/typingeffect"
import { JSONContent } from "./mainpage"

export default function Internship(props: JSONContent) {
    return (
      <div className='section' id='internship'>
        <TypingEffect content="My Work Experience"/>
        <CarouselCards data={props.data}/>
      </div>
    )
}