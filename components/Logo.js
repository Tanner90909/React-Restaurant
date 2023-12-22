import Image from "next/image"

export default function Logo(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Brunch.js</h1>
                        <Image src="/img/brunch-icon.png" height="70" width="70" alt="brunch logo" priority />
                    </div>
                </div>
            </div>
            
        </div>
    )
}