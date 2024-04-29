import TypingEffect from "./typingeffect"

type CardContentValues = {
    type : string,
}

export default function CardContent(props: CardContentValues){
    const dolphin = '&#128044'
    
    // Determine what card to show
    function cardCompiler(type: string){
        switch(type){
            case "joker":
                return(
                    <div>
                        <TypingEffect content={`Knock Knock\n ${dolphin} Who's there?\n ${dolphin} Hatch\n ${dolphin} Hatch Who?\n ${dolphin} Bless You!`}/>
                    </div>
                )
            case "learner":
                return(
                    <div>
                        <TypingEffect content={`Learning is a constant for me.\n ${dolphin} Delving into new tech makes me excited 🤩`}/>
                    </div>
                )
            case "enthusiast":
                return(
                    <div>
                        <TypingEffect content={`I am a big fan of bouldering and table tennis!\n ${dolphin} It is a must for me to do sports every week!`}/>
                    </div>
                )
            case "developer":
                return(
                    <div>
                        <TypingEffect content={`Developing interesting projects and coding games are a goto for me XD`}/>
                    </div>
                )
            default:
                return(
                    <p>
                        Work In Progress!
                    </p>
                )
        }
    }

    return(
        <div>
            {cardCompiler(props.type)}
        </div>
    )
}
