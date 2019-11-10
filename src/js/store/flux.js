const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			trips: [
				{
					name: "Greece",
					month: "September",
					year: "2019",
					id: "12012019",
					contacts: [
						{
							id: "234",
							contact: "First Greek contact",
							address: "Greek Street 1",
							phone: "111.222.333"
						},
						{
							id: "567",
							contact: "Second Greek contact",
							address: "Greek Street 2",
							phone: "111.222.444"
						}
					],
					places: [
						{
							id: "323",
							place: "First Cool Place in Greece",
							url: "http://www.visitgreece.gr/en/main_cities"
						},
						{
							id: "989",
							place: "Second Cool Place in Greece",
							url: "http://www.visitgreece.gr/"
						}
					],
					itinerary: [
						{
							id: "989",
							date: "01/01/2020",
							content: "Walking tour Greece at 8am"
						},
						{
							id: "345",
							date: "02/01/2020",
							content: "Bike tour Greece at 9am"
						},
						{
							id: "765",
							date: "03/01/2020",
							content: "Museum Greece 10am"
						}
					]
				},
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
				},
				{
					name: "Italy",
					month: "May",
					year: "2020",
					id: "18012019",
					contacts: [
						{
							contact: "First Italian contact",
							address: "Italian Street 1",
							phone: "111.222.333"
						},
						{
							contact: "Second Italian contact",
							address: "Italian Street 2",
							phone: "111.222.444"
						}
					],
					places: [
						{
							place: "First Cool Place in Italy",
							url: "URL"
						},
						{
							place: "Second Cool Place in Italy",
							url: "URL"
						}
					],
					itinerary: [
						{
							date: "01/03/2020",
							content: "Walking tour in Italy at 8am"
						},
						{
							date: "02/03/2020",
							content: "Bike tour in Italy at 9am"
						},
						{
							date: "03/03/2020",
							content: "Museum in Italy 10am"
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

			editTrip: (id, object) => {
				const store = getStore();
				const change = store.trips.map(item => {
					if (item.id == id) {
						return { ...trips, ...object };
					}
					return item;
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

				const newTrips = store.trips.concat(object);
				setStore({ trips: newTrips });
			},

			//deletePlace

			//deleteItinerary

			deleteContact: (tripID, contactID) => {
				const store = getStore();

				const temp = store.trips.map(theTrip => {
					if (theTrip.id == tripID) {
						theTrip.contacts = store.trips.contacts.filter(contact => {
							return contact.id != contactID;
						});
					}
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
