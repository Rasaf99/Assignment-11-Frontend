import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";

import MY_REVIEWS from "components/page-specific/my-review/my-reviews";


// ✅ service page
export default function MY_REVIEWS_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>My Reviews</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <MY_REVIEWS />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}