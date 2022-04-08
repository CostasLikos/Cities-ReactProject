import classes from './CityItem.module.css'
import Card from '../ui/Card'
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';


function CityItem(props) {

    const FavoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = FavoritesCtx.itemIsFavorite(props.id)

    function toggleFavoritesStatuesHandler() {
        if (itemIsFavorite) {
            FavoritesCtx.removeFavorite(props.id)
        }
        else {
            FavoritesCtx.addFavorite(
                {
                    id: props.id,
                    title: props.title,
                    description: props.description,
                    image: props.image,
                    country: props.country
                }
            )
        }
    }



    return (
        <li className={classes.item}     >
            <Card>
                <div className={classes.image}  >
                    <img src={props.image} alt={props.title} />
                </div>

                <div className={classes.content}   >
                    <h3>{props.title}</h3>
                    <address>{props.country}</address>
                    <p>{props.description}</p>
                </div>

                <div className={classes.actions}    >
                    <button onClick={toggleFavoritesStatuesHandler}>{itemIsFavorite?'Remove from Favorites':'Add to Favorites'}</button>
                </div>
            </Card>

        </li>
    );

}


export default CityItem;