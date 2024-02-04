/**
 * Loads data from localStorage if it exists, otherwise fetches it from a URL.
 * @param {string} url - The URL to fetch data from if it doesn't exist in localStorage.
 * @param {string} key - The key under which the data is stored in localStorage.
 * @returns {Promise<string>} A Promise that resolves with the loaded data.
 */
async function loadOrFetchData(url, key) {
    // Check if data exists in localStorage
    const data = localStorage.getItem(key);
    if (data) {
        // Data exists, return it
        return data;
    } else {
        // Data doesn't exist, fetch it from the URL
        try {
            alert('Downloading words pack (5Mb). To cancel this process exit the tab')
            const response = await fetch(url);
            const fetchedData = await response.text();

            // Save fetched data to localStorage
            const words = fetchedData.split('\n')

            const array = words.filter(word => {
                return word.length >= 4 && /^[a-z]+$/.test(word);
            });

            const filteredWords = array.join('\n')

            localStorage.setItem(key, filteredWords);
            alert('Words have been downloaded successfully')

            return filteredWords;
        } catch (error) {
            alert('Failed to download words pack')
            console.error(`Failed to fetch data: ${error}`);
        }
    }
}