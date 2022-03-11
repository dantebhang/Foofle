import React, { createContext, useContext, useState } from "react";

//pass this context to entire application

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	// for /videos /search or /images path
	const getResults = async (urlType) => {
		setIsLoading(true);

		const response = await fetch(`${baseUrl}${urlType}`, {
			method: "GET",
			headers: {
				"x-rapidapi-host": "google-search3.p.rapidapi.com",
				"x-rapidapi-key": process.env.REACT_APP_API_KEY,
			},
		});

		const data = await response.json();

		//combat the data key that is "entries" in news as it confuses the data fetching
		if (urlType.includes("/news")) {
			setResults(data.entries);
		} else if (urlType.includes("/images")) {
			setResults(data.image_results);
		} else {
			setResults(data.results);
		}

		setIsLoading(false);
	};

	return (
		<ResultContext.Provider
			value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
		>
			{children}
		</ResultContext.Provider>
	);
};

export const useResultContext = () => useContext(ResultContext);
