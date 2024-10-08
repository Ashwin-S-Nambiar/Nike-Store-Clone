const Hero = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Swap Now</button>
                    <button className="sec-btn">Category</button>
                </div>
                <div className="shop">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/amazon.png" alt="Amazon logo" />
                        <img src="/flipkart.png" alt="Flipkart logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/shoe_image.png" alt="Shoe image" />
            </div>
        </main>
    )
}

export default Hero