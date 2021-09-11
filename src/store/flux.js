const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlCharacters: 'https://www.swapi.tech/api/people',
            urlCharactersDesc: 'https://www.swapi.tech/api/people/1',
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
                        setStore({characters: data})
                        console.log(data)
                    }
                    );
            },
            getCharactersDesc: () => {
                const { urlCharactersDesc } = getStore();
                fetch(urlCharactersDesc)
                    .then((response) => response.json())
                    .then(data => {
                        console.log(data)
                        setStore({charactersDesc: data})
                        
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