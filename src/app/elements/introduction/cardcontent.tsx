import { CardCompiler } from "@/app/utils"

type CardContentValues = {
    type : string,
}

export default function CardContent(props: CardContentValues){
    return(
        <div>
            {CardCompiler(props.type)}
        </div>
    )
}
