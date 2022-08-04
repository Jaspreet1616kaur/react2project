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
} from "firebase/firestore";
import { useState } from "react";
import { AuthContext } from "../context/authContext";

function Chat() {
  //   console.log("db :>> ", db);
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
          msgs.push(doc.data());
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

  return (
    <Container>
      <Row>
        {messages &&
          messages.map((message, i) => {
            return (
              <Col key={i}>
                <Toast>
                  <Toast.Header>
                    <strong className="me-auto">{message.author}</strong>
                    <small>somethings</small>
                  </Toast.Header>
                  <Toast.Body>{message.text}</Toast.Body>
                  <p>{msgDate(message.date.seconds)}</p>
                </Toast>
                <br></br>
              </Col>
            );
          })}
      </Row>

      <Form>
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
      </Form>
    </Container>
  );
}

export default Chat;
