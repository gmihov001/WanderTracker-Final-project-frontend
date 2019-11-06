const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			trip: [
				{
					name: "Greece",
					id: "12012019",
					contacts: [
						{
							contact: "First Greek contact",
							address: "Street 1",
							phone: "111.222.333"
						},
						{
							contact: "Second Greek contact",
							address: "Street 2",
							phone: "111.222.444"
						}
					],
					places: [
						{
							place: "First Cool Place in Greece",
							url: "http://www.visitgreece.gr/en/main_cities"
						},
						{
							place: "Second Cool Place in Greece",
							url: "http://www.visitgreece.gr/"
						}
					],
					itinerary: [
						{
							date: "01/01/2020",
							content: "Walking tour at 8am"
						},
						{
							date: "02/01/2020",
							content: "Bike tour at 9am"
						},
						{
							date: "03/01/2020",
							content: "Museum 10am"
						}
					]
				},
				{
					name: "Spain",
					id: "15012019",
					contacts: [
						{
							contact: "First Spanish contact",
							address: "Street 1",
							phone: "111.222.333"
						},
						{
							contact: "Second Spanish contact",
							address: "Street 2",
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
					id: "18012019",
					contacts: [
						{
							contact: "First Italian contact",
							address: "Street 1",
							phone: "111.222.333"
						},
						{
							contact: "Second Italian contact",
							address: "Street 2",
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
