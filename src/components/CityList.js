import React, {useEffect, useState} from 'react';
import cityService from '../service/CityService';
import CityTable from '../components/CityTable';
import Pagination from '../components/Pagination';
import AlertMessage from '../components/AlertMessage';
import Search from '../components/Search';
const CityList = () => {
    const [cities, setCities] = useState([]);
    const [currPage, setCurrPage] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [filterValue, setFilterValue] = useState('');    
    const [allowEdit, setAllowEdit] = useState();
    const getRequestParams = (page) => {
        let params = {};
        if(page) {
            params["page"] = page;
        }

        return params
    }
    
    const updateCity = (id, newCityName, newPhotoLocation) => {
        let params = {id: id, name: newCityName, photo: newPhotoLocation};
        console.log("Updating city", JSON.stringify(params))
        const body = JSON.stringify(params)
        cityService.updateCity(body)
            .then((response) => {
                retreiveCities();
                }

            )
            .catch((e) => {
                console.log(e);
            });
        
    }
    const retreiveCities = () => {
        const params = getRequestParams(currPage);
        cityService.getAll(params)
            .then((response) => {
                    const {cityList, currPage,totalPages, allowEdit} = response.data;
                    setCities(cityList);
                    setCurrPage(currPage);
                    setTotalPages(totalPages);
                    setAllowEdit(allowEdit);
                    console.log(response.data);
                    
                }
            )
            .catch((e) => {
                console.log(e);
                }
            );
    }

    const fetchCityByFilter = (filterValue) => {
        let params = {};
        
        params["name"] = filterValue;
        cityService.getCityByName(params)
                .then((response) => {
                    const {cityList} = response.data;
                    setCities(cityList);
                    setCurrPage(1);
                    setTotalPages(0);
                    
                })
                .catch((e) => {
                    console.log(e);
                })
        

        

    }

    useEffect(
        retreiveCities, [currPage]
    );
    
    const onPageChange = (event,pageNum) => {
        console.log(pageNum);
        event.preventDefault();
        setCurrPage(pageNum);
    }

    

    const onAlertMessage = (errorMessage) => {
        if (errorMessage) {
            setShowError(true)
            setErrorMessage(errorMessage);
        }

        console.log("error message"+errorMessage);
    }

    const handleSearch = (event) => {
        setFilterValue(event.target.value);
        
    }

    const handleOnBlur = (event) => {
        console.log("On Blur" + event.target.value);
        fetchCityByFilter(filterValue);
        if (filterValue === '') {
            retreiveCities();
        }
    }

    return (
        <div className="container">
            <h3 className="p-3 text-center"> Display List of Cities from Wiki</h3>
            <Search handleSearch={handleSearch} handleOnBlur={handleOnBlur}></Search>
            <AlertMessage errorMessage = {errorMessage} showError = {showError} setShowError = {setShowError}></AlertMessage>  
            <CityTable allowEdit = {allowEdit} 
            cities={cities} currPage={currPage} 
            onAlertMessage ={onAlertMessage} 
            updateCity = {updateCity}></CityTable> 
            <Pagination totalPages={totalPages} currPage={currPage} onPageChange = {onPageChange} >
            </Pagination>
        </div>
    );
}
export  default CityList;