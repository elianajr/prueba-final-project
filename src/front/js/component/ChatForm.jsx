import React, { useContext, useEffect, useState } from "react";
import "../../styles/chatform.scss";
import { db } from "./firebase";
import { app } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { Context } from "../store/appContext.js";
import { collection, addDoc, serverTimestamp, onSnapshot, query, getDocs, orderBy, where } from "firebase/firestore";
import Card from '@mui/material/Card'


const ChatForm = () => {

	const { store, actions } = useContext(Context);
	const [message, setMessage] = useState("");
	const [dialog, setDialog] = useState("");
	const [dialogmap, setDialogmap] = useState("");
	const [userschat, setUserschat] = useState("");
	const [userdestiny,setUserdestiny]=useState("")
	const [usersender,setUsersender]=useState("")
	const [currentuser,setCurrentuser]=useState('')
	
    

	const add_data=(userdestiny)=>{
		if (message!="") {
			const docRef = addDoc(collection(db, "messages"), {
				text: message,
				id_user: usersender,
				time: serverTimestamp(),
				id_receiver: userdestiny,
				chatusers:[usersender,userdestiny]
			});
		}
	}

	const getdata=()=>{
		const info = query(collection(db, "messages"), where("chatusers", "array-contains", usersender),orderBy("time"))

		console.log(info)
		
		
	
		const unsubscribe = onSnapshot(info, (querySnapshot) => {
			const chat = [];
			querySnapshot.forEach((doc) => {
				chat.push(doc.data());
			});
			const conversation = chat.filter(doc=>(doc.id_user==usersender && doc.id_receiver==userdestiny)||(doc.id_user==userdestiny && doc.id_receiver==usersender))
			
			if (conversation.length>0) {
				setDialog(conversation)
			} else{
				setDialog("")
			}
		  });
		
	}

	useEffect( async()=>{
        await actions.getUser(2)
        await actions.getUsers()
        
		return getdata()
    },[])

	useEffect(()=>{
		setCurrentuser(store.user)
		setUsersender(store.user.id)
	},[store.user])
    
	

	useEffect(()=>{
		getdata()
		
	},[userdestiny])

	useEffect(
		() => {
			let otherusers=store.users.filter(element=>element.id!=usersender)
			setUserschat(
				otherusers.map((element, index) => {
					return (
						<Card variant="outlined" key={index.toString()} className="chat__username">
							<img className="chat__userimg" src={element.photo} />
							<span onClick={()=>{setUserdestiny((element.id))}}> {element.username}</span>
						</Card>
					);
				})
			);
		},
		[store.users]
	);

	useEffect(() => {
	    
		add_data(userdestiny)
		
	}, [message]);


	useEffect(() => {
		if (dialog.length > 0) {
			setDialogmap(
				dialog.map((element, index) => {
					return (
						<div
						 className={`chat__message ${element.id_user!=currentuser.id? 'received':''}`}  key={index.toString()}>
							{element.text}
						</div>
					);
				})
			);
		} else{
			setDialogmap("")
		}
	}, [dialog]);
	

	return (
		<div className="chatback">
			<div className="chat__header">
				<div className="chat__sender">
					<span>
					</span>
				</div>
				<div className="chat__receiver" />
			</div>
			<div className="chat__section">
				<div className="chat__users">
					<div>{userschat}</div>
					
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
