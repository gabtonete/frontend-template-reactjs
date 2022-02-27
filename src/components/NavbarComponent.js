export const NavbarComponent = props => {
    const {
        text,
        option1,
        option2,
        option3,
    } = props;

    return (
        <div className="dropdown-button">
            <div className="div-button">{text}</div>
            <div className="dropdown-menu">
                <a href="#">{option1}</a>
                <a href="#">{option2}</a>
                <a href="#">{option3}</a>
            </div>
        </div>
    )
}
