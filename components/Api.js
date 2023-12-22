import axios from "axios";

const apiUrl = 'https://www.jsonkeeper.com/b/MDXW';


export const fetchMenuItems = async () => {
    try {
        let axiosCall = await axios.get('https://www.jsonkeeper.com/b/MDXW');
        console.log(axiosCall);
        
        const drinksData = axiosCall.data[5];
        console.log(drinksData);
        return drinksData;
        
    } catch (error) {
        console.error('Error fetching menu items:', error);
        throw error;
    }
};