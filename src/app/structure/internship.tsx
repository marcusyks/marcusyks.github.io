import { InternshipContent } from "../data/data"
import CarouselCards from "../elements/internship/carouselcards"
import TypingEffect from "../elements/introduction/typingeffect"

export default function Internship(props: InternshipContent) {
    return (
      <div className='section' id='internship'>
        <TypingEffect content="My Work Experience"/>
        <CarouselCards {...props}/>
      </div>
    )
}