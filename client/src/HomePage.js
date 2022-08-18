import { useState, useEffect } from 'react';
import './App.css';
import BasicSelect from './Component/BasicSelect';
import ButtonAppBar from './Component/ButtonAppBar';
import Sidebar from './Component/Sidebar';
import Cookies from 'universal-cookie';
import axios from './axios-CII';
import BasicTable from './Component/BasicTable';
import DropDown from './Component/DropDown';
import CustomizedAccordions from './Component/DropDown';
import BasicTable1 from './Component/BasicTable1';


const cookies = new Cookies();
function HomePage() {
    const [miningData, SetMiningData] = useState([]);
    const [driverDetail, setDriverDetail] = useState([]);
    const [vendorDetails, setVendorDetails] = useState([]);
    const [currentPage, setCurrentPage] = useState(null);
    const [vehicleDetails, setVehicleDetails] = useState([]);

    const fetchData = async (url) => {
        try {
            const { data } = await axios.get(url, {
                params: {
                    userID: cookies.get('userData').userID,
                },
            })
            return data;
        } catch (error) {
            console.log(error);
            return;
        }
    }
    const fetchRes = async () => {
        const miningRes = await fetchData('/getSitesFromUserID');
        SetMiningData(miningRes?.sites);
    }
    useEffect(() => {
        fetchRes();
    }, [])

    console.log({ vendorDetails });

    return (
        <div className="App">
            <Sidebar />
            <div className="MainContent">
                <ButtonAppBar
                    miningData={miningData}
                    setVendorDetails={setVendorDetails}
                    setCurrentPage={setCurrentPage}
                />
                <div>
                    {(currentPage === "vendors") ? (<BasicTable vendorDetails={vendorDetails} driverDetail={driverDetail} setDriverDetails={setDriverDetail} setCurrentPage={setCurrentPage} />) :
                        (currentPage === "drivers") ? (<CustomizedAccordions driverDetail={driverDetail} setCurrentPage={setCurrentPage} setVehicleDetails={setVehicleDetails} />) : 
                            (currentPage === "vehicles") ? (<BasicTable1 vehicleDetails={vehicleDetails} />) : null}
                </div>
            </div>
        </div>
    );
}

export default HomePage;