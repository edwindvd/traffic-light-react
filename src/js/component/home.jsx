import React, {useState} from "react";


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, setColor] = useState("red");
	return (<div>
		<div className="trafficTop"></div>
		<div className="traffic-light container">
			<div className={"light red " + (color == "red" ? "on" : "")} onClick={()=> {setColor('red')}}>

			</div>
			<div className={"light yellow " + (color == "yellow" ? "on" : "")} onClick={()=> {setColor('yellow')}}>

			</div>
			<div className={"light green " + (color == "green" ? "on" : "")}onClick={()=> {setColor('green')}}>

			</div>
		</div>
		</div>
	);
};

export default Home;
