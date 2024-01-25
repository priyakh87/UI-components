
import Route from "../components/Route";
import ButtonsPage from "./ButtonsPage";
import AccordionPage from "./AccordionPage";
import DropDownPage from "./DropdownPage";
import ModalPage from "./ModalPage";
import TablePage from "./TablePage";
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
        <Route path='/modal'>
            <ModalPage/>
        </Route>
        <Route path='/table'>
            <TablePage />
        </Route>
    </>
}