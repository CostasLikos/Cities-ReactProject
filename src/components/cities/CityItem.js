import classes from './CityItem.module.css'
import Card from '../ui/Card'


function CityItem(props) {

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
                    <button>Add to Favorites</button>
                </div>
            </Card>

        </li>
    );

}


export default CityItem;