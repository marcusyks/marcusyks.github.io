import { InternshipContent } from "../data/data"
import CarouselCards from "../elements/internship/carouselcards"
import TypingEffect from "../elements/introduction/typingeffect"

export default function Internship(props: InternshipContent) {
    return (
      <div className="relative min-h-screen">
        <div className='section' id='internship'>
          <p className="text-5xl">Work Experiences</p>
          <TypingEffect content="Here are some internships that I have done"/>
          <CarouselCards {...props}/>
        </div>
      </div>
    )
}