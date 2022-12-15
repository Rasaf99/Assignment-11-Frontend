import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import SERVICE_DETAILS from "components/page-specific/service-details/service-details";



// ✅ service page
export default function SERVICE_DETAILS_PAGES() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Service Details</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <SERVICE_DETAILS />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}