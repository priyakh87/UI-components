import classNames from "classnames";

function Panel({children,className,...rest}){

    const classes=classNames('w-full border p-3 shadow rounded cursor-pointer bg-white' ,className);

    return <div className={classes} {...rest}>{children}</div>
}
export default Panel