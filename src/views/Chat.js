import React, { useContext, useEffect } from "react";
import { db } from "../config/config";
import Toast from "react-bootstrap/Toast";
import { Col, Container, Form, Row } from "react-bootstrap";

import {
  collection,
  getDocs,
  addDoc,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useState } from "react";
import { AuthContext } from "../context/authContext";
import { async } from "@firebase/util";

function Chat() {
  const { user } = useContext(AuthContext);
  console.log("user.email", user.email);
  const [messages, setMessages] = useState(null);
  const [chatMsg, setChatMsg] = useState("");

  const getMessages = async () => {
    try {
      const q = query(collection(db, "chat"));
      onSnapshot(q, (querySnapshot) => {
        const msgs = [];
        querySnapshot.forEach((doc) => {
          const myMessage = {
            id: doc.id,
            data: doc.data(),
          };
          msgs.push(myMessage);
          console.log("msgs", msgs);
          setMessages(msgs);
        });
      });
    } catch (error) {
      console.log("error :>> ", error);
      console.log("error :>> ", error);
    }
  };
  useEffect(() => {
    getMessages();
  }, []);

  const handleChatMsgHandler = (e) => {
    setChatMsg(e.target.value);
  };

  const msgDate = (time) => {
    return new Date(time * 1000).toLocaleString();
  };

  const handleSendMsgHandler = async () => {
    const newChatMsg = {
      text: chatMsg,
      author: user.email,
      date: new Date(),
    };
    try {
      const docRef = await addDoc(collection(db, "chat"), newChatMsg);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleDeleteClick = async (id) => {
    const col = doc(db, "chat", id);
    deleteDoc(col);
    // await deleteDoc(doc(db, "chat", messages.id));
  };
  return (
    <Container className="chats">
      <Row>
        {messages &&
          messages.map((message, i) => {
            return (
              <Col key={i}>
                <Toast onClick={() => handleDeleteClick(message.id)}>
                  <Toast.Header>
                    <strong className="me-auto" style={{ background: "red " }}>
                      {message.data.author}
                    </strong>
                    <small>somethings</small>
                  </Toast.Header>
                  <Toast.Body>{message.data.text}</Toast.Body>
                  <p>{msgDate(message.data.date.seconds)}</p>
                </Toast>
                <br></br>
              </Col>
            );
          })}
      </Row>

      <div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write a message..."
            value={chatMsg}
            onChange={handleChatMsgHandler}
          />
        </Form.Group>
        <button variant="primary" onClick={handleSendMsgHandler}>
          Submit
        </button>
      </div>
    </Container>
  );
}

export default Chat;
