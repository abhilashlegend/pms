import Recent from "../../components/recent/Recent";

export default function Dashboard() {
    return (
         <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Recent title="Tasks" />
                    
                     <Recent title="Issues" />
                </div>

                <div className="col-md-4">
                    <Recent title="Latest unread messages" />
                </div>
            </div>
         </div>
    )
}