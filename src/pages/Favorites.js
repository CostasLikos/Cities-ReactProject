import { useContext } from "react";
import FavoritesContext from "../components/store/favorites-context";
import CityList from '../components/cities/CityList'

function FavoritesPage() {

    const FavoritesCtx = useContext(FavoritesContext)
    let content;

    if(FavoritesCtx.totalFavorites ===0){
        content = <p>You got no favorite cities</p>
    }
    else{
        content = <CityList cities={FavoritesCtx.favorites}></CityList>
    }

    return <div>
        <h1>My Favorite Cities</h1>
        {content}
    </div>
}

export default FavoritesPage;