import { InternshipContent } from "../data/data"
import CarouselCards from "../elements/internship/carouselcards"
import TypingEffect from "../elements/introduction/typingeffect"

export default function Internship(props: InternshipContent) {
    return (
      <div className='section' id='internship'>
        <p className="text-4xl">Work Experiences</p>
        <TypingEffect content="Here are some internships that I have done"/>
        <CarouselCards {...props}/>
      </div>
    )
}