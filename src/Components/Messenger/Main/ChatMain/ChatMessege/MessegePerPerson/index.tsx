import { useContext } from "react"
import { isTemplateExpression } from "typescript";
import { AppContext } from "../../../../../../Context/store"

interface MessegePerPersonProps extends React.PropsWithChildren {
    types?: "sender" | "receiver"
}

const MessegePerPerson: React.FunctionComponent<MessegePerPersonProps> = ({ types = "sender" }) => {
    const { state: { messeges } } = useContext(AppContext);
    console.log(messeges.MessegeList)
    switch (types) {
        case ("sender"):
            return (
                <li className="flex justify-end">
                    <div className={"p-2 w-4/5 rounded-lg shadow-md mx-2 bg-MainPurple-2"}>
                        <h4 className="font-bold text-sm">Sepideh Sharifani</h4>
                        <p className="text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                            totam molestias obcaecati illum dicta non culpa, sint consectetur
                            necessitatibus optio.
                        </p>
                    </div>
                    <img
                        className="rounded-full mr-2 w-10 h-10 overflow-hidden"
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhD4684PcmRZG-1ONraWGzrBAA9VAjKJBOmy55ZF2&s"}
                        alt=""
                    />
                </li>
            )
        case ("receiver"):
            return (
                <li className="flex justify-start">
                    <img
                        className="rounded-full ml-2 w-10 h-10 overflow-hidden"
                        src={messeges.messegeDetail[0].image}
                        alt=""
                    />
                    <div className={"p-2 w-4/5 rounded-lg shadow-md mx-2 bg-MainPurple-2"}>
                        <h4 className="font-bold text-sm">{messeges.messegeDetail[0].name}</h4>

                        <p className="text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at eius architecto delectus facilis laboriosam, libero placeat rem quaerat doloribus deserunt maxime repudiandae accusantium minus?
                        </p>

                    </div>
                </li>
            )
    }
}

export default MessegePerPerson