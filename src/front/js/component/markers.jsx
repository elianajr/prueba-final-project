import React from "react";
import {Marker, Popup} from 'react-leaflet'
import {IconLocation} from "./iconLocation.jsx";

const Markers = () => {
    return(
        <div> 
            <Marker position ={{lat:"36.69607184118358", lng:"-4.443754371312125"}} /* icon={IconLocation} */>
                <Popup>
				    Mi CASA <br /> aki!!!
				</Popup>
            </Marker>
            <Marker position ={{lat:"36.68429561734708", lng:"-4.4438159139463345"}} /* icon={IconLocation} */>
                <Popup>
				    Guadalmar <br /> BEACH
				</Popup>
            </Marker>
            <Marker position ={{lat:"36.66310013992609", lng:"-4.458165348112302"}} /* icon={IconLocation} */>
                <Popup>
				    Bajondillo <br /> BEACH
				</Popup>
            </Marker>
            <Marker position ={{lat:" 36.5925477494608", lng:"-4.522863616485652"}} /* icon={IconLocation} */>
                <Popup>
				    Carvajal <br /> BEACH
				</Popup>
            </Marker>
            <Marker position ={{lat:"36.54710553883746", lng:"-4.615685019469322"}} /* icon={IconLocation} */>
                <Popup>
				    Los bolivhes <br /> BEACH
				</Popup>
            </Marker>
            <Marker position ={{lat:"36.48610420935234", lng:"-4.738123271052825"}} /* icon={IconLocation} */>
                <Popup>
				    Calahonda <br /> BEACH
				</Popup>
            </Marker>
        
        </div>
    )
}
export default Markers;