import Banner from './Banner'
import Eflyer from './Eflyer'
// import WeeklySpecial from './WeeklySpecial'
// import HomePageCategory from './homePageCategory'
import globalCSS from './homePage.css'

// `MagentoRoute` renders the CMS page, so this component renders nothing.
// This file would be obsolete if the CMS could deliver a stylesheet.
const HomePage = () => {
    return (
        <>
            <Banner />
            <Eflyer />
            {/* <WeeklySpecial /> */}
            {/* <HomePageCategory /> */}
        </>
    )
}

export default HomePage

// Use the import to make webpack inject a stylesheet.
HomePage.globalCSS = globalCSS
