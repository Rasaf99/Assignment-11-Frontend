import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";

import SERVICE_ADD from "components/page-specific/service-add/service-add";


// ✅ service page
export default function SERVICE_ADD_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Service - Add</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <SERVICE_ADD />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}