import CityList from "../components/cities/CityList";
import { useState, useEffect } from "react";




function AllCitiesPage() {

    const [count] = useState(2000);
    const [visible, setVisible] = useState(true);

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCities, setLoadedCities] = useState([]);


    useEffect(()=>{
        fetch('https://testproject-6792a-default-rtdb.europe-west1.firebasedatabase.app/cities.json')
        .then((response) => { return response.json() })
        .then((data) => {
            const cities = [];

            for (const key in data) {
                const city = {
                    id: key,
                    ...data[key]
                }
                console.log(city);

                cities.push(city);


            }
            setIsLoading(false);
            setLoadedCities(cities)
        }
        )
    }, [count]);
    
        if(isLoading){
            return(
                <section>
                    <p>Loading...</p>
                </section>
            )
        }



    return <div>
        {/* <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}> Click</button> */}
        <div>
            {count > 2005 && <h1>All Cities</h1>}
        </div>

        <button class="glow-on-hover" type="button" onClick={() => setVisible(!visible)}>{visible?'Hide Cities':'Show Cities'}</button>

        {visible && <CityList cities={loadedCities}/>}

    </div>
}

export default AllCitiesPage;