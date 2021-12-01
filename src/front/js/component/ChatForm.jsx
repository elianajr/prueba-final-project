import React, { useContext, useEffect, useState } from "react";
import "../../styles/chatform.scss";
import { db } from "./firebase";
import { app } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc, serverTimestamp, onSnapshot, query, getDocs } from "firebase/firestore";

const ChatForm = () => {
	const [message, setMessage] = useState("");

	const changeinput = event => {
		event.preventDefault();
		let input = document.getElementById("inputtext");
		setMessage(input.value);
		input.value = "";
	};

	useEffect(
		() => {
			const docRef = addDoc(collection(db, "messages"), {
				text: message,
				time: serverTimestamp()
			});
		},
		[message]
	);

	return (
		<div className="chatback">
			<div className="chatheader">
				<div className="leftchatheader" />
				<div className="rightchatheader" />
			</div>
			<div className="mainchat">
				<div className="leftmainchat" />
				<div className="rightmainchat">
					<form onSubmit={changeinput}>
						<input id="inputtext" className="inputform" type="text" placeholder="Send a message" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChatForm;
