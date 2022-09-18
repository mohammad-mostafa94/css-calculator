import React from 'react';

const Calculator = () => {
    return (
        <div className='calculator'>
            <h1 className='title'>Calculator</h1>
            <div className="fullCalculator">
                <div className="inputValue">
                    <input inputmode="numeric" />
                </div>
                <div className="mainDiv">
                    <div className="div1">1</div>
                    <div className="div2">2</div>
                    <div className="div3">3</div>
                    <div className="div4">4</div>
                    <div className="div5">5</div>
                    <div className="div6">6</div>
                    <div className="div7">7</div>
                    <div className="div8">8</div>
                    <div className="div9">9</div>
                    <div className="div10">10</div>
                    <div className="div11">11</div>
                    <div className="div12">12</div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;