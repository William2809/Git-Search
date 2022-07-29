import UserSearch from "../users/UserSearch";
import UserResults from "../users/UserResults";

function Home() {
    return (
        <div>
            {/* Search Component */}
            <UserSearch />
            <UserResults />
        </div>
    )
}

export default Home