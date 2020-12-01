import { io } from 'socket.io-client';

const webSocket = io.connect("https://testnet.polkadex.trade:3000", {secure: true, transports: ['websocket']});

export default webSocket;
