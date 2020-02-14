import { writable, readable } from 'svelte/store';
import configuration from '../.config.toml';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let firebaseConfig = {
    apiKey: configuration.firestore.apikey,
    authDomain: configuration.firestore.authdomain,
    databaseURL: configuration.firestore.databaseurl,
    projectId: configuration.firestore.projectid,
    storageBucket: configuration.firestore.storagebucket,
    messagingSenderId: configuration.firestore.msgsenderid,
    appId: configuration.firestore.appid,
    measurementId: configuration.firestore.measurementid
};

export const fb = readable(firebase.default.initializeApp(firebaseConfig));
export const db = readable(firebase.default.firestore());
export const userLoggedIn = writable(false);
export const userEmail = writable();
export const userFirstName = writable("");
export const userLastName = writable("");