import React, {useState} from 'react';

//const CityTable = ({cities}, {currPage}, ) => {

const CityTable = (props) => {
    const {
        allowEdit,
        cities,
        currPage,
        onAlertMessage,
        updateCity       
    } = props;
    const [inEditMode, setInEditMode] = useState({
        status: false,
        rowKey: null
    });
    
    const [cityName, setCityName] = useState();
    const [photoLocation, setPhotoLocation] = useState();
    const onEdit = (id) => {
        setInEditMode({
            status: true,
            rowKey: id
        })
        console.log("clicked" + id);
    }

    const urlPatternValidation = URL => {
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
        return regex.test(URL);
      };

    const onSave = ({id, newCityName, newPhotoLocation}) => {
        const isTrueVal = !newPhotoLocation || urlPatternValidation(newPhotoLocation);
        if (!isTrueVal) {
            onAlertMessage("Enter valid Photo Location in url format");
        } else {
            updateCity(id, newCityName, newPhotoLocation);
        }
        console.log(isTrueVal);
        setInEditMode({
            status: false,
            rowKey: null
        })
        setCityName();
        setPhotoLocation();
    }

    const onCancel = () => {
        setInEditMode({
            status: false,
            rowKey: null
        })
        // reset the unit price state value
        setCityName();
        setPhotoLocation();
    }


    return(
        <React.Fragment>
            <table className= "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CITY NAME</th>
                        <th>PHOTO</th>
                        {allowEdit ? <th>ACTION</th>: []}
                        
                    </tr>
                </thead>
                <tbody>
                    {cities && cities.map((city) => (
                        <tr key={city.id}>
                            <td>{city.id}</td>
                            <td>
                                { inEditMode.status && inEditMode.rowKey === city.id 
                                    ? 
                                        <input value={cityName} 
                                        onChange={(event) => setCityName(event.target.value)}></input>
                                    :
                                        (city.name)
                                }
                               </td>
                            <td>
                                { inEditMode.status && inEditMode.rowKey === city.id 
                                    ? 
                                        <input value={photoLocation} 
                                        onChange={(event) => setPhotoLocation(event.target.value)}></input>
                                    :
                                        (<img src={city.photo} width="43" height="50" alt={city.name}></img>)
                                    
                                }
                            </td>
                            <td>
                                { allowEdit 
                                    ?
                                        inEditMode.status && inEditMode.rowKey === city.id
                                        ?
                                        (
                                            <React.Fragment>
                                                <button
                                                    className={"btn-success"}
                                                    onClick={() => onSave({id: city.id, newCityName: cityName, newPhotoLocation: photoLocation})}
                                                >
                                                    Save
                                                </button>

                                                <button
                                                    className={"btn-secondary"}
                                                    style={{marginLeft: 8}}
                                                    onClick={() => onCancel()}
                                                >
                                                    Cancel
                                                </button>
                                            </React.Fragment>

                                        )
                                        :
                                        ( 
                                        <button className={"btn-primary"} 
                                        type="submit" 
                                        value="Edit"
                                        onClick={()=>onEdit(city.id)}
                                        >Edit</button>
                                        )
                                     : []               

                                }
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>       
    );

}

export default CityTable;