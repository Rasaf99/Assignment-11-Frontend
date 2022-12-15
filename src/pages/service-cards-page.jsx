import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import SERVICE_CARDS from "components/page-specific/service-cards/service-cards";


// ✅ service page
export default function SERVICE_CARDS_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Service Cards</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <SERVICE_CARDS />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}