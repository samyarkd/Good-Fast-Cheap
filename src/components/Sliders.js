import 'styles/Sliders.css';
import React, { useEffect, useState } from 'react';
import Switch from "react-switch";

function Sliders() {


    // Sliders State (Checked or not)
    const [checkedGreen, setCheckedGreen] = useState(false)
    const [checkedBlue, setCheckedBlue] = useState(false)
    const [checkedRed, setCheckedRed] = useState(false)




    // Handle Click   
    function handleChangeGreen () {
        setCheckedGreen(!checkedGreen) 
    }
    function handleChangeBlue () {
        setCheckedBlue(!checkedBlue) 
    }
    function handleChangeRed () {
        setCheckedRed(!checkedRed) 
    }


    // Logic
    useEffect(() => {
        if (checkedGreen === true && checkedBlue === true && checkedRed === true ) {
            setCheckedRed(false) 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkedGreen])

    useEffect(() => {
        if (checkedGreen === true && checkedBlue === true && checkedRed === true ) {
            setCheckedGreen(false) 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkedBlue])

    useEffect(() => {
        if (checkedGreen === true && checkedBlue === true && checkedRed === true ) {
            setCheckedBlue(false) 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkedRed])

    

    return (
        <div className="Sliders">
        <div className='wrapper'>

            {/* Sliders Components */}
            <label>
            <Switch
            handleDiameter={35}
            height={25}
            width={70}
            offHandleColor={'#ddd'}
            onHandleColor={'#1cc908'} 
            onColor={'#138a06'}
            checkedIcon={false}
            uncheckedIcon={false}
            activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0)"
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            onChange={handleChangeGreen}
            checked={checkedGreen}
            />
            <span>Good</span>
            </label>


            <label>
            <Switch
            handleDiameter={35}
            height={25}
            width={70}
            offHandleColor={'#ddd'}
            onHandleColor={'#3730ff'} 
            onColor={'#10009e'}
            checkedIcon={false}
            uncheckedIcon={false}
            activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0)"
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            onChange={handleChangeBlue}
            checked={checkedBlue}
            />
            <span>Fast</span>
            </label>


            <label>
            <Switch
            handleDiameter={35}
            height={25}
            width={70}
            offHandleColor={'#ddd'}
            onHandleColor={'#ff003c'} 
            onColor={'#a30010'}
            checkedIcon={false}
            uncheckedIcon={false}
            activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0)"
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            onChange={handleChangeRed}
            checked={checkedRed}
                />
            <span>Cheap</span>
            </label>



        </div>
        </div>
    );
}

export default Sliders;
