const API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = import.meta.env.VITE_CAT_API_KEY;

export const fetchCats = async (limit = 10) => {
    try {
        const response = await fetch(`${API_URL}?limit=${limit}`, {
            headers: {
                'x-api-key': API_KEY
            }
        });

        if (!response.ok) throw new Error('Ошибка сети');
        return await response.json();
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        return [];
    }
};