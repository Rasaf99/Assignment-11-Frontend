import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";

import SERVICE_EDIT from "components/page-specific/service-edit/service-edit";


// ✅ service page
export default function SERVICE_EDIT_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Service - Edit</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <SERVICE_EDIT />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}