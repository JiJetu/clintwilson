const Header = ({ title, description, className }) => {

    return (
        <div className={`satoshi flex flex-col gap-1 ${className}`}>
            <h1 className="text-3xl font-bold text-white tracking-tight">{title}</h1>
            <p className="text-description text-lg">{description}</p>
        </div>
    );
};

export default Header;