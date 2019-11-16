const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			trips: [
				{
					name: "Spain",
					month: "January",
					year: "2021",
					id: "15012019",
					contacts: [
						{
							contid: "123432",
							contact: "First Spanish contact",
							address: "Spanish Street 1",
							phone: "111.222.333"
						},
						{
							contid: "345621",
							contact: "Second Spanish contact",
							address: "Spanish Street 2",
							phone: "111.222.444"
						}
					],
					places: [
						{
							placeid: "223344",
							place: "First Cool Place in Spain",
							url: "URL"
						},
						{
							placeid: "334455",
							place: "Second Cool Place in Spain",
							url: "URL"
						}
					],
					itinerary: [
						{
							itinid: "445566",
							date: "01/02/2020",
							content: "Walking tour in Spain at 8am"
						},
						{
							itinid: "667788",
							date: "02/02/2020",
							content: "Bike tour in Spain at 9am"
						},
						{
							itinid: "998877",
							date: "03/02/2020",
							content: "Museum in Spain 10am"
						}
					]
				},
				{
					name: "Greece",
					month: "February",
					year: "2022",
					id: "16012011",
					contacts: [
						{
							contid: "723432",
							contact: "First Greek contact",
							address: "Greek Street 1",
							phone: "111.222.333"
						},
						{
							contid: "745621",
							contact: "Second Greek contact",
							address: "Greek Street 2",
							phone: "111.222.444"
						}
					],
					places: [
						{
							placeid: "441122",
							place: "First Cool Place in Greece",
							url: "URL GR"
						},
						{
							placeid: "441177",
							place: "Second Cool Place in Greece",
							url: "URL GR"
						}
					],
					itinerary: [
						{
							itinid: "887766",
							date: "06/02/2023",
							content: "Walking tour in Greece at 8am"
						},
						{
							itinid: "776655",
							date: "06/04/2023",
							content: "Bike tour in Greece at 9am"
						},
						{
							itinid: "665544",
							date: "06/01/2023",
							content: "Museum in Greece 10am"
						}
					]
				}
			]
		},
		actions: {
			login: (usename, pw) => {},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			editTrip: (tripID, object) => {
				console.log();
				const store = getStore();
				let change = [];
				change = store.trips.map(item => {
					if (item.id == tripID) {
						//let updatedTrip = Object.assign(item, object);
						return { ...item, ...object };
					} else {
						return item;
					}
				});

				setStore({ trips: change });
			},

			deleteTrip: id => {
				const store = getStore();
				const change = store.trips.filter(item => {
					return item.id != id;
				});
				setStore({ trips: change });
			},

			addTrip: object => {
				const store = getStore();
				object.id = Math.ceil((Math.random() + 1) * 100000);

				const updatedTrips = store.trips.concat(object);
				setStore({ trips: updatedTrips });
				return true;
			},

			addContact: (tripID, newContact) => {
                const store = getStore();
                contact.id = Math.ceil((Math.random() + 1) * 100000);

                const updatedContacts = store.trips.map(item => {
                    if(tripID === item.id) {
                        item.contacts = item.contacts.concat([newContact]);
                    }
                };

				return true;
            },

			//addPlace:

			//addItinerary:

			removeContact: (tripID, contactID) => {
				const store = getStore();

				const temp = store.trips.map(theTrip => {
					if (theTrip.id === tripID) {
						theTrip.contacts = theTrip.contacts.filter(item => {
							return item.contid !== contactID;
						});
					}
					return theTrip;
				});

				setStore({ trips: temp });
			},

			removePlace: (tripID, placeID) => {
				const store = getStore();

				const temp = store.trips.map(theTrip => {
					if (theTrip.id === tripID) {
						theTrip.places = theTrip.places.filter(item => {
							return item.placeid !== placeID;
						});
					}
					return theTrip;
				});

				setStore({ trips: temp });
			},

			removeItinerary: (tripID, itineraryID) => {
				const store = getStore();

				const temp = store.trips.map(theTrip => {
					if (theTrip.id === tripID) {
						theTrip.itinerary = theTrip.itinerary.filter(item => {
							return item.itinid !== itineraryID;
						});
					}
					return theTrip;
				});

				setStore({ trips: temp });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
