import PropTypes from 'prop-types'




const Button = ({text, color,onToggle}) => 
    <button 
    className="btn" 
    style={{background:color}}
    onClick={onToggle}
    >{text}</button>;



Button.defaultProps = {
    text : "Button",
    color : "black",
    onClick : () => null

}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button;