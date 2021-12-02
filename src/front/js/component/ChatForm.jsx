import React, { useContext, useEffect, useState } from "react";
import "../../styles/chatform.scss";
import { db } from "./firebase";
import { app } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc, serverTimestamp, onSnapshot, query, getDocs, orderBy, limit } from "firebase/firestore";

const ChatForm = () => {
	const [message, setMessage] = useState("");
	const [dialog, setDialog] = useState("");
	const [dialogmap, setDialogmap] = useState("");

	const changeinput = event => {
		event.preventDefault();
		let input = document.getElementById("inputtext");
		setMessage(input.value);
		input.value = "";
	};

	const updatedata=()=>{
		const messagesref = collection(db, "messages");
		const q = query(messagesref, orderBy("time"));
		const unsubscribe = onSnapshot(q, querySnapshot => {
			querySnapshot.forEach(doc => {
				chat.push(doc.data().text);
			});
			console.log(chat);
			setDialog(chat);
		});

	} 

	const getdata=()=>{
		const info = collection(db, "messages");
		const q = query(info, orderBy("time"));
		console.log(q)
	}
		
	

	useEffect(() => {
		getdata()
	}, []);

	useEffect(() => {
		const docRef = addDoc(collection(db, "messages"), {
			text: message,
			time: serverTimestamp()
		});
		updatedata();
	}, [message]);

	const chat = [];

	useEffect(() => {
		if (dialog.length > 0) {
			setDialogmap(
				dialog.map((element, index) => {
					return (
						<div className="message" key={index.toString()}>
							{element}
						</div>
					);
				})
			);
		}
	}, [dialog]);

	console.log(dialog);

	return (
		<div className="chatback">
			<div className="chatheader">
				<div className="leftchatheader" />
				<div className="rightchatheader" />
			</div>
			<div className="mainchat">
				<div className="leftmainchat" />
				<div className="rightmainchat">
					<div>{dialogmap}</div>
					<form>
						<input
							id="inputtext"
							className="inputform"
							type="text"
							placeholder="Send a message"
							onKeyPress={event => {
								if (event.key == "Enter") {
									if (event.target.value != "") {
										event.preventDefault();
										setMessage(event.target.value);
										event.target.value = "";
									}
								}
							}}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChatForm;
