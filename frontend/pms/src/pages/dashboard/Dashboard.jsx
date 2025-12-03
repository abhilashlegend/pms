import PageHeader from "../../components/pageheader/PageHeader";
import Recent from "../../components/recent/Recent";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Dashboard() {

    useDocumentTitle('Dashboard | PMS');
    
    return (
        <>
            <PageHeader title="Dashboard" />
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
        </>
         
    )
}