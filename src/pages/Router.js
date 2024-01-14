
import Route from "../components/Route";
import ButtonsPage from "./ButtonsPage";
import AccordionPage from "./AccordionPage";
import DropDownPage from "./DropdownPage";
export default function Router(){
    return <>
        <Route path='/button'>
            <ButtonsPage/>
        </Route>
        <Route path='/accordion'>
            <AccordionPage />
        </Route>
        <Route path='/dropdown'>
            <DropDownPage />
        </Route>
    </>
}