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
							contact: "First Spanish contact",
							address: "Spanish Street 1",
							phone: "111.222.333"
						},
						{
							contact: "Second Spanish contact",
							address: "Spanish Street 2",
							phone: "111.222.444"
						}
					],
					places: [
						{
							place: "First Cool Place in Spain",
							url: "URL"
						},
						{
							place: "Second Cool Place in Spain",
							url: "URL"
						}
					],
					itinerary: [
						{
							date: "01/02/2020",
							content: "Walking tour in Spain at 8am"
						},
						{
							date: "02/02/2020",
							content: "Bike tour in Spain at 9am"
						},
						{
							date: "03/02/2020",
							content: "Museum in Spain 10am"
						}
					]
				}
			]
		},
		actions: {
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
						item.contacts = item.contacts.concat(object.contacts);
						item.places = item.places.concat(object.places);
						item.itinerary = item.itinerary.concat(object.itinerary);
						return item;
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
			},

			/*addContact: (tripID, newContacts) => {
                const store = getStore();
                //contact.id = Math.random(Math.ceil(1,1000000));

                const temp = store.trips.map( item => {
                    if (item.id == tripID) {
                     item.contacts.concat(newContacts);
                    }
                    return item;
                };

                setStore({trips: temp});
            },*/

			//addPlace:

			//addItinerary:

			removeContact: (tripID, contact) => {
				const store = getStore();

				const temp = store.trips.map(theTrip => {
					if (theTrip.id == tripID) {
						theTrip.contacts = store.trips.contacts.filter(contact => {
							return contact.id != contact;
						});
					}
				});
				setStore({ trips: temp });
			},

			//removePlace: id =>

			//removeItinerary: id =>

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
