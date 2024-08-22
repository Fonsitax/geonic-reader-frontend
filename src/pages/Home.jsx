import { getAllReadings, getReadingByCountry, getReadingById } from '../services/readings-service';
import SearchBar from '../components/Search';

const Home = () => {

    async function onTestReadingAll() {
        const response = await getAllReadings();
        console.log('readingAll: ', response);
    }

    async function onTestReadingById() {
        const response = await getReadingById(2);
        console.log('ReadingById: ', response);
    }

    async function onTestReadingByCountry() {
        const response = await getReadingByCountry('china');
        console.log('ReadingByCountry: ', response);
    }


    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold">Home Component</h2>
            <p>Welcome to the Home page!</p>
            <div>
                <h1>      
                    <SearchBar />
                </h1>
            </div>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onTestReadingAll}>TEST ALL READINGS
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onTestReadingById}>TEST READINGS BY ID 2
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onTestReadingByCountry}>TEST READINGS BY COUNTRY CHINA
            </button>
        </div>
    );

};

export default Home;
