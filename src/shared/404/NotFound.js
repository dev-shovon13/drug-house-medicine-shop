const NotFound = () => {
    return (
        // if page not found then show this page 
        <div className="text-center">
            <div className="margin-top-nav"></div>
            <img src="https://i.ibb.co/jJ5gQr9/404.png" alt="not-found" style={{
                height: "82vh", maxWidth: "100%"
            }} />
        </div>
    );
};

export default NotFound;