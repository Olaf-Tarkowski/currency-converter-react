import "./style.css"

const Container = ({ children }) => {
    return (
        <main className="body__backgroundImage">
            {children}
        </main>
    )
};

export default Container;