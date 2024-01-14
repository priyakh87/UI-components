import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";


function Link({to,children,className,activeLink}){
        
    const {navigate,currentPath}=useNavigation();
    const classes=classNames('text-blue-500 capitalize hover:underline',className,
    currentPath===to&&activeLink);

    //handle click function
    const handleClick=(event)=>{
        if(event.metaKey|| event.ctrlKey)
            {
                return;
            }        
            event.preventDefault();
            navigate(to);
    }
    return(
        <a className={classes} onClick={handleClick} href={to} target="">{children}</a>
    )
}

export default Link;