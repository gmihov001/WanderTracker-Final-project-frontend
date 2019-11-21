import firebase from "firebase/app";
import "firebase/storage";

const config = {
	apiKey: "AIzaSyDa3B54UqYRYY2uD9hq9ip-AgYG7EoLAbc",
	storageBucket: "wandertracker-a8b68.appspot.com"
};
firebase.initializeApp(config);
export default firebase;
