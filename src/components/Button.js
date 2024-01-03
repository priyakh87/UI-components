
import classNames from "classnames"

export default function Button({
    children,
primary,
secondary,
success,
danger,
warning,
rounded,
outline,
link,
disable}){
    const classes=classNames(`px-2 py-2 m-1.5 text-white rounded border`,
    {'bg-blue-600':primary,
    'bg-gray-400':secondary,
    'bg-green-500':success,
    'bg-red-700':danger,
    'bg-yellow-400':warning,
    'text-black border-black':outline,
    'text-gray-600 border-gray-500':rounded,
    'text-blue-500 underline border-0':link,
    'text-gray-400 bg-gray-300 pointer-events-none':disable
})
    return <button className={classes}>{children}</button>
}