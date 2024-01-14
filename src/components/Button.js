import PropTypes  from "prop-types"
import classNames from "classnames"

 function Button({
    children,
    primary,
    secondary,
    success,
    danger,
    warning,
    rounded,
    outline,
    link,
    disable,
    ...rest}){
    
    const classes=classNames(`px-2 py-2 m-1.5 rounded border text-gray-400`,
    {'bg-blue-600 border-blue-600 ':primary,
    'bg-gray-400 border-gray-400 ':secondary,
    'bg-green-500 border-green-500 ':success,
    'bg-red-700 border-red-700':danger,
    'bg-yellow-400 border-yellow-400 ':warning,
    'bg-transparent':outline,
    'text-blue-600':outline && primary,
    'text-gray-700':outline && secondary,
    'text-green-500':outline && success,
    'text-red-700':outline && danger,
    'text-yellow-400':outline && warning,
    'rounded-full':rounded,
    'text-blue-500 underline border-0':link,
    'text-gray-400 bg-gray-300 pointer-events-none':disable
})
    return <button {...rest} className={classes}>{children}</button> }

Button.propTypes={
    
        primary:PropTypes.bool,
    }
export default Button