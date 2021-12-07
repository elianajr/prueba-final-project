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
	

	const updatedata=()=>{
		const messagesref = collection(db, "messages");
		const q = query(messagesref, orderBy("time"));
		
		const unsubscribe = onSnapshot(q, querySnapshot => {
			const chat=[]
			querySnapshot.forEach(doc => {
				chat.push(doc.data().text);
			});
			console.log(chat);
			setDialog(chat)
		});
		
	} 



	const getdata= async()=>{
		const info = collection(db, "messages");
		const q = query(info, orderBy("time"));
		const querySnapshot = await getDocs(q);
		console.log(querySnapshot)
		const messages=[]
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			messages.push(doc.data().text)
		  });
		setDialog(messages)
		console.log(messages)
		
	}

	const add_data=()=>{
		if (message!="") {
			const docRef = addDoc(collection(db, "messages"), {
				text: message,
				time: serverTimestamp()
			});
		}
	}

	
	
		
	

	useEffect(() => {
		
	   getdata()
	}, []);

	useEffect(() => {
	    
		add_data()
		updatedata()
	}, [message]);

  let fecha= new Date()
  console.log(fecha)

	useEffect(() => {
		if (dialog.length > 0) {
			setDialogmap(
				dialog.map((element, index) => {
					return (
						<div className="chat__message" key={index.toString()}>
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
			<div className="chat__header">
				<div className="leftchatheader" />
				<div className="chat__receiver" />
			</div>
			<div className="chat__section">
				<div className="chat__users">
					
				</div>
				<div className="chat__messages">
					<div>{dialogmap}
						<input
							id="inputtext"
							className="chat__inputmessage"
							type="text"
							placeholder="Send a message"
							onKeyPress={(event) => {
								if (event.key == "Enter") {
									if (event.target.value != "") {
										event.preventDefault();
										setMessage(event.target.value);
										event.target.value = "";
									}
								}
							}}
						/>
					</div>
						
				</div>
			</div>
		</div>
	);
};

export default ChatForm;
