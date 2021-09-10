const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlCharacters: 'https://www.swapi.tech/api/people',
            urlPlanets: 'https://www.swapi.tech/api/planets',
            urlStarships:'https://www.swapi.tech/api/Starships',
            characters: null,
            planet:null,
            starship:null,
           
        },
        actions: {
            getCharacters: () => {
                const {urlCharacters}  = getStore();
                fetch(urlCharacters)
                    .then((response) => response.json())
                    .then(data => {setStore({ charactes: data })
                    console.log(data)}
                    );
            },

            getPlanets: () => {
                const {urlPlanets}  = getStore();
                fetch(urlPlanets)
                    .then((response) => response.json())
                    .then(data => setStore({ planet: data }));
            },

            getStarships: () => {
                const {urlStarships}  = getStore();
                fetch(urlStarships)
                    .then((response) => response.json())
                    .then(data => setStore({ starship: data }));
            },
            
        }
    }
}

export default getState;