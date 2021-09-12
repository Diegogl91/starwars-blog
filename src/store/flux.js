const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlCharacters: 'https://www.swapi.tech/api/people',
            urlCharactersDesc: 'https://www.swapi.tech/api/people/',
            urlPlanets: 'https://www.swapi.tech/api/planets',
            urlStarships: 'https://www.swapi.tech/api/Starships',
            characters: null,
            charactersDesc: null,
            planet: null,
            starship: null,

        },
        actions: {
            getCharacters: () => {
                const { urlCharacters } = getStore();
                fetch(urlCharacters)
                    .then((response) => response.json())
                    .then(data => {
                        const {results} = data;
                        setStore({characters: results})
                        
                    }
                    );
            },
            getCharactersDesc: async (id) => {
                const { urlCharactersDesc } = getStore();
                fetch(urlCharactersDesc+id)
                    .then((response) => response.json())
                    .then(data => {
                        const {result} = data;
                        console.log("results", result)
                        setStore({charactersDesc: result})
                        
                    }
                    );
            },

            getPlanets: () => {
                const { urlPlanets } = getStore();
                fetch(urlPlanets)
                    .then((response) => response.json())
                    .then(data => setStore({ planet: data }));
            },

            getStarships: () => {
                const { urlStarships } = getStore();
                fetch(urlStarships)
                    .then((response) => response.json())
                    .then(data => setStore({ starship: data }));
            },

        }
    }
}

export default getState;