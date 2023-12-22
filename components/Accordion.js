import React from "react"


export default function Accordion({menuData}){
    if (menuData !== null){
        let menuDrinkItem = menuData.filter((item => item.category === "Drink"))
        let menuAppetizerItem = menuData.filter((item => item.category === "Appetizer"))
        let menuBreakfastItem = menuData.filter((item => item.category === "Breakfast"))

    return(
        <div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h4>Drinks</h4>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body1">
                            <div className="container">
                                <div className="row">
                                    {
                                        menuDrinkItem.map((item) => (
                                            <div className="col-4">
                                            <div className="card h100">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-body-secondary">{item.description}</h6>
                                                    <p className="card-text">${item.price}</p>
                                                </div>
                                            </div>  
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h4>Appetizers</h4>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="container">
                                <div className="row">
                                    {
                                        menuAppetizerItem.map((item) => (
                                            <div className="col-4">
                                            <div className="card h100">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-body-secondary">{item.description}</h6>
                                                    <p className="card-text">${item.price}</p>
                                                </div>
                                            </div>  
                                            </div>
                                        ))
                                     }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <h4>Brunch Entrees</h4>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="container">
                                <div className="row">
                                    {
                                        menuBreakfastItem.map((item) => (
                                            <div className="col-4">
                                            <div className="card h-100">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-body-secondary">{item.description}</h6>
                                                    <p className="card-text">${item.price}</p>
                                                </div>
                                            </div>  
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
}