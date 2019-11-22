const getState = ({ getStore, getActions, setStore }) => {
	return {
		passport_number: "23456789",
		passport_expiry: "12.10.2029",
		store: {
			users: [],
			countries: [
				{
					label: "France",
					coordinates: ["46.0000", "2.0000"],
					value: ""
				},
				{
					label: "Spain",
					coordinates: ["40.0000", "-4.0000"],
					value: ""
				}
			],
			traveldocs: [
				{
					id: "232",
					photo: "Document image",
					country_label: "Bulgaria",
					country_value: "bg"
				},
				{
					id: "565",
					photo: "Document image",
					country_label: "Honduras",
					country_value: "hn"
				}
			],
			stamps: [
				{
					id: "897",
					photo: "Stamp image",
					label: "Costa Rica",
					value: "cr"
				}
			],
			emergency_contacts: [
				{
					id: "234",
					name: "Georgi",
					number: "9546465110"
				},
				{
					id: "567",
					name: "Mom",
					number: "9548730042"
				}
			],
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

			addPasNum: num => {
				const updatedPasNum = num;
				setStore({ passport_number: updatedPasNum });
			},

			addPasExp: date => {
				const updatedPasExp = date;
				setStore({ passport_expiry: updatedPasExp });
			},

			addTrip: object => {
				const store = getStore();
				object.id = Math.ceil((Math.random() + 1) * 100000);

				const updatedTrips = store.trips.concat([object]);
				setStore({ trips: updatedTrips });
				return true;
			},

			addCountry: object => {
				const store = getStore();
				const updatedCountries = store.countries.concat(object);
				setStore({ countries: updatedCountries });
				return true;
			},

			addEmergContact: object => {
				const store = getStore();
				object.id = Math.ceil((Math.random() + 1) * 100000);

				const updatedEmergContacts = store.emergency_contacts.concat([object]);
				setStore({ emergency_contacts: updatedEmergContacts });
				return true;
			},

			removeEmergContact: name => {
				const store = getStore();
				const change = store.emergency_contacts.filter(item => {
					return item.name != name;
				});
				setStore({ emergency_contacts: change });
			},

			addStamp: object => {
				const store = getStore();
				object.id = Math.ceil((Math.random() + 1) * 100000);

				const updatedStamps = store.stamps.concat([object]);
				setStore({ stamps: updatedStamps });
				return true;
			},

			removeStamp: id => {
				const store = getStore();
				const change = store.stamps.filter(item => {
					return item.id != id;
				});
				setStore({ stamps: change });
			},

			// addDoc: object => {
			// 	const store = getStore();
			// 	object.id = Math.ceil((Math.random() + 1) * 100000);

			// 	const updatedDocs = store.traveldocs.concat([object]);
			// 	setStore({ traveldocs: updatedDocs });
			// 	return true;
			// },

			addDoc: object => {
				console.log("addDoc:" + object);
				fetch("https://3000-c365cd7d-ea0e-4445-a2c0-0130685ce181.ws-us02.gitpod.io/documents", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(object)
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						fetch("https://3000-c365cd7d-ea0e-4445-a2c0-0130685ce181.ws-us02.gitpod.io/users")
							.then(response => response.json())
							.then(data => {
								setStore({ users: data });
							});
					});
				return true;
			},

			/* removeDoc: id => {
				const store = getStore();
				const change = store.traveldocs.filter(item => {
					return item.id != id;
				});
				setStore({ traveldocs: change });
            },*/

			removeDoc: id => {
				const store = getStore();
				fetch("https://3000-c365cd7d-ea0e-4445-a2c0-0130685ce181.ws-us02.gitpod.io/user/1/document/" + id, {
					method: "DELETE"
				})
					.then(res => res.json())
					.then(() => {
						fetch("https://3000-c365cd7d-ea0e-4445-a2c0-0130685ce181.ws-us02.gitpod.io/users")
							.then(response => response.json())
							.then(data => {
								setStore({ users: data });
							});
					});

				/*const change = store.traveldocs.filter(item => {
					return item.id != id;
				});
				setStore({ traveldocs: change });*/
			},

			addContact: (tripID, newContact) => {
				const store = getStore();
				newContact.contid = Math.ceil((Math.random() + 1) * 100000);

				const updatedTrips = store.trips.map(item => {
					if (tripID === item.id) {
						item.contacts = item.contacts.concat([newContact]);
					}
					return item;
				});
				setStore({ trips: updatedTrips });
				return true;
			},

			addPlace: (tripID, newPlace) => {
				const store = getStore();
				newPlace.placeid = Math.ceil((Math.random() + 1) * 100000);

				const updatedTrips = store.trips.map(item => {
					if (tripID === item.id) {
						item.places = item.places.concat([newPlace]);
					}
					return item;
				});
				setStore({ trips: updatedTrips });
				return true;
			},

			addItinerary: (tripID, newItinerary) => {
				const store = getStore();
				newItinerary.itinid = Math.ceil((Math.random() + 1) * 100000);

				const updatedTrips = store.trips.map(item => {
					if (tripID === item.id) {
						item.itinerary = item.itinerary.concat([newItinerary]);
					}
					return item;
				});
				setStore({ trips: updatedTrips });
				return true;
			},

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
