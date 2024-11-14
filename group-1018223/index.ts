import express from "express";
import http, { IncomingMessage, request } from "http";
import bodyParser from "body-parser";
import { cp } from "fs";
import { db } from "./db";
import expressSession, { SessionData } from "express-session";
import { RowDataPacket } from "mysql2";
import { dirname } from "path";
import { Server, Socket } from "socket.io";

declare module "express-session" {
  interface SessionData {
    user?: { id: number; username: string };
  }
}

interface SessionIncomingMessage extends IncomingMessage {
  session: SessionData;
}

interface SessionSocket extends Socket {
  request: SessionIncomingMessage;
}

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const session = expressSession({
  secret: "verysecret",
  resave: false,
  saveUninitialized: true,
  cookie: {},
});

const wrapper = (middleware: any) => (socket: Socket, next: any) =>
  middleware(socket.request, {}, next);
io.use(wrapper(session));

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(jsonParser);
app.use(urlencodedParser);
app.use(session);

app.get("/", (request, response) => {
  if (request.session.user) {
    response.send("Hello " + request.session.user.username + " !");
  } else response.send("You are not logged in yet");
});

app.get("/admin", (request, response) => {
  response.sendFile(__dirname + "/admin.html");
});

app.get("/login", (request, response) => {
  response.sendFile(__dirname + "/login.html");
});
app.get("/register", (request, response) => {
  response.sendFile(__dirname + "/register.html");
});

app.get("/createchannel", (request, response) => {
  if (request.session.user) {
    response.sendFile(__dirname + "/createchannel.html");
  } else {
    response.redirect("/channel");
  }
});
app.get("/channel", (request, response) => {
  if (request.session.user) {
    response.sendFile(__dirname + "/channel.html");
  } else {
    response.redirect("/");
  }
});

app.post("/", (request, response) => {
  const insertQuery = `INSERT INTO users (username, pseudonyme, password, roles_id) VALUES (?, ?, ?, ?)`;
  const username = request.body.username;
  const pseudonyme = request.body.pseudonyme;
  const password = request.body.password;
  const roles_id = 1;

  console.log(username, pseudonyme, password);
  db.query(
    insertQuery,
    [username, pseudonyme, password, roles_id],
    (err, result) => {
      if (err) {
        console.error(
          "Erreur lors de l'insertion des données : " + err.message
        );
      } else {
        console.log("Données insérées avec succès dans la base de données");
        // Envoyez une confirmation au client
        io.emit("inscription-reussie", "Inscription réussie");
        response.redirect("/login");
      }
    }
  );
});

app.post("/register", (request, response) => {
  const insertQuery = `INSERT INTO users (username, pseudonyme, password, roles_id) VALUES (?, ?, ?, ?)`;
  const username = request.body.username;
  const pseudonyme = request.body.pseudonyme;
  const password = request.body.password;
  const roles_id = 1;

  console.log(username, pseudonyme, password);
  db.query(
    insertQuery,
    [username, pseudonyme, password, roles_id],
    (err, result) => {
      if (err) {
        console.error(
          "Erreur lors de l'insertion des données : " + err.message
        );
      } else {
        console.log("Données insérées avec succès dans la base de données");
        // Envoyez une confirmation au client
        io.emit("inscription-reussie", "Inscription réussie");
        response.redirect("/login");
      }
    }
  );
});

app.post("/createchannel", (request, response) => {
  console.log("bonjour");
  const insertQuery = `INSERT INTO channels (room, roles_id) VALUES (?,?)`;
  const room = request.body.channel;
  const roles_id = 1;

  console.log("Bonjour" + room);
  db.query(insertQuery, [room, roles_id], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'insertion des données : " + err.message);
    } else {
      console.log("Données insérées avec succès dans la base de données");
      // Envoyez une confirmation au client
      io.emit("Channel crée", "Channel crée");
      response.redirect("/login");
    }
  });
});

app.post("/login", (request, response) => {
  const username = request.body.username;
  const password = request.body.password;
  if (username && password) {
    const query = `select * from users where username = '${username}'`;
    db.query(query, username, (error, result) => {
      if (error) {
        console.log(error);
        response.send("user not found");
      } else {
        console.log("user found");
        const data = <RowDataPacket>result;
        request.session.user = {
          id: data[0].id,
          username: data[0].username,
        };
        //if roles_id === '2', redirection page admin
        /*
        const role_admin = `select roles_id from users where username = '${username}'`;
        if (role_admin === "2") {
          response.redirect("/admin");
        } else {
          console.log(result);
          response.redirect("/chat");
        }
        */
        console.log(result);
        response.redirect("/chat");
      }
    });
  } else {
    console.log("username or password missing");
    response.send("username or password is missing");
  }
});

app.post("/admin", (request, response) => {
  const username2 = request.body.username2;
  const password2 = request.body.password2;
  if (username2 && password2) {
    const query2 = `update users SET password = '${password2}' where username = '${username2}'`;
    db.query(query2, username2, (error) => {
      if (error) {
        console.log(error);
        response.send("You can't modified your password");
      } else {
        console.log("password modified with success");
      }
    });
  }
});

app.get("/chat", (request, response) => {
  if (request.session.user) {
    response.sendFile(__dirname + "/chat.html");
  } else {
    response.redirect("/");
  }
});

io.on("connection", (defaultSocket: Socket) => {
  const socket = <SessionSocket>defaultSocket;
  const userSession = socket.request.session.user;
  if (userSession) {
    console.log(userSession?.username + " is connected");
    console.log(userSession);
    socket.on("chat message", (mssg) => {
      io.emit("chat message", mssg);
      console.log(`${userSession?.username} dit ${mssg}`);
    });
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  }
});

httpServer.listen(8080, () => console.log("hello world"));
