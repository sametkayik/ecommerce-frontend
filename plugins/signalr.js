import * as signalR from '@microsoft/signalr';

export default ({app}, inject) => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:44328/chatHub")
        .withAutomaticReconnect()
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.start().catch(err => console.error(err));

    inject("signalR", connection);
};
